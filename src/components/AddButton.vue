<template>
    <button class="add-buton" v-bind:onclick="() => { addCartList() }">
        Adicionar
    </button>
</template>

<script>

import { useStore } from 'vuex';
export default {
    name: 'AddButton',
    data() {
        return {
            store: useStore()
        }
    },
    props: {
        movie: Object
    },
    methods: {
        addCartList: function () {

            this.store.commit('addCartMovie', this.movie)

        }
    }
}

</script>

<style scoped>
.add-buton {
    width: 100%;
    height: 30px;
    background-color: #000;
    color: #FFF;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    border: 2px solid #000;
    transition: .5s cubic-bezier(0.55, 0.025, 0.675, 0.97);
}

.add-buton:hover {
    background-color:#414141;
    border: #414141;
}
</style>