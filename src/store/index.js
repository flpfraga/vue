import { createStore } from 'vuex'

const store = createStore({
    state: {
        cartList: [],
        cartCount: [],
        listFavorites: [],
        genreList: [
            {
                "id": 28,
                "name": "Ação"
            },
            {
                "id": 12,
                "name": "Aventura"
            },
            {
                "id": 16,
                "name": "Animação"
            },
            {
                "id": 35,
                "name": "Comédia"
            },
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 99,
                "name": "Documentário"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10751,
                "name": "Família"
            },
            {
                "id": 14,
                "name": "Fantasia"
            },
            {
                "id": 36,
                "name": "História"
            },
            {
                "id": 27,
                "name": "Terror"
            },
            {
                "id": 10402,
                "name": "Música"
            },
            {
                "id": 9648,
                "name": "Mistério"
            },
            {
                "id": 10749,
                "name": "Romance"
            },
            {
                "id": 878,
                "name": "Ficção científica"
            },
            {
                "id": 10770,
                "name": "Cinema TV"
            },
            {
                "id": 53,
                "name": "Thriller"
            },
            {
                "id": 10752,
                "name": "Guerra"
            },
            {
                "id": 37,
                "name": "Faroeste"
            }
        ]

    },
    getters: {
        genreById(state, id) {
            const name = state.genreList.find(element => element.id === id)
            return name
        },
        cartListSize(state) {
            let count = 0;
            state.cartCount.forEach(element => {
                count += element.qnt
            });
            return count
        },
        elementRepetitions(state) {

            const noRepeatList = []
            const tamList = state.cartList.length
            noRepeatList.push({ qnt: 1, comic: state.cartList[0] })
            for (let c = 1; c < tamList; c++) {
                const tamList = noRepeatList.length
                let isRepeat = false
                for (let k = 0; k < tamList; k++) {
                    if (noRepeatList[k].comic.id === state.cartList[c].id) {
                        noRepeatList[k].qnt++
                        isRepeat = true
                    }

                }
                if (!isRepeat) {
                    noRepeatList.push({ qnt: 1, comic: state.cartList[c] })
                }
            }
            return noRepeatList
        },
        cartCountSize(state) {
            return state.cartCount.length
        },

        favouritesListSize(state) {
            return state.listFavorites.length
        },
        totalPriceCart(state){
            let total = 0
            state.cartList.forEach(element =>{
                total+= (element.vote_count /100)
            })
            return total.toFixed(2)
        }

    },
    mutations: {
        addCartMovie(state, movie) {

            if (state.cartList.find(e => e.id === movie.id)) {
                state.cartCount.map((element) => {

                    if (element.element.id === movie.id) {

                        element.qnt++
                        return element
                    }
                    return element

                })
                return
            }
            state.cartList.push(movie)
            state.cartCount.push({ qnt: 1, element: movie })

        },

        excludeCartMovieById(state, id) {
            state.cartList = state.cartList.filter(movie => movie.id !== id)
            state.cartCount = state.cartCount.filter(movie => movie.element.id !== id)
        },
        addFavoriteMovie(state, movie) {
            
            state.listFavorites.push(movie)
        },
        excludeFavoriteMovieById(state, id) {
            
            state.listFavorites = state.listFavorites.filter(movie => movie.id !== id)
        },
        clearCarts(state){
            state.cartCount = []
            state.cartList = []
        }
    },
    actions: {

    }

})

export default store;