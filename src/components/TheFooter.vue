<template>
    <div class="footer">
        <h3 class="footer-title">
            Designed by Felipe Carlos Fraga
        </h3>
    </div>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style>
.footer{
    width: 100%;
    height: 80px;
    background: linear-gradient(45deg, #1f1d1d, #232330, #211e3a, #211b50);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: backgroundTransition 4s ease-in-out infinite;

}
.footer-title{
    color:#FFF;
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