<script>
import NavbarComponent from './components/NavbarComponent.vue';
import Footer from './components/Footer.vue';
export default {
  name:'App',

  components:{
    NavbarComponent,
    Footer,
},
methods: {
  logout() {
    localStorage.removeItem('JWTtoken');
    this.$router.push('/');
  }
},
}
</script>

<template>
  <div>
    <NavbarComponent v-show="$route.path !== '/' & $route.path !== '/register'"/>
  </div>
    <body class="d-flex flex-column h-100">
      <router-view></router-view>
      <Footer />
    </body>
</template>

<style>

</style>
