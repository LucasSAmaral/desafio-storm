<template>
    <div class="contact-us__container">
        <div id="contact" class="contact-us__text">
            <p>Envie-nos uma solicitação, dúvida, sugestão ou crítica. Nossa equipe responderá o contato o quanto antes.</p>
        </div>
        <div class="contact-us__contact-area">
            <div class="contact-us__form">
                <p>Mande sua mensagem</p>
                <input type="text" name="nome" id="formNome" placeholder="seu nome">
                <input type="text" name="email" id="formEmail" placeholder="seu email">
                <textarea name="mensagem" id="mensagem" placeholder="sua mensagem"></textarea>
                <div class="contact-us__form--button-container">
                    <button @click="validateForm()" class="contact-us__form--button">Enviar</button>
                </div>
            </div>
            <div class="contact-us__address--container">
                <div class="contact-us__address">
                    <p class="contact-us__state">Rio de Janeiro</p>
                    <p class="contact-us__superscription">Av. Lúcio Costa 3400 - Sl 304. Barra da Tijuca</p>
                    <p class="contact-us__superscription">Rio de Janeiro / RJ - CEP 22630-010</p>
                    <p class="contact-us__superscription">Office: +55 (21) 3734-0695</p>
                </div>
                <div class="contact-us__address">
                    <p class="contact-us__state">New York</p>
                    <p class="contact-us__superscription">136 Madison Avenue - New York, NY 10016</p>
                    <p class="contact-us__superscription">Office: +1 (646) 722 3838</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactUs',
    methods: {
        validateForm: function() {
            if($('#formNome').val() == '') {
                alert('Preencha o campo nome.');
                $('#formNome').focus();
            } else if($('#formEmail').val() == '') {
                alert('Preencha o campo email.');
                $('#formEmail').focus();
            } else if($('#mensagem').val() == '') {
                alert('Digite sua mensagem.');
                $('#mensagem').focus();
            } else if($('#formNome').val() != '' && $('#formEmail').val() != '' && $('#mensagem').val() != '') {
                alert('Sua mensagem foi enviada. Entraremos em contato em breve.');
            }
        }
    }
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
            margin-bottom: 40px;

            p {
                margin: 0;
            }
        }
        &__contact-area {
            max-width: 830px;
            height: 277px;
            margin: 0 auto;
            display: flex;
        }
        &__form {
            width: 100%;
            max-width: 450px;
            font-family: adobe-garamond-pro, serif;
            text-align: center;
            background-image: url('../assets/background-form.png');
            background-repeat: no-repeat;
            background-position-x: right;

            &--button {
                padding: 13px 10px;
                background-color: #1979bc;
                color: #fffffe;
                text-decoration: none;
                text-transform: uppercase;
                border-radius: 3px;
                cursor: pointer;
                border: none;


                &-container {
                    text-align: right;
                    padding: 26px 24px;
                }
            }

            p {
                font-size: 17px;
                text-align: left;
                padding-left: 25px;
                margin: 0 0 10px 0;
                color: #ddeaf5;
            }

            input[type=text] {
                padding: 15px 10px;
                max-width: 402px;
                width: 100%;
                border: none;
                border-radius: 3px;
                margin-bottom: 10px;
                color: #171717;
                font-size: 16px;
                font-family: adobe-garamond-pro, serif;
            }

            textarea {
                padding: 15px 10px;
                color: #171717;
                font-size: 16px;
                font-family: adobe-garamond-pro, serif;
                max-width: 402px;
                width: 100%;
                height: 113px;
                border-radius: 3px;
            }

            ::placeholder {
                color: #171717;
            }

            :-ms-input-placeholder {
                color: #171717;
            }

            ::-ms-input-placeholder {
                color: #171717;
            }
        }

        &__address {

            &--container {
                margin-left: 50px;
            }

            color: #e4f2fd;
            font-family: adobe-garamond-pro, serif;
            margin-bottom: 45px;
        }

        &__state {
            font-size: 18px;
            
        }

        &__superscription {
            font-size: 16px;
        }

        &__state,
        &__superscription {
            margin: 0;
        }
    }
</style>
