<template>
    <div class="control-selection__container">
        <img :src="img" :alt="alt">
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    name: 'ControlSelection',
    props: [
        'text',
        'img',
        'alt'
    ]
}
</script>

<style lang="scss">
    .control-selection {
         &__container {
             text-align: center;
             cursor: pointer;
             margin-top: 15px;

             p {
                 font-family: adobe-garamond-pro, serif;
                 font-size: 15px;
                 color: #e4f2fd;
                 margin: 0;
                 margin-top: 10px;
             }
         }
    }
</style>
