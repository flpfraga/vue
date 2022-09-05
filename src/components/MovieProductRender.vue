<template>
 
    <div class="wrapper-render">
        <ul>
            <li v-for="movie in movies" v-bind:key="movie.id">
                <MovieProduct v-bind:element="movie" />
            </li>

        </ul>
    </div>
</template>

<script>


import MovieProduct from './MovieProduct.vue';

export default {
    name: 'MovieProductRender',
    components: {
        MovieProduct
    },
    props: {
        movies: Object,
    },


}
</script>

<style scoped>
.wrapper-render {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

ul {
    width: 95%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    transition: 0.3s;
    flex-wrap: wrap;
    margin-bottom: 80px;
}

li {
    width: 150px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    /* padding-bottom: 30px; */
    
}
</style>