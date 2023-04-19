<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
import Footer from './Footer.vue'
export default {

    data() {
        return {
            interns: [{
                id: 1,
                name: "Yarkın",
                surname: "Ata",
                department: "Development Team",

            },
            {
                id: 2,
                name: "Merve",
                surname: "Cengiz",
                department: "Support Engineer Team",

            },
            {
                id: 3,
                name: "Hakan",
                surname: "Atik",
                department: "Project Management Team",

            },
            {
                id: 4,
                name: "Altay",
                surname: "Taneri",
                department: "Testng Team",

            },],
        }
    },
    components: {
    Footer,
    Button,
    PageTitle
}
}
</script>

<template>
    <PageTitle pageTitleValue="Home"/>
    <div class="container d-flex align-items-center  justify-content-center my-5">
        <div id="main-container" class="col d-flex align-items-center  justify-content-center">
            <table class=" table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col" class="fs-5">#</th>
                        <th scope="col" class="fs-5">Name</th>
                        <th scope="col" class="fs-5">Surname</th>
                        <th scope="col" class="fs-5">Department</th>
                        <th scope="col" class="fs-5">Details</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="(intern, index) in interns">
                        <td class="fs-5" v-text="intern.id"></td>
                        <td class="fs-5" v-text="intern.name"></td>
                        <td class="fs-5" v-text="intern.surname"></td>
                        <td class="fs-5" v-text="intern.department"></td>
                        <td>
                            <Button buttonText="Detail"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style></style>