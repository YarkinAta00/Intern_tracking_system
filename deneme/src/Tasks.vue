<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
export default {
    components: {
        PageTitle,
        Button,
    },
    data() {
        return {
            taskList: [
                {
                    id: 1,
                    taskName: "Pagination",
                    taskSender: "Ali",
                    taskDetails: "Add Pagination to tables",
                },
                {
                    id: 2,
                    taskName: "Update Database",
                    taskSender: "Veli",
                    taskDetails: "Update user table do not forget to add necessary columns",

                },
                {
                    id: 3,
                    taskName: "Bug Fixig",
                    taskSender: "Ahmet",
                    taskDetails: "Fix the routing bug in the Login page. It does not redirect to the Home page with user id", 

                }
            ]
        }
    }
}

</script>

<template>
    <div>
        <PageTitle pageTitleValue="Tasks" />
    </div>
    <div class="container d-flex align-items-center  justify-content-center mb-4">
        <table class="table table-striped table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col" class="fs-5 px-4">#</th>
                    <th scope="col" class="fs-5 px-4">Task Name</th>
                    <th scope="col" class="fs-5 px-4">Task Sender</th>
                    <th scope="col" class="fs-5 px-4">Task Details</th>
                    <th scope="col" class="fs-5 px-4">Task Details</th>
                    <th scope="col" class="fs-5 px-4">Complete Task</th>

                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="task in taskList">
                    <td class="fs-5 px-4">{{ task.id }}</td>
                    <td class="fs-5 px-4">{{ task.taskName }}</td>
                    <td class="fs-5 px-4">{{ task.taskSender }}</td>
                    <td class="fs-5 px-4">{{ task.taskDetails }}</td>
                    <td class="fs-5 px-4">
                        <button class="btn btn-primary px-4 mx-3"><i class="bi bi-info-lg px-2" style="font-size: 1.3rem;"></i></button>
                    </td>
                    <td class="fs-5">
                        <button class="btn btn-success px-4 mx-3"><i class="bi bi-check-lg" style="font-size: 1.3rem;"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>