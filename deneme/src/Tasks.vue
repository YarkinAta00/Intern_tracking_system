<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
import TaskService from './TaskService.js'
export default {
    components: {
        PageTitle,
        Button,
    },
    data() {
        return {
            dbTasks: {},
            baseUrl: "https://localhost:7270/api/",
            isStarted: false,
        }
    },
    methods: {
        goAddTasks() {
            this.$router.push("addtask")
        },
        GetTasks() {
            TaskService.getAllTasks()
                .then(response => {
                    this.dbTasks = response.data.map(task => {
                        const taskProgress = task.checkProgres ? "On Going" : "Not Started";
                        return { ...task, taskProgress };
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        },
        startTask() {
            axios.put(this.baseUrl + `Task/ChangeTaskProgres?id=${task.taskId}`)
                .then(response => {
                    if (response.data.success) {
                        task.checkProgres = true;
                    } else {
                        console.error(response.data.error);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    mounted() {
        this.GetTasks();
    }
};
</script>

<template>
    <div class="row md-10 mx-5 px-5">
        <div class="col-9">
            <PageTitle pageTitleValue="Tasks" />
        </div>
        <div class="col-3">
            <Button @click="goAddTasks" class="px-5 pt-2 mx-5 mt-5 fs-6" buttonText="Add" />
        </div>
    </div>
    <div class="container d-flex align-items-center justify-content-center mb-4 mt-3">
        <table class="table table-striped table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col" class="fs-5 px-4">#</th>
                    <th scope="col" class="fs-5 px-4">Task Name</th>
                    <th scope="col" class="fs-5 px-4">Task Sender</th>
                    <th scope="col" class="fs-5 px-4">Task Details</th>
                    <th scope="col" class="fs-5 px-4">Task Details</th>
                    <th scope="col" class="fs-5 px-4">Start Task</th>
                    <th scope="col" class="fs-5 px-4">Complete Task</th>

                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="tasks in dbTasks">
                    <td class="fs-5 px-4">{{ tasks.taskId }}</td>
                    <td class="fs-5 px-4">{{ tasks.taskName }}</td>
                    <td class="fs-5 px-4">{{ tasks.taskSender }}</td>
                    <td class="fs-5 px-4">{{ tasks.taskDetails }}</td>
                    <td class="fs-5 px-4">{{ tasks.taskProgress }}</td>
                    <td class="fs-5">
                        <button @click="startTask(task)" :disabled="isStarted"
                            class="btn btn-warning px-4 mx-5">Start</button>
                    </td>
                    <td class="fs-5">
                        <button class="btn btn-success px-4 mx-5"><i class="bi bi-check-lg"
                                style="font-size: 1.3rem;"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>