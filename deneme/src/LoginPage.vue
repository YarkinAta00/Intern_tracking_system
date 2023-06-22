<script>
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
            BrandImage: "src/assets/logo.png",
            IsInfoTrue: false,
            email: "",
            password: "",
        }
    },
    components: {
        Button,
        Textfield,
        Checkbox,

    },

    methods: {
        login() {
            axios.post(`https://localhost:7270/api/InternshipTracker/Login?email=${this.email}&password=${this.password}`)
                .then(response => {
                    console.log(response.data);
                    const mytoken = response.data;
                    localStorage.setItem('JWTtoken', mytoken);
                    console.log((localStorage.getItem('JWTtoken')));
                    this.IsInfoTrue = true;
                    setTimeout(() => this.$router.push({ path: `Home` }), 1600);
                }).catch(error => {
                    console.log(error);
                    this.IsInfoTrue = false;
                    alert("Invalid Username or Password");
                });
        },
        goRegisterPage() {
            this.$router.push({ name: 'register' })
        },
    },
}
</script>
<style>
h1 {
    font-size: 65px;
    padding-right: 3%;
    padding-left: -0.5%;
}

.left-side {
    padding-left: 6%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.image-container img {
    margin: 0 10px;
}

form {
    padding-right: 17%;
}

.right-side {
    background-color: rgb(243, 245, 249);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
<template>
    <div v-if="IsInfoTrue == true"
        class="alert alert-success alert-dismissible fade show d-flex align-items-center justify-content-center mx-5 mt-4 w-70"
        role="alert">
        <strong>Welcome!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 left-side ">
                <div id="left_container" class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="heading">
                                <h1 id="mainTitle" class="text-primary pb-4">
                                    Internship Tracking System
                                </h1>
                                <br>
                                <br>
                            </div>
                            <form class="inputs form-controll">
                                <Textfield label="Email address" example="example123@gmail.com" type="email" id="emailInput"
                                    v-model="email" class="form-control-lg mt-1" />
                                <br>
                                <br>
                                <br>
                                <Textfield label="Password" example="password here..." type="password" id="passwordInput"
                                    v-model="password" class="form-control-lg mt-1" aria-labelledby="passwordHelpBlock" />
                            </form>

                            <div class="mt-5">
                                <button class="col-6 btn btn-primary pt-1 pb-1 px-5 fs-4" @click="login"> Login </button>
                                <br>
                                <br>
                                <h5 class="mt-4 px-1">Not a member?
                                    <strong>
                                        <router-link to="/register"
                                            class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold text-decoration-none">Register</router-link>
                                    </strong>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 right-side">
                <div class="image-container">
                    <img class="w-100" alt="Intern Logo" :src="image" />
                </div>
                <div>
                    <img class="w-75 rounded-4" alt="Brand Logo" :src="BrandImage" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#formParts {
    margin-top: 9%;
}

img {
    display: block;
    width: 11rem;
}
</style>