<template>
    <div v-if="this.listaFavoritos">

    </div>
    <font-awesome-icon :icon="['fa', 'heart-circle-check']" class="favorite-icon" v-if="this.isFavourite" />
    <font-awesome-icon :icon="['fa', 'heart']" class="favorite-icon" v-else />


</template>

<script>


// import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name: 'FavouriteButton',
    props: {
        isFavourite: Boolean
    },
    setup() {
        const store = useStore()
        return{
            store,
            listaFavoritos:[],            
            // isFavourite:false
        }
    },



}
</script>

<style>
.favorite-icon {

    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;

}

.favorite-button {
    border: none;
    background: transparent;
    outline: none;
    position: absolute;
    z-index: 2;
    bottom: 320px;
    left: 115px;
}

.favorite-icon:hover {
    color: #FFF;
    transform: scale(1.05);
}
</style>