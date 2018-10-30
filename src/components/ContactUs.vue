<template>
    <div class="contact-us__container">
        <div class="contact-us__text">
            <p>Envie-nos uma solicitação, dúvida, sugestão ou crítica. Nossa equipe responderá o contato o quanto antes.</p>
        </div>
        <div class="contact-us__contact-area">

        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactUs'
}
</script>

<style lang="scss">
    .contact-us {
        &__container {
            width: 100%;
            padding-top: 107px;
            max-width: 1400px;
            min-height: 652px;
            background-image: url('../assets/contact-us-background.jpg')
        }
        &__text {
            font-family: adobe-garamond-pro, serif;
            color: #ddeaf5;
            font-size: 22px;
            max-width: 633px;
            width: 100%;
            height: 99px;
            margin: 0 auto;
            text-align: center;
            padding-top: 20px;

            p {
                margin: 0;
            }
        }
        &__contact-area {
            max-width: 830px;
            height: 277px;
            border: 1px solid #000000;
            margin: 0 auto;
        }
    }
</style>
