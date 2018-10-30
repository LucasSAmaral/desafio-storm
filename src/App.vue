<template>
  <div id="app">
    <Header></Header>
    <Carrossel></Carrossel>
    <NewsMobile v-if="width <= 768"></NewsMobile>
    <NewsDesktop v-if="width > 768"></NewsDesktop>
    <ContactUs></ContactUs>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Carrossel from '@/components/Carrossel'
import NewsMobile from '@/components/NewsMobile'
import NewsDesktop from '@/components/NewsDesktop'
import ContactUs from '@/components/ContactUs'

export default {
  name: 'App',
  components: {
    Header,
    Carrossel,
    NewsMobile,
    NewsDesktop,
    ContactUs
  },
  data(){
    return {
      showMobile: true,
      showDesktop: false,
      width: 0
    }
  },
  created(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed(){
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
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
