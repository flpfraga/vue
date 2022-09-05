<template>
    <div class="wrapper">
        <ImageProduct v-bind:banner="element.poster_path" />
        <DescriptionProduct v-bind:title="titulo" v-bind:genre="genreName" v-bind:stars="element.vote_average"
            v-bind:price="price" />
        <AddButton v-bind:movie="element" />
        <button class="favorite-button" v-bind:onclick="() => toogleFavourite()">
            <FavouriteButton v-model:isFavourite="this.isFavourite" />
        </button>
    </div>
</template>

<script>

import ImageProduct from './ImageProduct.vue';
import DescriptionProduct from './DescriptionProduct.vue';
import AddButton from './AddButton.vue';
import FavouriteButton from './FavouriteButton.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default {
    name: 'MovieProduct',
    components: {
        ImageProduct,
        DescriptionProduct,
        AddButton,
        FavouriteButton
    },
    props: {
        element: Object
    },
    data() {
        return {
            isFavourite: false
        }
    },
    setup() {
        const store = useStore()
        const genreList = computed(() => store.state.genreList)

        return {
            price: "",
            genreName: "",
            genreList,
            titulo: "",
            id: 0,
            store,


        }
    },
    beforeMount() {
        this.price = this.element.vote_count / 100
        this.titulo = this.element.original_title
        const favoriteList = computed(() => this.store.state.listFavorites)
        this.isFavourite = favoriteList.value.some(element => element.id === this.element.id)
        if (this.element.genre_ids) {
            if (this.element.genre_ids.length) {
                this.genreName = this.genreList.find(e => e.id === this.element.genre_ids[0]).name
                this.price = this.element.vote_count / 100
                return
            }
        }
    },
    beforeUpdate() {
        const favoriteList = computed(() => this.store.state.listFavorites)
        this.isFavourite = favoriteList.value.some(element => element.id === this.element.id)
    },

    methods: {
        toogleFavourite: function () {
            const favoriteList = computed(() => this.store.state.listFavorites)
            this.isFavourite = favoriteList.value.some(element => element.id === this.element.id)
            if (this.isFavourite) {
                this.isFavourite = false
                this.store.commit('excludeFavoriteMovieById', this.element.id)
                return
            }
            this.isFavourite = true
            this.store.commit('addFavoriteMovie', this.element)
        }
    }



}

</script>
<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid #000;
    box-shadow: -10px -5px 5px rgba(0, 0, 0, 0.3);
    position: relative;

}
</style>