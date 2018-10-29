<template>
    <div class="news-desktop__container">
        <div class="news-desktop__article">
            <p class="news-desktop__article--title">{{articles[index].title}}</p>
            <p class="news-desktop__article--subtitle">{{articles[index].subtitle}}</p>
            <div class="news-desktop__article--img">
                <img :src="articles[index].picture" alt="">
                <p class="news-desktop__article--img-subtitle">{{articles[index].imgSubtitle}}</p>
            </div>
            <p class="news-desktop__article--paragraph">{{articles[index].paragraph1}}</p>
            <p class="news-desktop__article--paragraph">{{articles[index].paragraph2}}</p>
        </div>
        <div class="news-desktop__controls--container">
            <div class="news-desktop__controls">
                <div class="news-desktop__controls--social-media">
                    <img src="../assets/facebook-like.png" alt="Curta no Facebook">
                    <img src="../assets/tweet.png" alt="Nos siga no Twitter">
                </div>
                <ControlSelection @click.native="increaseIndex()" :img="require('../assets/control-next.png')" alt="Selecione a próxima notícia" text="Próximo"></ControlSelection>
                <ControlSelection @click.native="decreaseIndex()" :img="require('../assets/control-prev.png')" alt="Selecione a notícia anterior" text="Anterior"></ControlSelection>
            </div>
        </div>
        <div class="news-desktop__selection-list--container">
            teste
        </div>
        
    </div>    
</template>

<script>
import Picture1 from '../assets/news-desktop1.jpg'
import Picture2 from '../assets/news-desktop2.jpg'
import Picture3 from '../assets/news-desktop3.jpg'
import ControlSelection from '@/components/ControlSelection'

export default {
    name: 'NewsDesktop',
    components:{Picture1, Picture2, Picture3, ControlSelection},
    data(){
        return {
            index: 1,
            articles:
            [{
                title: 'O GLOBO BLOGS - INOVAÇÃO',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dolor.',
                picture: Picture1,
                imgSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dolor.',
                paragraph1: 'Desenvolvido pela Storm Security, o Telecine Play (www.telecineplay.com.br) é uma plataforma que coloca à disposição, na web, os filmes da programação dos canais Telecine para o assinanteassistir online, no momento em que desejar, em vários dispositivos (desktop, notebook, iPad, iPhone, iPad Touch e smartphones com o sistema Android).',
                paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dolor. Phasellus id aliquam turpis. Etiam magna elit, ullamcorper mattis diam quis, hendrerit commodo arcu. Pellentesque quis ante non erat consequat commodo sit amet ac nibh. Morbi blandit ac nunc sit amet ornare. Suspendisse potenti. Suspendisse in est ullamcorper, tincidunt sem eget, convallis sapien.'
            },
            {
                title: 'PEQUENAS EMPRESAS GRANDES NEGÓCIOS',
                subtitle: 'Ex-hacker brasileiro projeta miniaviões para encontrar carros roubados, vigiar fazendas e gerenciar o trânsito',
                picture: Picture2,
                imgSubtitle: 'VIGIA AÉREO: O modelo Vant, criado por Abreu Júnior, é versão compacta dos usados no Oriente Médio',
                paragraph1: 'O tempo não decide entre ensolarado, nublado e chuvoso na Ilha de Guaratiba — bairro do Rio de Janeiro a 45 km do centro. “É bom que a gente já vê se o aviãozinho se garante em qualquer clima”, diz o engenheiro Wanderley Abreu Júnior. É o primeiro teste oficial do seu Veículo Aéreo Não Tripulado (doravante, Vant). Quem olha não dá nada. O aeromodelo mede 1,60 m da ponta de uma asa à da outra e pesa 750 g, mas tem versões maiores — de 3,5 kg e de 20 kg. O design também não é o forte, mas isso não parece preocupar Abreu Júnior. Seu negócio não é fabricar as aeronaves, mas o sistema de câmeras e sensores infravermelhos que as transforma em robôs de vigilância e monitoramento de tráfego.',
                paragraph2: 'Os Vants desenvolvidos pelo brasileiro são bem diferentes daqueles que ficaram conhecidos por custarem milhões de dólares e participarem de ações militares como a Guerra do Afeganistão e a captura de Bin Laden. Fazem parte de uma nova leva de veículos mais baratos, com menos recursos e projetados para o uso civil. Abreu Júnior não está só. A polícia da Austrália já recomendou ao governo'
            },
            {
                title: 'REVISTA GALILEU',
                subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dolor.',
                picture: Picture3,
                imgSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dolor.',
                paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dolor. Phasellus id aliquam turpis. Etiam magna elit, ullamcorper mattis diam quis, hendrerit commodo arcu. Pellentesque quis ante non erat consequat commodo sit amet ac nibh. Morbi blandit ac nunc sit amet ornare. Suspendisse potenti. Suspendisse in est ullamcorper, tincidunt sem eget, convallis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales lectus a purus ullamcorper pretium.',
                paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dolor. Phasellus id aliquam turpis. Etiam magna elit, ullamcorper mattis diam quis, hendrerit commodo arcu. Pellentesque quis ante non erat consequat commodo sit amet ac nibh. Morbi blandit ac nunc sit amet ornare. Suspendisse potenti. Suspendisse in est ullamcorper, tincidunt sem eget, convallis sapien.'
            }]
        }
    },
    methods: {
        increaseIndex: function() {
            if(this.index < 2) {
                this.index++;
            }
        },
        decreaseIndex: function() {
            if(this.index > 0) {
                this.index--;
            }
        }

    }
}
</script>

<style lang="scss">
    .news-desktop{
        &__container {
            max-width: 960px;
            height: auto;
            width: 100%;
            margin: 0 auto;
            margin-top: 115px;
            display: flex;
            
        }
        &__article {
            max-width: 455px;
            height: 780px;
            width: 100%;
            color: #e4f2fd;
            font-family: adobe-garamond-pro, serif;
            padding: 0 10px;
            position: relative;

            &--title {
                font-size: 17px;
            }

            &--subtitle,
            &--paragraph {
                font-size: 15px;
            }

            &--img {
                img {
                    width: 100%;
                    height: auto;
                    border: 1px solid #253646;
                }

                &-subtitle {
                    font-size: 10px;
                }
            }
        }
        &__controls {
            &--container {
                position: relative;
            }
            width: 86px;
            height: auto;
            background-color: #1b2732;
            border: 1px solid #153b56;
            border-radius: 3px;
            margin-top: 103px;
            margin-left: 10px;
            padding: 0 10px 15px;

            &--social-media {
                text-align: center;
                padding-top: 17px;
                border-bottom: 1px solid #274c6c; 

                img {
                    margin-bottom: 10px;
                }
            }
        }
        &__selection-list {
            &--container {
                min-width: 335px;
                max-height: 175px;
                background-color: red;
                margin-left: 20px;
                border-left: 5px solid #1979bc;
                position: relative;
                padding: 0 20px;
                padding-top: 58px;
            }
        }
    }
</style>