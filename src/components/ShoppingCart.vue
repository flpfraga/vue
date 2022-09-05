<template>

    <div class="cart-wrapper">
        <button v-bind:onclick="() => checkoutPage()" class="shopping-cart">
            <font-awesome-icon :icon="['fa', 'shopping-cart']" class="cart-icon" />
            <div class="shopping-box" v-if="this.listSize > 0">
                <font-awesome-icon :icon="['fa', 'exclamation-circle']" class="exclamation-icon" />
            </div>
        </button>
        <div class="open-cart">
            <font-awesome-icon :icon="['fa', 'angle-down']" class="down-arrow-icon" />
            <div class="dropdown-elements" v-if="this.listSize > 0">
                <CartDropdown />
            </div>
        </div>
    </div>
</template>

<script>

import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import CartDropdown from './CartDropdown.vue'
import { useRouter } from 'vue-router';

export default {
    name: 'ShoppingCart',
    setup() {
        const router = useRouter()
        const store = useStore()
        var listSize = computed(() => store.getters.cartListSize)
        return {
            listSize,
            router
        }

    },
    components: {
        CartDropdown
    },
    methods:{
        checkoutPage:function(){
            if(this.listSize > 0){

                this.router.push('/checkout/')
            }
        }
    }


}
</script>

<style>
.cart-wrapper {
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-left: 2px solid rgba(255, 255, 255, 0.3);
}

.open-cart {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.down-arrow-icon {
    font-size: 18px;
    color: #FFF;
}

.dropdown-elements {
    width: 400px;
    height: auto;
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 100px;
    z-index: 9999;
    font-size: 10px;
    animation: sliderY 0.1s ease-in;
    background-color: #000;
    border: 1px solid #FFF;
}

.open-cart:hover .dropdown-elements {
    display: flex;
}

.cart-icon {
    position: fixed;
    color: #FFF;
    font-size: 25px;
}

.exclamation-icon {
    background: transparent;
    position: relative;
    bottom: 25px;
    left: 0px;
    color: #FFF;
}

.shopping-cart {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border: 0;
    background-color: transparent;
    outline: none;
    padding: 0;
}

@keyframes sliderY {
    from {
        transform: translateY(-90px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 100%;
    }

}
</style>