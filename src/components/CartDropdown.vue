<template>
    <div class="container-dropdown">

        <table class="render-elements">
            <th>Imagem</th>
                <th>
                    Título
                </th>
                <th>
                    Quantidade
                </th>
                <th>
                    Preço (R$)
                </th>
            <tr class="wrapper-cart-list" v-for="movie in listNoRepeat" :key="movie.element.id">
                <CartElement v-bind:posterPath="movie.element.poster_path" v-bind:title=movie.element.original_title
                    :id="movie.element.id" :price="movie.element.vote_count" :qnt="movie.qnt" />
            </tr>
        </table>
        <div class="value-total">
            <h4>
                Total: {{ total }}
            </h4>
        </div>
    </div>




</template>

<script>
import CartElement from '@/components/CartElement.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name: 'CartDropdown',
    setup() {
        const store = useStore()
        const listNoRepeat = computed(() => store.state.cartCount)
        const sizeList = store.getters.cartCountSize
        const total = store.getters.totalPriceCart
        return {
            listNoRepeat,
            sizeList,
            total
        }
    },
    components: {
        CartElement
    }
}
</script>

<style scoped>
.container-dropdown{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
table {
    width: 100%;
    justify-content: center;
    align-items: center;

}

tr {
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
}
th {
    font-size: 15px;
    color: #FFF;
}
.value-total{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: #FFF;
    font-size: 20px;
}
</style>