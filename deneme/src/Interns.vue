<template>
    <PageTitle pageTitleValue="Interns"/>
      <div class="container d-flex align-items-center  justify-content-center my-5">
          <div id="main-container" class="col d-flex align-items-center  justify-content-center">
            <table class=" table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col" class="fs-5">ID</th>
                        <th scope="col" class="fs-5">Name</th>
                        <th scope="col" class="fs-5">Surname</th>
                        <th scope="col" class="fs-5">Email</th>
                        <th scope="col" class="fs-5">DepartmantID</th>
                        <th scope="col" class="fs-5">RoleID</th>
                        <th scope="col" class="fs-5">Details</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="dbIntern in dbInterns">
                        <td class="fs-5" > {{ dbIntern.id }}</td>
                        <td class="fs-5">{{ dbIntern.firstName }}</td>
                        <td class="fs-5" >{{ dbIntern.lastName }}</td>
                        <td class="fs-5" >{{  dbIntern.email}}</td>
                        <td class="fs-5" >{{  dbIntern.depID}}</td>
                        <td class="fs-5" >{{  dbIntern.roleID}}</td>
                        <td class="fs-5">
                            <Button @click="goProfile" buttonText="Detail"/>
                        </td>
                    </tr>   
                    <!--
                    <tr v-for="(intern, index) in interns">
                        <td class="fs-5" v-text="intern.id"></td>
                        <td class="fs-5" v-text="intern.name"></td>
                        <td class="fs-5" v-text="intern.surname"></td>
                        <td class="fs-5" v-text="intern.department"></td>
                        <td>
                            <Button @click="goProfile" buttonText="Detail"/>
                        </td>
                    </tr>   
                    -->
                   
                </tbody>
            </table>
          </div>
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
            dbInterns:{},
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
    mounted(){
        axios.get("https://localhost:7270/api/InternshipTracker/GetUsers")
        .then((response)=>{
            this.dbInterns=response.data
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
    goProfile() {
      //debugger
      this.$router.push('internprofile') 
    },
    goAddPosition(){
                this.$router.push('addposition') 
            }
  },
}
</script>


<style></style>