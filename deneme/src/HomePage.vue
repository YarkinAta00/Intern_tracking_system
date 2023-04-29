
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
import PageTitle from './components/PageTitle.vue';
import Button from './components/Button.vue'
import axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  components: {
    Doughnut,
    PageTitle,
    Button,
  },
  data() {
   return chartConfig
 
  },
  methods:{
      getPosts(){
        axios.get("https://localhost:7270/api/InternshipTracker/GetUsers")
        .then((response)=>{
          console.log(response.data)
        })
        /*
       const apiUrl= "https://localhost:7270/api";
          fetch(apiUrl,{
            method:"GetUsers"
          }).then(response => response.json())
          .then(postsFromServer=> {
            console.log(postsFromServer);
            setPosts(postsFromServer);
          }).catch((error) =>{
            console.log(error);
            alert(error);
          }); */
      }
  }
};
</script>
<template>
  <div>
    <div class="row mt-4">
      <PageTitle pageTitleValue="Welcome YARKIN ATA" />
    </div>

    <div class="hstack px-5 mt-5 gap-5">
      <div class="gap-5">

      </div>
      <div>
        <Doughnut :width="400" :height="400" :data="data" :options="options" id="internChart" />
      </div>
       
      <div class="vr"></div>
      <Button @click="getPosts" buttonText="GET"/>

<!--
<div class="overflow-auto">
 <div class="card mb-3">
          <div class="card-header">
            <h5 class="card-title">Task Title</h5>
          </div>
          <div class="card-body">
            <p class="card-text">Tasdk details will be shown here...</p>
            <div class="d-flex justify-content-between pt-4">
              <a href="#" class="  btn btn-warning px-4">Pass</a>
              <a href="#" class="  btn btn-success px-3">Completed</a>
            </div>
          </div>
        </div>
</div>
-->
    </div>
  </div>
</template>