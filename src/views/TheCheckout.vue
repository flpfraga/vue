<template>

    <div class="container-checkout" v-show="listNoRepeat.length > 0">
        <h3>
            Finalizar Compra
        </h3>
        <div class="sub-container">
            <div class="checkout-dados">
                <CheckoutForm />
            </div>
            <div class="checkout-cart">
                <CartDropdown />
            </div>
        </div>
    </div>
    <div v-show="!listNoRepeat.length > 0">
        <h3 class="empyt-container">
            Você ainda não adicionou itens ao seu carrinho!
        </h3>
    </div>


</template>

<script>

import CheckoutForm from '@/components/CheckoutForm.vue';
import CartDropdown from '@/components/CartDropdown.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name: 'TheCheckout',
    setup() {
        const store = useStore()
        var listNoRepeat = computed(() => store.state.cartCount)
        return {
            store,
            listNoRepeat,
        }
    },
    components: {
        CheckoutForm,
        CartDropdown
    },
   
    
}
</script>

<style>
.container-checkout {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.sub-container {
    width: 100%;
    height: 100%;
    display: flex;
}

.sub-container::before {
    content: '';
    height: 70%;
    width: 3px;
    background-color: #000;
    position: relative;
    left: 50%;
}

.checkout-dados {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

}

.empyt-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: #FFF;
}

.checkout-cart {

    width: 40%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

h3 {
    font-size: 30px;
    color: #FFF;
}

@media(max-width: 1050px) {
    .container-checkout {

        height: auto;

    }

    .sub-container {
        flex-direction: column-reverse;
        align-items: center;
        height: auto;
    }

    .sub-container::before {
        content: '';
        height: 0;
        width: 0;
        left: unset;

    }

    .checkout-dados {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .checkout-cart {
        width: 70%;
        height: 50%;
        display: flex;
        margin-bottom: 40px;
        justify-content: center;
        align-items: flex-start;
    }
}
</style>