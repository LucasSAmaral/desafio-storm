<template>
    <div class="menu-mobile__content">
        <ul>
            <li>CONHEÇA A STORM</li>
            <li>PORTIFÓLIO</li>
            <li>PRODUTOS</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MenuMobile'
}
</script>

<style lang="scss">
    .menu-mobile {
        &__content {
            min-width: 202px;
            min-height: 230px;
            background-image: url('../assets/menu-background.png');
            position: absolute;
            left: -164px;
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
                font-family: Arial, Helvetica, sans-serif;

                li {
                    border-bottom: 1px solid #2f3030;
                    padding: 10px 0px 10px 15px;

                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
        }
    }
</style>
