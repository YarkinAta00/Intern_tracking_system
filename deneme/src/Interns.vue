<template>
    <PageTitle pageTitleValue="Interns" />
    <div class="container d-flex align-items-center  justify-content-center my-5">
        <div id="main-container" class="col d-flex align-items-center  justify-content-center">
            <table class="table table-responsive">
                <thead>
                    <tr>
                        <th scope="col" class="fs-5 px-4">ID</th>
                        <th scope="col" class="fs-5 px-4">Name</th>
                        <th scope="col" class="fs-5 px-4">Surname</th>
                        <th scope="col" class="fs-5 px-5">Email</th>
                        <th scope="col" class="fs-5 px-4">DepartmantID</th>
                        <th scope="col" class="fs-5 px-4">RoleID</th>
                        <th scope="col" class="fs-5 px-5">Details</th>
                        <th scope="col" class="fs-5 px-5">Delete</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="dbIntern in dbInterns" :key="dbIntern.id">
                        <td class="fs-5 px-4"> {{ dbIntern.id }}</td>
                        <td class="fs-5 px-4">{{ dbIntern.firstName }}</td>
                        <td class="fs-5 px-4">{{ dbIntern.lastName }}</td>
                        <td class="fs-5 px-4">{{ dbIntern.email }}</td>
                        <td class="fs-5 px-5">{{ dbIntern.depID }}</td>
                        <td class="fs-5 px-5">{{ dbIntern.roleID }}</td>
                        <td class="fs-5 px-4">
                            <router-link :to="`/internprofile/${dbIntern.id}`" class="btn btn-primary mx-4"><i
                                    class="bi bi-info-lg px-3" style="font-size: 1.3rem;"></i></router-link>
                        </td>
                        <td class="fs-5">
                            <button onclick="deleteIntern(dbIntern.id)" type="button" class="btn btn-danger px-4 mx-5"><i
                                    class="bi bi-trash" style="font-size: 1.3rem;"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Button from './components/Button.vue'
import ProfileNavigateButton from './components/ProfileNavigateButton.vue'
import PageTitle from './components/PageTitle.vue'
import axios from 'axios'
export default {
    data() {
        return {
            dbInterns: [],
            baseURL: `https://localhost:7270/api/`,
        }
    },
    mounted() {
        this.showInterns();
    },
    components: {
        Button,
        PageTitle,
        ProfileNavigateButton,
    },
    methods: {
        showInterns() {
            axios.get(this.baseURL + `InternshipTracker/GetUsers`)
                .then((response) => {
                    this.dbInterns = response.data;
                    console.log(response.data)
                })
        },
        deleteIntern(id) {
            axios.delete(this.baseURL + `InternshipTracker/DeleteUser?id=${id}`)
                .then((response) => { console.log(response.data) })
        },
    },
}
</script>
<style>

.my-custom-scrollbar {
    position: relative;
    height: 200px;
    overflow: auto;
}

.table-wrapper-scroll-y {
    display: block;
}
</style>

