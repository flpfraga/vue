<template>
    <div v-if="sizeList > 0" class="render-elements">

        <table>
            <tr>
                <th></th>
                <th>
                    Título
                </th>
                <th>
                    Quantidade
                </th>
                <th>
                    Preço (R$)
                </th>
            </tr>
            <tr v-for="movie in listNoRepeat" :key="movie.element.id">
                <CartElement v-bind:posterPath="movie.element.poster_path" :title=movie.element.original_title
                    :id="movie.element.id" :price="movie.element.vote_count" :qnt="movie.qnt" />
            </tr>
        </table>
        <div class="checkout">
            <CheckoutButton />

        </div>
    </div>
    <div v-else>
        <h3 class="sub-title">
            Você ainda não adicionou itens ao seu carrinho!
        </h3>
    </div>



</template>

<script>

import CheckoutButton from './CheckoutButton.vue';
import CartElement from '@/components/CartElement.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name: 'CartRender',
    setup() {
        const store = useStore()
        var listNoRepeat = computed(() => store.state.cartCount)
        var sizeList = store.getters.cartCountSize
        return {
            store,
            listNoRepeat,
            sizeList
        }
    },
    components: {
        CartElement,
        CheckoutButton
    },
    
    beforeUpdate() {
        this.sizeList = this.store.getters.cartCountSize
    }

}
</script>

<style scoped>
.render-elements {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.checkout {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 80px;
}

table {
    width: 80%;
    padding-bottom: 20px;
}

th {
    font-size: 20px;
    color: #FFF;
}

tr {
    width: 90%;
    font-size: 20px;
    height: auto;
    justify-content: center;
    align-items: center;
}

.sub-title {
    color: #FFF;
    font-size: 25px;
}
</style>