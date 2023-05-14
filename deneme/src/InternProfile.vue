<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
import ProfilePhoto from './components/ProfilePhoto.vue';
import PopupModel from './components/PopupModel.vue';
import axios from 'axios';
export default {
    data() {
        return {
            id: "",
            userInfo: {},
            isReadOnly: true,
            isVisible:true,
            changePasswordType:"password"
        }
    },
    created() {
        this.id = this.$route.params.id
        axios.get(`https://localhost:7270/api/InternshipTracker/GetById?id=${this.id}`)
            .then(response => {
                this.userInfo = response.data,
                    console.log(response)
            }).catch(error => { console.log(error) });
    },
    components: {
        Button,
        PageTitle,
        ProfilePhoto,
        PopupModel,
    },
    methods: {
        navigateUpdateInfoPage() {
            this.$router.push(`/updateprofile${this.id}`)
        },
        enableEditMode() {
            this.isReadOnly = !this.isReadOnly;

        },
        showPassword() {
            this.changePasswordType = this.changePasswordType === 'password' ? 'text' : 'password';
        },
        updateInfo(){
            axios.put(`https://localhost:7270/api/InternshipTracker/UpdateUser?id=${this.userInfo.id}&firstName=${this.userInfo.firstName}&lastName=${this.userInfo.lastName}&email=${this.userInfo.email}.com&password=${this.userInfo.password}`)
                .then((response) => {
                    this.dbInterns = response.data
                    console.log(response.data)
                })
        }
    },
}
</script>

<template>
    <div class="container d-flex align-items-center justify-content-center mt-4">
        <div class="row">
            <div class="col">
                <div class="card text-bg-light mb-4" style="width: 18rem;">
                    <ProfilePhoto class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">
                            <input type="text" :readonly="isReadOnly" class="card-title form-control"
                                v-model=userInfo.firstName>
                            <input type="text" :readonly="isReadOnly" class="card-title form-control"
                                v-model=userInfo.lastName>
                        </h5>
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
                <div class="card mt-4" style="width: 30rem;">
                    <h5 class="card-header">Internship Time Schedule</h5>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Internship Staring Date: {{ userInfo.startDate }}</li>
                            <li class="list-group-item">Internship Ending Date: {{ userInfo.endDate }}</li>
                            <li class="list-group-item">Remaining Days:</li>
                        </ul>
                    </div>
                </div>
                <div class="card mt-4" style="width: 30rem;">
                    <h5 class="card-header">Contact Information</h5>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item fs-6">
                                <label>Email:</label>
                                <input type="text" :readonly="isReadOnly" class="card-title form-control mt-1"
                                    v-model=userInfo.email>
                            </li>
                            <li class="list-group-item fs-6">
                                <label>Password:</label>
                                <input :type=changePasswordType :readonly="isReadOnly" class="card-title form-control mt-1"
                                    v-model=userInfo.password>
                                    <i class="bi bi-eye-slash" id="togglePassword" @click="showPassword"></i>
                            </li>
                            <li class="list-group-item">
                               <label> Phone number: </label>
                                <input type="text" :readonly="isReadOnly" class="card-title form-control mt-1"
                                    v-model=userInfo.phoneNumber>
                            </li>
                            <li class="list-group-item">
                                <label> Address: </label>
                                <input type="text" :readonly="isReadOnly" class="card-title form-control mt-1"
                                    v-model=userInfo.address>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mx-5 mt-5 px-5 mb-5">
                    <div class="col">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" @click="enableEditMode" v-model="isReadOnly" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault"> Enable Edit Mode</label>
                        </div>

                        <br>

                        <Button @click="updateInfo" buttonText="Update Profile" />
                    </div>
                </div>
            </div>
        </div>
        <PopupModel modelTitle="CV" modelBodyText=" CV will be shown here" />
    </div>
</template>

<style></style>