<template>
    <div class="header-style">

        <TheLogo />
        
        <InputSearch />
        <button class="nav-buttons"
        v-bind:onclick="()=>toFavouritesPage()"
        >
            <font-awesome-icon :icon="['fa', 'heart']"/>
        </button>
        <ShoppingCart v-if="useRoute!=='/checkout/'"/>

    </div>
</template>

<script>
import {  useRouter } from 'vue-router';
import ShoppingCart from './ShoppingCart.vue';
import TheLogo from './TheLogo.vue';
import InputSearch from './InputSearch.vue';

export default {
    name: 'TheHeader',
    props:{
        useRoute:String
    },
    setup(){
        const router = useRouter()
        
        return{
            router,
            
        }
    },
    components: {
        ShoppingCart,
        TheLogo,
        InputSearch
    },
    methods:{
        toFavouritesPage : function(){
            this.router.push('/favourites/')
        }
    },
    beforeMount(){
        console.log(this.useRoute);
    }
 



}


</script>
<style scoped>
.header-style {
    height: 100px;
    width: 100%;
    background: linear-gradient(45deg, #1f1d1d, #232330, #211e3a, #211b50);
    background-size: 400% 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    animation: backgroundTransition 8s ease-in-out infinite;
}
.nav-buttons{
    width: 120px;
    height: 100%;
    background: transparent;
    outline: none;
    border:none;
    color:#FFF;
    font-size: 25px;
    /* transition: 0.5s; */
}
.nav-buttons:hover{
    font-weight: bold;
    border-style: outset;
    border: 2px outset #fff;
}







@keyframes backgroundTransition {
    0% {
        background-position: 0% 80%;
    }

    50% {
        background-position: 80% 100%;
    }

    100% {
        background-position: 0% 90%;
    }
}
</style>