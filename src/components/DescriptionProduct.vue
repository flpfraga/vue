<template>
    <div class="container-description">
        <section>
            <h3>
                {{ title }}
            </h3>
            <div class="half-section">
                <div class="star-style">
                    <font-awesome-icon :icon="['fa', 'star']" class="star-icon" />
                    
                    <h4> &nbsp; {{ stars }}</h4>
                </div>

                <h4>{{ genre }}</h4>

            </div>
            <h5>
                R$ {{ price }}
            </h5>
        </section>

    </div>
</template>

<script>


export default {
    name: 'DescriptionProduct',
    props: {
        title: String,
        stars: Number,
        genre: String,
        price: Number
    }
}

</script>
<style scoped>
.container-description {
    width: 100%;
    height: 110px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.half-section {
    width: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #414141;
    border-bottom: 1px solid #414141;
}

h3 {
    font-size: 13px;
    font-weight: bold;
    max-width: 130px; 
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis; 
    text-align: center;
}
h3:hover{
    white-space: unset;
    overflow: unset; 
    text-overflow: unset; 
}

h4 {
    font-size: 12px;
    font-weight: bold;
    line-height: 3px;
    text-align: center;
}

h5 {
    font-size: 11px;
    font-weight: bold;
    line-height: 3px;
    text-align: center;
}

.star-style{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.star-icon{
    font-size: 12px;
    bottom: 10px;
}
</style>