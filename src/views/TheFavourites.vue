<template>
    <main class="container" v-show="favouritesMoviesList.length>0">
        <MovieProductRender v-bind:movies="favouritesMoviesList" />
    </main>
    <h3 class="empyt-container" v-show="!favouritesMoviesList.length>0">
        Nenhum filme adicionado aos favoritos
    </h3>

</template>

<script>

import MovieProductRender from '../components/MovieProductRender.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
export default {
    name: 'TheFavourites',
    setup() {
        const store = useStore()
        const favouritesMoviesList = computed(()=> store.state.listFavorites)
        return {
           favouritesMoviesList
        }
    },

    components: {
        MovieProductRender
    },

}

</script>
<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    top: 100px;

}
.container::before{
    width: 100px;
}
.empyt-container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-size: 30px;
    color:#FFF;
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
    background-color:#414141;
    color: #000;

}
</style>