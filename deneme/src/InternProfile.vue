<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
import ProfilePhoto from './components/ProfilePhoto.vue';
import Footer from './Footer.vue';
import PopupModel from './components/PopupModel.vue';
import axios from 'axios';
export default {
    data(){
        return{
            id:"",
            userInfo:{},
        }
    },
    created(){
        this.id=this.$route.params.id
        axios.get(`https://localhost:7270/api/InternshipTracker/GetById?id=${this.id}`)
        .then(response => {
            this.userInfo=response.data,
            console.log(response)
        }).catch(error => { console.log(error) });
    },
    components: {
        Footer,
        Button,
        PageTitle,
        ProfilePhoto,
        PopupModel,
       
    }
}
</script>

<template>
    <div class="container d-flex align-items-center justify-content-center mt-5">
        <div class="row">
            <div class="col">
                <div class="card text-bg-light mb-4" style="width: 18rem;">
                    <ProfilePhoto class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{{ userInfo.firsName }} {{ userInfo.lastName }}</h5>
                        <p class="card-text">Little description here</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Position</li>
                        <li class="list-group-item">Department</li>
                        <li class="list-group-item">Lead of Department</li>
                        <li class="list-group-item">
                            <button type="button" class="btn btn-link text-decoration-none" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Show CV</button>
                        </li>
                    </ul>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <a href="#" class="card-link text-decoration-none">Maybe Github link</a>
                            </li>

                            <li class="list-group-item">
                                <a href="#" class="card-link text-decoration-none">Maybe Linkedln link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 30rem;">
                    <h5 class="card-header">Internship Time Schedule</h5>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Internship Staring Date:</li>
                            <li class="list-group-item">Internship Ending Date:</li>
                            <li class="list-group-item">Remaining Days:</li>
                        </ul>
                    </div>
                </div>
                <div class="card mt-4" style="width: 30rem;">
                    <h5 class="card-header">Contact Information</h5>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item fs-6">Email: {{ userInfo.email }}</li>
                            <li class="list-group-item">Phone number:</li>
                            <li class="list-group-item">Home Address:</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mx-5 col">
                <div>
                   
                </div>
            </div>
        </div>
        <PopupModel modelTitle="CV" modelBodyText=" CV will be shown here"/>
    </div>
</template>

<style></style>