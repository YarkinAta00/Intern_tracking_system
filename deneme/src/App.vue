<script>
import NavbarComponent from './components/NavbarComponent.vue';
import Footer from './Footer.vue';
export default {
  name:'App',
  components:{
    NavbarComponent,
    Footer,
},
data(){
  return{
    NavCheck:false
  }
},
methods:{
  navbarCheck(){
    if(this.$route.name === 'Welcome'){
     NavCheck=true
    }  
  },
}
}
</script>

<template>
  <div>
    <NavbarComponent v-if="navbarCheck" v-show="{NavCheck}"/>
  </div>
    <main>
      <router-view></router-view>
      <Footer />
    </main>
</template>
