<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
import ProfilePhoto from './components/ProfilePhoto.vue';
import PopupModel from './components/PopupModel.vue';
import axios from 'axios';
import moment from 'moment';
export default {
    data() {
        return {
            id: "",
            baseURL: `https://localhost:7270/api/`,
            userInfo: {},
            isReadOnly: true,
            isVisible: true,
            changePasswordType: "password",
            startDate: null,
            endDate: null,
            currentDate: moment().format('YYYY-MM-DD'),
            selectedFile: null,
            daysDifference: null,
        }
    },
    created() {
        this.id = this.$route.params.id
        axios.get(this.baseURL + `InternshipTracker/GetById?id=${this.id}`)
            .then(response => {
                this.userInfo = response.data,
                    console.log(response),
                    this.startDate = moment(response.data.startDate),
                    console.log(this.startDate),
                    this.endDate = moment(response.data.endDate),
                    console.log(this.endDate),
                    this.calculateDaysDifference();
            }).catch(error => { console.log(error) });
    },

    components: {
        Button,
        PageTitle,
        ProfilePhoto,
        PopupModel,
    },

    methods: {
        calculateDaysDifference() {
            if ( this.currentDate && this.endDate) {
                const duration = moment.duration(this.endDate.diff(this.currentDate));
                this.daysDifference = duration.as('days');
            } else {
                console.error('Invalid start or end date');
            }
        },
        navigateUpdateInfoPage() {
            this.$router.push(`/updateprofile${this.id}`)
        },
        enableEditMode() {
            this.isReadOnly = !this.isReadOnly;

        },
        showPassword() {
            this.changePasswordType = this.changePasswordType === 'password' ? 'text' : 'password';
        },
        updateInfo() {
            axios.put(this.baseURL + `InternshipTracker/UpdateUser?id=${this.userInfo.id}&email=${this.userInfo.email}.com&password=${this.userInfo.password}&address=${this.userInfo.address}&phoneNumber=${this.userInfo.phoneNumber}`)
                .then((response) => {
                    this.dbInterns = response.data
                    console.log(response.data)
                })
        },

        handleFileChange(event) {
            this.selectedFile = event.target.files[0];
        },
        uploadFileToDatabase() {
            if (!this.selectedFile) {
                console.log('No file selected.');
                return;
            }

            const formData = new FormData();
            formData.append('file', this.selectedFile);

            try {
                const response = axios.post(this.baseURL + `File/UploadFile`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Handle the response
                console.log('File uploaded successfully. File ID:', response.data);
            } catch (error) {
                // Handle any errors
                console.error('Error uploading file:', error);
            }
        },
    },
}
</script>

<template>
    <div class="container d-flex align-items-center justify-content-center mt-4">
        <div class="row">
            <div class="col">
                <div class="card text-bg-light mb-4" style="width: 18rem;">
                    <ProfilePhoto class="card-img-top" />
                    <div class="card-body text-center">
                        <h4>{{ userInfo.firstName }}</h4>
                        <h4>{{ userInfo.lastName }}</h4>
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
                        <li class="list-group-item">
                            <label>Select your CV
                                <input class="form-control" type="file" id="formFile" @change="handleFileChange">
                            </label>
                            <button type="button" class="btn btn-link text-decoration-none"
                                @click="uploadFileToDatabase">Upload CV</button>
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
                    <h5 class="card-header text-center">Internship Time Schedule</h5>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Internship Staring Date: {{ this.startDate= new
                                Date(this.userInfo.startDate).toLocaleDateString('tr-TR') }}</li>
                            <li class="list-group-item">Internship Ending Date: {{ this.endDate= new
                                Date(this.userInfo.endDate).toLocaleDateString('tr-TR') }}
                            </li>
                            <li class="list-group-item">Remaining Days: {{ daysDifference }}</li>
                        </ul>
                    </div>
                </div>
                <div class="card mt-4" style="width: 30rem;">
                    <h5 class="card-header text-center">Contact Information</h5>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item fs-6">
                                <label>Email:</label>
                                <input type="text" :readonly="isReadOnly" class="card-title form-control mt-1"
                                    v-model=userInfo.email>
                            </li>
                            <li class="list-group-item fs-6">
                                <label>Password:</label>
                                <div class="row">
                                    <div class="col-11">
                                        <input :type=changePasswordType :readonly="isReadOnly"
                                            class="card-title form-control mt-1" v-model=userInfo.password>
                                    </div>
                                    <div class="col-1 mt-1">
                                        <i class="bi bi-eye-slash fs-5" id="togglePassword" @click="showPassword"></i>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <label> Phone number: </label>
                                <input type="tel" :readonly="isReadOnly" class="card-title form-control mt-1"
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
                            <input class="form-check-input" type="checkbox" role="switch" @click="enableEditMode"
                                v-model="isReadOnly" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault"> Enable Edit Mode</label>
                        </div>

                        <br>

                        <Button @click="updateInfo" buttonText="Update Profile" />
                    </div>
                </div>
            </div>
        </div>
        <PopupModel modelTitle="CV" />

    </div>
</template>

<style></style>