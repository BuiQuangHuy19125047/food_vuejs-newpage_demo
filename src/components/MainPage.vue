<template>
  <div id="main-page">
    <Header />
    <Footer />
    <Body />
    <router-view></router-view>
    
    <!-- <HelloWorld msg="Hoc viec"/> -->
    
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
export default {
  name: 'MainPage',
  components: {
    // HelloWorld,
    Footer,
    Header,
    Body,
  }
}
</script>

<style>
* {
  margin:0;
}
#main-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

