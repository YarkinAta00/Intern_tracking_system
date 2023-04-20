<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
import Footer from './Footer.vue'
export default {

    data() {
        return {
            interns: [{
                id: 1,
                name: "Support Engineer Intern",
                applicationCount: "2",
                department: "Support Team",

            },
            {
                id: 2,
                name: "Full Stack Developer Intern",
                applicationCount: "5",
                department: "Developer Team",

            },
            {
                id: 3,
                name: "Business Analyst Intern",
                applicationCount: "3",
                department: "Project Management Team",

            },
            {
                id: 4,
                name: "Test Autiomation Intern",
                applicationCount: "2",
                department: "Testing Team",

            },
            {
                id: 5,
                name: "Front-end Developer Intern",
                applicationCount: "5",
                department: "Development Team",

            },
        ],
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
    <PageTitle pageTitleValue="Applicants"/>
    <div class="container d-flex align-items-center  justify-content-center my-5">
        <div id="main-container" class="col d-flex align-items-center  justify-content-center">
            <table class=" table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col" class="fs-5">#</th>
                        <th scope="col" class="fs-5">Name</th>
                        <th scope="col" class="fs-5">Number of Applicants</th>
                        <th scope="col" class="fs-5">Department</th>
                        <th scope="col" class="fs-5">Details</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="(intern, index) in interns">
                        <td class="fs-5" v-text="intern.id"></td>
                        <td class="fs-5" v-text="intern.name"></td>
                        <td class="fs-5" v-text="intern.applicationCount"></td>
                        <td class="fs-5" v-text="intern.department"></td>
                        <td>
                            <Button buttonText="Show"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
   
</template>
<style></style>