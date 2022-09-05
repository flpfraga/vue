<template>
    <button class="logo-button" v-bind:onclick="() => homePage()">
        Loja de Filmes
    </button>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    name: 'TheLogo',
    setup() {
        const router = useRouter()
        return {
            router
        }
    },
    methods: {
        homePage: function () {
            this.router.push('/')
        }
    }


}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,700&family=Twinkle+Star&display=swap');
.logo-button {
    font-family: 'Nunito Sans', sans-serif;
    width: 200px;
    height: 100%;
    color: #FFF;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    border-right: 2px solid rgba(255, 255, 255, 0.3);
    padding-left: 20px;
    background: transparent;
    outline: none;
}
</style>