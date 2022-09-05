<template>
    <td>
        <ImageProduct :banner="posterPath" />
    </td>

    <td>
        {{ this.title }}
    </td>

    <td>
        {{ this.qnt }}
    </td>

    <td>
        {{ this.price / 100 }}
    </td>
    <div class="exclude-board">
        <ExcludeMovieButton :id="this.id" />
    </div>
</template>

<script>
import ExcludeMovieButton from './ExcludeMovieButton.vue';
import ImageProduct from './ImageProduct.vue';
export default {
    name: 'CartElement',
    data() {
        return {
            finalPrice: 0
        }
    },
    props: {
        posterPath: String,
        title: String,
        price: Number,
        qnt: Number,
        id: Number
    },

    components: {
        ImageProduct,
        ExcludeMovieButton
    },

}
</script>

<style>
td {
    width: 100%;
    height: 100%;
    color: #FFF;
    font-weight: bold;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1px #000 solid;
}

td:first-child {
    width: 15%;
}

td:first-child+td {
    width: 65%
}

td:first-child+td+td {
    width: 10%
}

td:first-child+td+td+td {
    width: 10%
}

</style>