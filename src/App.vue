<template>
  <div id="app">
    <Header></Header>
    <Carrossel></Carrossel>
    <NewsMobile v-if="showMobile"></NewsMobile>
    <NewsDesktop v-if="showDesktop"></NewsDesktop>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Carrossel from '@/components/Carrossel'
import NewsMobile from '@/components/NewsMobile'
import NewsDesktop from '@/components/NewsDesktop'

export default {
  name: 'App',
  components: {
    Header,
    Carrossel,
    NewsMobile,
    NewsDesktop
  },
  data(){
    return {
      showMobile: true,
      showDesktop: false
    }
  },
  mounted(){
    let screenWidth = window.innerWidth;
    
    if(screenWidth <= 768) {
      this.showMobile = true;
      this.showDesktop = false;
    } else {
      this.showMobile = false;
      this.showDesktop = true;
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: #161616;
}
#app {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
