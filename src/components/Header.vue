<template>
    <div class="header">
        <div class="header__container">
            <nav>
                <div class="header__logo">
                    <img src="../assets/logo-storm.png" alt="Logo Storm Security">
                </div>
                <div class="header__menu-desktop">
                    <MenuDesktop></MenuDesktop>
                </div>
                <div class="header__menu-mobile" :class="{active: active}" @click="active = !active">
                    <div class="header__menu-mobile--border-left"></div>
                    <MenuMobile></MenuMobile>
                </div>
            </nav>
        </div>
    </div>
    
</template>

<script>
import MenuMobile from '@/components/MenuMobile'
import MenuDesktop from '@/components/MenuDesktop'

export default {
    name: 'Header',
    components: {MenuMobile,MenuDesktop},
    data() {
        return {
            active: false
        }
    }
}
</script>

<style lang="scss">
.header {
    width: 100%;
    &__container {
        position: absolute;
        z-index: 100000;
        width: 100%;
        max-width: 840px;
        padding: 0 10px;
        top: 10px;

        @media (min-width: 841px) {
            left: calc(50% - 420px);
        }

        nav {
            background-image: url('../assets/header-background.jpg');
            min-width: 300px;
            height: 42px;
            border-radius: 3px;
            display: flex;
            flex-direction: row;

            @media (min-width: 1024px) {
                padding: 0 10px;
            }
        }

    }

    &__logo {
        padding: 10px;
    }

    &__menu {
        &-mobile {
            width: 38px;
            height: auto;
            margin-left: auto;
            display: inline-block;
            background-image: url('../assets/menu-icon.png');
            background-repeat: no-repeat;
            background-position-y: 14px;
            background-position-x: 10px;
            padding: 10px;
            position: relative;

            @media (min-width: 769px) {
                display: none;
            }

            &.active {
                background-image: url('../assets/menu-icon-active.png');
                background-color: #171717;

                .menu-mobile__container {
                    display: block;
                }
            }

            &--border-left {
                height: 20px;
                width: 1px;
                background-color: #2f3132;
                position: relative;
                left: -10px;
            }
        }

        &-desktop {
            margin-left: auto;
        }

    }
}
</style>
