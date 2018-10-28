<template>
    <div class="carrossel__container">
        <ul class="carrossel">
            <li class="carrossel__item">
                <img src="../assets/image1-mobile.jpg" alt="">        
            </li>
            <li class="carrossel__item">
                <img src="../assets/image1-mobile.jpg" alt="">
            </li>
            <li class="carrossel__item">
                <img src="../assets/image1-mobile.jpg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Carrossel',
    mounted() {
        $('.carrossel').slick();
    }
}
</script>

<style lang="scss">
.carrossel {
    padding: 0;
    margin: 0;
}

.slick-next,
.slick-prev {
    font-size: 0;
    position: absolute;
    top: 50%;
    width: 18px;
    height: 31px;
    padding: 0;
    border: none;
    outline: 0;
    color: transparent;
    background: 0 0;
    transform: translate(0,-50%);
    cursor: pointer;
    background-repeat: no-repeat;
    z-index: 1;
}

.slick-prev {
    background-image: url('../assets/seta-esquerda.png');
    left: 10px;
}

.slick-next {
    background-image: url('../assets/seta-direita.png');
    right: 10px;
}

.slick-slide {
    img {
        width: 100%;
        height: auto;
    }
}


</style>
