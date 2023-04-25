<script>
import NavbarComponent from './components/NavbarComponent.vue';
import Footer from './Footer.vue';
export default {
  name:'App',
  components:{
    NavbarComponent,
    Footer,
},
}
</script>

<template>
  <div>
    <NavbarComponent v-show="$route.path !== '/'"/>
  </div>
    <body class="d-flex flex-column h-100">
      <router-view></router-view>
      <Footer />
    </body>
</template>

<style>

</style>
