<template>
    <div class="header__container">
        <nav>
            <div class="header__logo">
                <img src="../assets/logo-storm.png" alt="Logo Storm Security">
            </div>
            <div class="header__menu" :class="{active: active}" @click="active = !active">
                <div class="header__menu--border-left"></div>
                <MenuMobile></MenuMobile>
            </div>
        </nav>
    </div> 
</template>

<script>
import MenuMobile from '@/components/MenuMobile'

export default {
    name: 'Header',
    components: {MenuMobile},
    data() {
        return {
            active: false
        }
    }
}
</script>

<style lang="scss">
.header {
    &__container {
        position: absolute;
        z-index: 100000;
        width: 100%;
        padding: 0 10px;
        top: 10px;

        nav {
            background-image: url('../assets/header-background.jpg');
            min-width: 300px;
            height: 42px;
            border-radius: 3px;
            display: flex;
            flex-direction: row;
        }

    }
    &__logo {
        padding: 10px;
    }
    &__menu {
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
}
</style>
