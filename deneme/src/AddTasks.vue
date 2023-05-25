<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
import Datepicker from 'vue3-datepicker'
import axios from 'axios';
export default {
    data() {
        return {
            userInfo: {},
            baseUrl: "https://localhost:7270/api/",
            taskName: "",
            taskSender: "",
            taskDetails: "",
            userID: "",
            isCompleted: false,
            pickedStartDate: new Date(),
            pickedEndDate: new Date(),
            authAxios: axios.create({
                baseURL: `https://localhost:7270/api/`,
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
    },
    created() {
        this.authAxios.get("InternshipTracker/GetAuthorizedUser")
            .then((response) => {
                this.userInfo = response.data
                console.log(response.data)
                const gettoken = localStorage.getItem('JWTtoken');
            }).catch(error => { console.log(error) });
    },
    methods: {
        addTask() {
            axios.post(this.baseUrl + "Task/AddTask", {
                taskName: this.taskName,
                taskSender: this.taskSender,
                taskDetails: this.taskDetails,
                userID: this.userID,
                startTime: this.startTime,
                isCompleted: this.isCompleted,
            }).then((response) => {
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
        <div class=" container fluid mx-5 mt-4 mb-4">
            <div class="mt-4">
                <label class="mb-2 fs-5" for="positionName">Task Name</label>
                <input id="TaskName" type="text" class="form-control" placeholder="Task Name" aria-label="Task Name"
                    aria-describedby="basic-addon1">
            </div>

            <div class="mt-4">
                <label class="mb-2 fs-5" for="teamName">Sender</label>
                <input v-model="userInfo.userName" id="Sender" type="text" class="form-control" :placeholder="userInfo.userName + ' ' + userInfo.userSurname" aria-label="Sender"
                    aria-describedby="basic-addon2">
            </div>

            <div class="mt-4">
                <label class="mb-2 fs-5" for="jobDescription">Task Details</label>
                <textarea id="taskDetails" class="form-control" aria-label="Task Details"
                    placeholder="Task Details"></textarea>
            </div>
            <div class="row">
                <div class="col mt-4">
                    <label class="mb-2 fs-5" for="jobRequirements">Start Date</label>
                    <Datepicker v-model="pickedStartDate" />
                </div>

                <div class="col mt-4">
                    <label class="mb-2 fs-5" for="jobDescription">End Date</label>
                    <Datepicker v-model="pickedEndDate" />
                </div>
            </div>


            <div class="container-sm d-flex flex-column align-items-center justify-content-center mt-3 p-4">
                <Button class="pt-2 px-3 fs-5" buttonText="Add Position" />
            </div>
        </div>
    </div>
</template>