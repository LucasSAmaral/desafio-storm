<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  background-color: #161616;
}
</style>
