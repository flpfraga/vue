<template>


    <div class="input-box">
        <font-awesome-icon :icon="['fa', 'search']" class="search-icon" v-bind:onclick="() => searchByInput()" />
        <input name="search-input" class="search-input" placeholder="Sua busca aqui" type="text" v-model="inputText"
            @keyup.enter="searchByInput()">

    </div>

</template>

<script>


import { useRouter } from 'vue-router';

export default {
    name: 'InputSearch',
    setup() {
        const router = useRouter()
        return {
            inputText: "",
            router
        }
    },
    methods: {

        searchByInput: function () {
            if (!this.inputText) {
                return
            }
            const busca = this.inputText
            var elements = document.getElementsByName("search-input")
            elements.forEach(element => {
                element.value = ''
            })
            this.router.push(`/search/${busca}`)

        }
    },


}

</script>

<style>
.input-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-input {
    width: 400px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 20px;
    padding-left: 20px;
    color: #211b50;
    font-size: 15px;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;

}

.search-input::placeholder {
    color: rgba(0, 0, 0, 0.7);
    font-size: 15px;
    font-weight: bold;
}

.search-icon {
    position: relative;
    top: center;
    left: 400px;
    transform: rotateY(180deg);
    cursor: pointer;
}
</style>