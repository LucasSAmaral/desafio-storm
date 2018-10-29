<template>
    <div class="menu-mobile__container">
        <ul>
            <li :class="{selected:itemSelected == 1}" @click="itemSelected = 1">CONHEÇA A STORM</li>
            <li :class="{selected:itemSelected == 2}" @click="itemSelected = 2">PORTIFÓLIO</li>
            <li :class="{selected:itemSelected == 3}" @click="itemSelected = 3">PRODUTOS</li>
        </ul>
        <div class="menu-mobile__contact-us">
            <p>Rio de Janeiro</p>
            <p>Av. Lúcio Costa 3400 - Sl 304. Barra da Tijuca - Rio de Janeiro / RJ</p>
            <p>CEP 22630-010</p>
            <p class="phone">+55 (21) 3734-0695</p>
        </div>
        <div class="menu-mobile__language">
            <div class="menu-mobile__language--text">LANGUAGE</div>
            <div class="menu-mobile__language--select"><span :class="{active: enSelect}" @click="enSelect = true; ptSelect = false">EN</span><span class="menu-mobile__language--divider"></span><span :class="{active: ptSelect}" @click="ptSelect = true; enSelect = false">PT</span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuMobile',
    data() {
        return {
            enSelect : true,
            ptSelect : false,
            itemSelected : 2
        }
    }
}
</script>

<style lang="scss">
    .menu-mobile {
        &__container {
            width: 220px;
            height: auto;
            background-image: url('../assets/menu-background.png');
            position: absolute;
            left: -182px;
            top: 42px;
            display: none;

            ul {
                list-style: none;
                font-size: 14px;
                color: #fefefe;
                margin: 0;
                padding: 0;
                padding-left: 10px;
                padding-right: 10px;
                font-family: myriad-hebrew, sans-serif;

                li {
                    border-bottom: 1px solid #2f3030;
                    padding: 10px 0px 10px 10px;
                    position: relative;

                    &:last-child {
                        border-bottom: none;
                    }

                    &:first-child {
                        &.selected {
                            &::after {
                                left: 154px;
                            }
                        }  
                    }

                    &.selected {
                        &::after {
                            content: "";
                            background-color: #fff001;
                            position: absolute;
                            min-width: 16px;
                            min-height: 6px;
                            top: 15px;
                            left: 105px;
                        }
                    }
                }
            }
        }
        &__contact-us {
            width: 100%;
            height: auto;
            background-color: #171717;
            padding: 10px 20px;

            p {
                margin: 0;
                font-family: adobe-garamond-pro, serif;
                font-size: 12px;
                color: #e4f2fd;

                &.phone {
                    font-size: 16px;
                    margin-top: 13px;
                }
            }
        }
        &__language {
            background-image: url('../assets/header-background.jpg');
            width: 100%;
            height: 32px;
            font-family: myriad-hebrew, sans-serif;
            padding: 10px 20px;
            display: flex;

            &--text {
                font-size: 12px;
                color: #fefefe;
            }

            &--select {
                font-size: 12px;
                margin-left: auto;
                display: flex;

                span {
                    color: #808080;

                    &.active {
                        color: #fefefe;
                    }
                }
            }

            &--divider {
                background-color: #4d4d4d;
                min-width: 1px;
                height: 12px;
                margin: 0 6px;
            }

        }

        &__container,
        &__language {
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
        }
    }
</style>
