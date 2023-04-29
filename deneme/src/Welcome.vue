<script>
import Footer from './Footer.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import Textfield from './components/Textfield.vue'
import axios from 'axios'

export default {
  name: 'Welcome',
  data() {
    return {
      //Dynamic class görevi görüyor. kullanacağımız dataları burada tanımlayabiliyoruz
      titleClass: "title",
      image: "data:image/png;base64,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",
      emailInput: "",
      passwordInput: "",
      IsInfoTrue: false,

      userInfo: {
        email: "",
        password: "",
      }
    }
  },
  components: {
    Button,
    Textfield,
    Checkbox,
    Footer,
  },
  methods: {
    login() {
      if (this.userInfo.email == "yarkinata@gmail.com" && this.userInfo.password == "123") {
        this.IsInfoTrue = true;
        setTimeout(() => this.$router.push({ name: 'Home' }), 1600)
      }
      else {
        this.IsInfoTrue = false;
        alert("Invalid Username or Password")
      } 
    },
    goRegisterPage() {
      this.$router.push({ name: 'register' })
    }
  },
}
</script>

<template>
  <div v-if="IsInfoTrue == true"
    class="alert alert-success alert-dismissible fade show d-flex align-items-center justify-content-center mx-5 mt-4 w-70"
    role="alert">
    <strong>Welcome!</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

  <div id="main-container"
    class="container-sm d-flex flex-column align-items-center justify-content-center border border-4 border-dark rounded mt-5 p-4">
    <div>
      <img alt="Intern Logo" :class="mainImage" :src="image" />
    </div>
    <div class="heading mt-3">
      <h1 :class="titleClass">
        Internship Tracking System
      </h1>
      <br>
    </div>

    <form class="inputs form-controll">
      <!--
               v-model sayesinde event handler kullanmamıza gerek kalmıyor 
               v-model Sadece text inputunda değil bütün input tiplerinde çalışır (radio button, checkbox and etc.)
          
      Login sistemi düzeltildi!
      CV yükleme sistemi tasarlandı
      Başvuru sistemi tasarımı yapıldı
      Gün sayacı ( Stajyerlerin kaç günü kaldı) 
      Admin paneli
      Api için veritabanı tablo tasarımlarına başladım
                -->
     
      <Textfield label="Email" type="email" id="emailInput" v-model="userInfo.email" class="form-control" />

      <br>

      <Textfield label="Password" type="password" id="passwordInput" v-model="userInfo.password" class="form-control"
        aria-labelledby="passwordHelpBlock" />

      <Checkbox label="Check me out" />
    </form>
    <div class="mt-4">
      <Button @click="login" buttonText="Login" />
      <Button @click="goRegisterPage" buttonText="Register" />
    </div>
  </div>
  <br>
  <br>
</template>

<style>
img {
  margin: auto;
  display: block;
}

.title {
  color: blue;
}

input {
  width: 100%;
  padding: 8px;
  border: 1.5px solid;
  border-radius: 5px;
}

#main-container {
  width: 45%;
}
</style>