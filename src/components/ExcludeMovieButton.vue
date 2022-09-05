<template>
    <button class="exclude-element" v-bind:onclick="() => excludeElement()">
        <font-awesome-icon :icon="['fa', 'trash']" class="close-icon" />
    </button>
</template>

<script>

import { useStore } from 'vuex';
export default {
    name: 'ExcludeMovieButton',
    setup() {
        const store = useStore()
        return {
            store
        }
    },
    props: {
        id: Number
    },
    methods: {

        excludeElement: function () {
            this.store.commit('excludeCartMovieById', this.id)
        }
    }
}

</script>

<style>
.exclude-element {
    background: transparent;
    border:0;
    outline: none;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
}

.close-icon {
    font-size: 15px;
    color:#FFF;
}

.exclude-element:hover {
    transform: scale(1.1);
}

/* @media(max-width:600px) {
    .close-icon {
        font-size: 10px;
    }
} */
</style>