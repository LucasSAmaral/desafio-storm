<template>
    <div class="news-mobile__container">
        <div class="news-mobile__select">
            <select name="news" id="News" v-model="selected" v-on:change="changeNews(selected)">
                <option v-bind:key="article.value" v-for="article in articles" v-bind:value="article.value">{{article.title}}</option>
            </select>
        </div>

        <div class="news-mobile__picture">
            <img v-bind:src="articles[index].picture" alt="">
        </div>
        <div class="news-mobile__text">
            <p class="news-mobile__title">{{articles[index].title}}</p>
            <p class="news-mobile__paragraph">{{articles[index].paragraph}}</p>
        </div>
    </div>
</template>
 <script>
 import Picture1 from '../assets/news-mobile1.jpg'
 import Picture2 from '../assets/news-mobile2.jpg'
 import Picture3 from '../assets/news-mobile3.jpg'

 export default {
     name: 'NewsMobile',
     components: {Picture1, Picture2, Picture3},
     data() {
         return {
             selected: 0,
             index: 0,
             articles: 
                 [{
                    title: 'O Globo Blogs',
                    paragraph: 'Desenvolvido pela Storm Security, o Telecine Play (www.telecineplay.com.br) é uma plataforma que coloca à disposição, na web, os filmes da programação dos canais Telecine para o assinanteassistir online, no momento em que desejar, em vários dispositivos (desktop, notebook, iPad, iPhone, iPad Touch e smartphones com o sistema Android).',
                    value: 0,
                    picture: Picture1
                 },
                 {
                     title: 'Pequenas Empresas Grandes Negócios',
                     paragraph: 'O tempo não decide entre ensolarado, nublado e chuvoso na Ilha de Guaratiba — bairro do Rio de Janeiro a 45 km do centro. “É bom que a gente já vê se o aviãozinho se garante em qualquer clima”, diz o engenheiro Wanderley Abreu Júnior. É o primeiro teste oficial do seu Veículo Aéreo Não Tripulado (doravante, Vant). Quem olha não dá nada. O aeromodelo mede 1,60 m da ponta de uma asa à da outra e pesa 750 g, mas tem versões maiores — de 3,5 kg e de 20 kg. O design também não é o forte, mas isso não parece preocupar Abreu Júnior. Seu negócio não é fabricar as aeronaves, mas o sistema de câmeras e sensores infravermelhos que as transforma em robôs de vigilância e monitoramento de tráfego.',
                     value: 1,
                     picture: Picture2
                 },
                 {
                     title: 'Revista Galileu',
                     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dolor. Phasellus id aliquam turpis. Etiam magna elit, ullamcorper mattis diam quis, hendrerit commodo arcu. Pellentesque quis ante non erat consequat commodo sit amet ac nibh. Morbi blandit ac nunc sit amet ornare. Suspendisse potenti. Suspendisse in est ullamcorper, tincidunt sem eget, convallis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales lectus a purus ullamcorper pretium.',
                     value: 2,
                     picture: Picture3
                 }]
         }
     },
     methods: {
         changeNews: function() {
             this.index = this.selected;
         }
     }
 }
 </script>
 
<style lang="scss">
.news-mobile {
    &__container {
        padding: 0 10px;
        text-align: center;
        margin-top: 63px;
        color: #e4f2fd;
        font-family: myriad-hebrew, sans-serif;

        select {
            width: 300px;
            margin-bottom: 17px;
            padding: 7px;
            padding-right: 44px;
            border-radius: 3px;
            font-family: adobe-garamond-pro, serif;
            font-size: 18px;
            color: #244563;
            text-transform: uppercase;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: url('../assets/seta-select.png') 96% / 7% no-repeat #fff;

            &::-ms-expand {
                display: none;
            }
        }
    }
    &__title {
        font-size: 15px;
        text-transform: uppercase;
        text-align: left;
    }
    &__paragraph {
        text-align: left;
        font-size: 14px;
        line-height: 1.3;
    }
    &__title,
    &__paragraph {
        padding: 0 10px;
    }
}
</style>
