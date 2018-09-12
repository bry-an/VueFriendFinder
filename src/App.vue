<template>
  <div id="app">
      <navbar></navbar>
    <div class='container'>
    <router-view/>
  </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: { Navbar, }
}

</script>

<style lang="scss">

@import url(https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css);
@import './assets/style/style.scss';

</style>
