<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
import ProfilePhoto from './components/ProfilePhoto.vue';
import Footer from './Footer.vue'
export default {

    data() {
        return {
            interns: [{
                id: 1,
                name: "Support Engineer",
                applicationCount: "2",
                department: "Support Team",

            },
            {
                id: 2,
                name: "Full Stack Developer",
                applicationCount: "5",
                department: "Developer Team",

            },
            {
                id: 3,
                name: "Business Analyst",
                applicationCount: "3",
                department: "Project Management Team",

            },
            {
                id: 4,
                name: "Test Autiomation Developer",
                applicationCount: "2",
                department: "Testing Team",

            },
            {
                id: 5,
                name: "Front-end Developer",
                applicationCount: "5",
                department: "Development Team",

            },
            ],
        }
    },
    components: {
        Footer,
        Button,
        PageTitle,
        ProfilePhoto
    }
}
</script>

<template>
    <div class="container d-flex align-items-center justify-content-center my-4">
        <div class="row">
            <div class="col">
                <div class="card text-bg-light" style="width: 18rem;">
                    <ProfilePhoto class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Name Surname</h5>
                        <p class="card-text">Little description here</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Position</li>
                        <li class="list-group-item">Department</li>
                        <li class="list-group-item">Lead of Department</li>
                        <li class="list-group-item">Position</li>
                        <li class="list-group-item">Position</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Maybe Github link</a>
                        <a href="#" class="card-link">Maybe Linkedln link</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 30rem;">
                    <h5 class="card-header">Internship Time Schedule</h5>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Internship Staring Date:</li>
                            <li class="list-group-item">Internship Ending Date:</li>
                            <li class="list-group-item">Remaining Days:</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 30rem;">
                    <h5 class="card-header">Contact Information</h5>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Email:</li>
                            <li class="list-group-item">Phone number:</li>
                            <li class="list-group-item">Home Address:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
        </div>
    </div>
</template>

<style></style>