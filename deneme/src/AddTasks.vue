<script>
import Button from './components/Button.vue';
import InternListSelector from './components/InternListSelector.vue'
import PageTitle from './components/PageTitle.vue';
import Datepicker from 'vue3-datepicker'
import axios from 'axios';

export default {
    data() {
        return {
            dbInterns: [],
            selectedOption: "",
            userInfo: {},
            baseURL: `https://localhost:7270/api/`,
            taskName: "",
            taskSender: "",
            taskDetails: "",
            userID: "",
            isCompleted: false,
            pickedStartDate: new Date(),
            pickedEndDate: new Date(),
            authAxios: axios.create({
                baseUrl: `https://localhost:7270/api/`,
                headers: {
                    Authorization: 'Bearer ' + (localStorage.getItem('JWTtoken')),
                }
            }),
        }
    },
    components: {
        Button,
        PageTitle,
        Datepicker,
        InternListSelector,
    },
    created() {
        this.authAxios.get("InternshipTracker/GetAuthorizedUser")
            .then((response) => {
                this.userInfo = response.data
                console.log(response.data)
                const gettoken = localStorage.getItem('JWTtoken');
            }).catch(error => { console.log(error) });
    },
    mounted() {
        this.showInterns();
    },
    methods: {
        showInterns() {
            axios.get(this.baseURL + `InternshipTracker/GetUsers`)
                .then((response) => {
                    this.dbInterns = response.data;
                    console.log(response.data)
                })
        },
        addTask() {
            axios.post(this.baseURL + `Task/CreateTask?taskName=${this.taskName}&sender=${this.taskSender}&details=${this.taskDetails}&endDate=${this.pickedEndDate.toDateString('tr-TR')}`)
                .then((response) => {
                    console.log(response.data)
                })

        },
    },
}
</script>

<template>
    <div>
        <PageTitle pageTitleValue="Create Task" />
    </div>
    <div class="container d-flex align-items-center  justify-content-center mb-4">
        <div class=" container fluid mx-5 mt-3 mb-4">
            <div class="mt-2">
                <label class="mb-2 fs-5" for="TaskName">Task Name</label>
                <input v-model="taskName" id="TaskName" type="text" class="form-control" placeholder="Task Name"
                    aria-label="Task Name" aria-describedby="basic-addon1">
                {{ taskName }}
            </div>

            <div class="mt-4">
                <label class="mb-2 fs-5" for="Sender">Sender</label>
                <input v-model="taskSender" id="Sender" type="text" class="form-control" :placeholder="userInfo.userName"
                    aria-label="Sender" aria-describedby="basic-addon2">
                {{ taskSender }}
            </div>

            <div class="mt-4">
                <label class="mb-2 fs-5" for="jobDescription">Task Details</label>
                <textarea v-model="taskDetails" id="taskDetails" class="form-control" aria-label="Task Details"
                    placeholder="Task Details"></textarea>
                {{ taskDetails }}
            </div>
            <br>
            <div class="mt4">
                <label class="mb-2 fs-5" for="selectInterns">Select Intern</label>
                <select class="form-select form-select mb-3" aria-label=".form-select example" v-model="selectedOption">
                    <option v-for="dbIntern in dbInterns" :value="dbIntern.firstName">{{ dbIntern.firstName }}</option>
                </select>
            </div>

            <div class="row">
                <div class="col mt-4">
                    <label class="mb-2 fs-5" for="start_Date">Start Date</label>
                    <Datepicker v-model="pickedStartDate" />
                </div>

                <div class="col mt-4">
                    <label class="mb-2 fs-5" for="end_Date">End Date</label>
                    <Datepicker v-model="pickedEndDate" />
                    {{ pickedEndDate.toLocaleDateString('tr-TR') }}
                </div>
            </div>

            <div class="container-sm d-flex flex-column align-items-center justify-content-center mt-3 p-4">
                <Button @click="addTask" class="pt-2 px-3 fs-5" buttonText="Add Position" />
            </div>
        </div>
    </div>
</template>