<template>
    <div class="menu-desktop__container">
        <ul>
            <li class="first" :class="{selected:itemSelected == 1}" @click="itemSelected = 1"><a class="anchor" href="#clipping">CONHEÇA A STORM</a></li>
            <li class="second" :class="{selected:itemSelected == 2}" @click="itemSelected = 2"><a class="anchor" href="#clipping">PORTIFÓLIO</a></li>
            <li class="third" :class="{selected:itemSelected == 3}" @click="itemSelected = 3"><a class="anchor" href="#clipping">PRODUTOS</a></li>
            <li class="fourth" :class="{selected:itemSelected == 4}" @click="itemSelected = 4"><a class="anchor" href="#clipping">CLIPPING</a></li>
            <li class="fifth" :class="{selected:itemSelected == 5}" @click="itemSelected = 5"><a class="anchor" href="#contact">FAÇA CONTATO</a></li>
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
    },
    created(){
        $(document).ready(function(){
            $('.anchor').click(function(e){
                e.preventDefault();
                $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top}, 1000);
            });
        })
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

            li {
                border-right: 1px solid #2c2d2e;
                float: left;
                padding: 0 10px;
                position: relative;
                cursor: pointer;

                a {
                    font-size: 14px;
                    font-family: "Trebuchet MS", sans-serif;
                    color: #cecece;
                    text-decoration: none;
                }

                &:last-child {
                    border-right: none;
                }

                &.selected {
                    &::after {
                        content: "";
                        position: absolute;
                        min-height: 4px;
                        background-color: #fff001;
                        top: 26px;
                        left: 17px;
                    }

                    &.first {
                        &::after {
                            min-width: 105px;
                        }
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
