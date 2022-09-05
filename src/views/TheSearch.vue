<template>
    <main class="container">
        <div class="pagination">
            <button v-on:click="previousPagination()" v-show="pageCount > 1" class="button-pagination">Anterior</button>
            <button v-on:click="nextPagination()" class="button-pagination">Próxima</button>
        </div>
        <MovieProductRender v-bind:movies="popularMovies" />
    </main>

</template>

<script>

import MovieProductRender from '../components/MovieProductRender.vue';

import api, { key } from "../services/api"
export default {
    name: 'TheSearch',
    data() {
        return {
            pageCount: 1,
            popularMovies: [],
        }
    },
    mounted() {
        api.get('/search/movie', {
            params: {
                query: this?.$route?.params.searchText,
                api_key: key,
                language: 'pt-BR',
                page: 1
            }
        }).then((response) => {
            this.popularMovies = response.data.results
        })

    },
    updated() {
        api.get('/search/movie', {
            params: {
                query: this?.$route?.params.searchText,
                api_key: key,
                language: 'pt-BR',
                page: 1
            }
        }).then((response) => {
            this.popularMovies = response.data.results
        })

    },
    components: {
        MovieProductRender
    },
    methods: {
        nextPagination: function () {
            this.pageCount++
            api.get('/movie/popular', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: this.pageCount
                }
            }).then((response) => {
                this.popularMovies = response.data.results
            })
        },
        previousPagination: function () {
            this.pageCount--
            api.get('/movie/popular', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: this.pageCount
                }
            }).then((response) => {
                this.popularMovies = response.data.results
            })
        }

    }

}

</script>
<style scoped>
.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    top: 100px;

}
.container::before{
    width: 100px;
}

.pagination {
    width: 80%;
    height: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    top:200px;
}

.button-pagination {
    width: 100px;
    height: 30px;
    background-color: #000;
    color: #FFF;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    border: 2px solid #000;
    transition: .5s cubic-bezier(0.55, 0.025, 0.675, 0.97);
    margin-left: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
}

.button-pagination:hover {
    background-color: #FFF;
    color: #000;

}
</style>