<template>
    <button class="end-buton" v-bind:onclick="() => { toCheckOutPage() }">
        Finalizar Compra
    </button>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    name: 'CheckoutButton',
    setup(){
        const router = useRouter()
        return{
            router
        }
    },
    methods:{
        toCheckOutPage: function(){
            this.router.push('/checkout')
        }
    }
}
</script>

<style>

.end-buton {
    width: 250px;
    height: 75px;
    background-color: #000;
    color: #FFF;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    border:0;
    border-radius: 25px;
    transition: .5s ease-in;
}

.end-buton:hover {
    box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.2);
}
</style>