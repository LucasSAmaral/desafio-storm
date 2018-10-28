<template>
  <div id="app">
    <Header></Header>
    <Carrossel></Carrossel>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Carrossel from '@/components/Carrossel'

export default {
  name: 'App',
  components: {
    Header,
    Carrossel
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
</style>
