<template>
    <div class="container-image">

        <img :src='this.urlImg' alt="img movie">
    </div>
</template>

<script>


export default {
    name: 'ImageProduct',
    props: {
        banner: String,
    },
    setup() {
        return {
            urlImg: ''
        }
    },
    created() {
        this.urlImg = "https://image.tmdb.org/t/p/original" + this.banner
    }

}

</script>
<style scoped>
.container-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
   
}

img {
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;

}

img:hover {
    transform: scale(1.05);
}


</style>