<script>
import Button from './components/Button.vue'
import PageTitle from './components/PageTitle.vue';
import ProfilePhoto from './components/ProfilePhoto.vue';
import Footer from './Footer.vue';


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    //CV görebilceğimiz ekran popup olabilir
    data() {
        return chartConfig
    },
    components: {
        Footer,
        Button,
        PageTitle,
        ProfilePhoto,
        Doughnut,
    }
}
</script>

<template>
    <div class="container d-flex align-items-center justify-content-center mt-4">
        <div class="row">
            <div class="col">
                <div class="card text-bg-light mb-4" style="width: 18rem;">
                    <ProfilePhoto class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Name Surname</h5>
                        <p class="card-text">Little description here</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Position</li>
                        <li class="list-group-item">Department</li>
                        <li class="list-group-item">Lead of Department</li>
                        <li class="list-group-item">
                            <button type="button" class="btn btn-link text-decoration-none" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Show CV</button>
                        </li>
                    </ul>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <a href="#" class="card-link text-decoration-none">Maybe Github link</a>
                            </li>

                            <li class="list-group-item">
                                <a href="#" class="card-link text-decoration-none">Maybe Linkedln link</a>
                            </li>
                        </ul>
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
                <div class="card mt-4" style="width: 30rem;">
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
            <div class="mx-5 col">
                <div>
                    <Doughnut :data="data" :options="options"/>
                </div>
            </div>
        </div>
       



        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">CV</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        CV will be shown here
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>