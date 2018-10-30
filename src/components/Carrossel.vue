<template>
    <div class="carrossel__container">
        <ul class="carrossel">
            <li class="carrossel__item" v-bind:key="banner" v-for="banner in banners">
                <div class="carrossel__item--img">
                        <img :src="banner.srcDesktop" :alt="banner.alt" class="carrossel__img--desktop">
                        <img :src="banner.srcMobile" :alt="banner.alt" class="carrossel__img--mobile">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import BannerMobile1 from '../assets/image1-mobile.jpg'
import BannerMobile2 from '../assets/image2-mobile.jpg'
import BannerMobile3 from '../assets/image3-mobile.jpg'
import BannerDesktop1 from '../assets/image1-desktop.jpg'
import BannerDesktop2 from '../assets/image2-desktop.jpg'
import BannerDesktop3 from '../assets/image3-desktop.jpg'

export default {
    name: 'Carrossel',
    components: {
        BannerMobile1,
        BannerMobile2,
        BannerMobile3,
        BannerDesktop1,
        BannerDesktop2,
        BannerDesktop3
    },
    data() {
        return {
            banners: 
            [{
                srcMobile: BannerMobile1,
                srcDesktop: BannerDesktop1,
                alt: 'Banner 1'
            },
            {
                srcMobile: BannerMobile2,
                srcDesktop: BannerDesktop2,
                alt: 'Banner 2'
            },
            {
                srcMobile: BannerMobile3,
                srcDesktop: BannerDesktop3,
                alt: 'Banner 3'
            }]
        }
    },
    mounted() {
        $('.carrossel').slick();
    }
}
</script>

<style lang="scss">
.carrossel {
    padding: 0;
    margin: 0;

    &__img {
        
        &--mobile {
            @media (min-width: 769px) {
                display: none !important;
            }
        }
        
        &--desktop {
            display: none !important;
            @media (min-width: 769px) {
                display: block !important;
            }
        }
    }
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
