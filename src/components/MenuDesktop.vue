<template>
    <div class="menu-desktop__container">
        <ul>
            <li class="first" :class="{selected:itemSelected == 1}" @click="itemSelected = 1">CONHEÇA A STORM</li>
            <li class="second" :class="{selected:itemSelected == 2}" @click="itemSelected = 2">PORTIFÓLIO</li>
            <li class="third" :class="{selected:itemSelected == 3}" @click="itemSelected = 3">PRODUTOS</li>
            <li class="fourth" :class="{selected:itemSelected == 4}" @click="itemSelected = 4">CLIPPING</li>
            <li class="fifth" :class="{selected:itemSelected == 5}" @click="itemSelected = 5">FAÇA CONTATO</li>
        </ul>
    </div>    
</template>

<script>
export default {
    name: 'MenuDesktop',
    data() {
        return {
            itemSelected : 1
        }
    }
}
</script>

<style lang="scss">
.menu-desktop {
    &__container{
        padding: 13px 0;
        margin-left: auto;
        display: none;

        @media (min-width: 769px) {
            display: block;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            font-size: 14px;
            font-family: "Trebuchet MS", sans-serif;
            color: #cecece;

            li {
                border-right: 1px solid #2c2d2e;
                float: left;
                padding: 0 10px;
                position: relative;

                &:last-child {
                    border-right: none;
                }

                &.selected {
                    &::after {
                        content: "";
                        position: absolute;
                        min-width: 105px;
                        min-height: 4px;
                        background-color: #fff001;
                        top: 26px;
                        left: 17px;
                    }

                    &.second,
                    &.third {
                        &::after {
                            min-width: 55px;
                        }
                    }

                    &.fourth {
                        &::after {
                            min-width: 45px;
                        }
                    }

                    &.fifth {
                        &::after {
                            min-width: 80px;
                        }
                    }
                }
            }
        }

    }
}
</style>
