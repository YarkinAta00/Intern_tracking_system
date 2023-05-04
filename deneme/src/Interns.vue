<template>
    <PageTitle pageTitleValue="Interns" />
    <div class="container d-flex align-items-center  justify-content-center my-5">
        <div id="main-container" class="col d-flex align-items-center  justify-content-center">
            <table class="table table-striped table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col" class="fs-5">ID</th>
                        <th scope="col" class="fs-5">Name</th>
                        <th scope="col" class="fs-5">Surname</th>
                        <th scope="col" class="fs-5">Email</th>
                        <th scope="col" class="fs-5">DepartmantID</th>
                        <th scope="col" class="fs-5">RoleID</th>
                        <th scope="col" class="fs-5 px-4">Details</th>
                        <th scope="col" class="fs-5 px-4">Delete</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="dbIntern in dbInterns">
                        <td class="fs-5"> {{ dbIntern.id }}</td>
                        <td class="fs-5">{{ dbIntern.firsName }}</td>
                        <td class="fs-5">{{ dbIntern.lastName }}</td>
                        <td class="fs-5">{{ dbIntern.email }}</td>
                        <td class="fs-5">{{ dbIntern.depID }}</td>
                        <td class="fs-5">{{ dbIntern.roleID }}</td>
                        <td class="fs-5">
                            <router-link :to="`/internprofile/${dbIntern.id}`"
                                class="btn btn-primary mx-4">Detail</router-link>
                        </td>
                        <td class="fs-5">
                            <Button @click=deleteIntern(dbIntern.id) class="btn btn-danger" buttonText="Delete" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="d-flex align-items-center  justify-content-center">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Button from './components/Button.vue'
import ProfileNavigateButton from './components/ProfileNavigateButton.vue'
import Footer from './Footer.vue'
import PageTitle from './components/PageTitle.vue'
import axios from 'axios'
export default {
    data() {
        return {
            dbInterns: {},
        }
    },
    mounted() {
        axios.get("https://localhost:7270/api/InternshipTracker/GetUsers")
            .then((response) => {
                this.dbInterns = response.data
                console.log(response.data)
            })
    },
    components: {
        Footer,
        Button,
        PageTitle,
        ProfileNavigateButton
    },
    methods: {
        deleteIntern(id) {
            axios.delete(`https://localhost:7270/api/InternshipTracker/DeleteUser?id=${id}`)
                .then((response) => { console.log(response.data) })
        }
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

