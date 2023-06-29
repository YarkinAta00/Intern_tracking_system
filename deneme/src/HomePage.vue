
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
    return {
      userInfo: {},
      dbTask: {},
      baseUrl: "https://localhost:7270/api/",
      authAxios: axios.create({
        baseURL: `https://localhost:7270/api/`,
        headers: {
          Authorization: 'Bearer ' + (localStorage.getItem('JWTtoken')),
        }
      })
    }
  },
  computed: {
    data() {
      return chartConfig.data
    },
    options() {
      return chartConfig.options
    },
  },

  created() {
    this.authAxios.get("InternshipTracker/GetAuthorizedUser")
      .then((response) => {
        this.userInfo = response.data
        console.log(response.data)
        const gettoken = localStorage.getItem('JWTtoken');
        console.log(gettoken);
      }).catch(error => { console.log(error) });
  },

  mounted() {
    axios.get(this.baseUrl + "Task/GetTaskProgress")
      .then((response) => {
        this.dbTask = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
};

</script>
<template>
  <div>
    <div class="row mt-4">
      <PageTitle pageTitleValue="Welcome" :pageUserName=userInfo.userName />
    </div>

    <div class="hstack px-5 mt-5 gap-5">
      <div class="gap-5">
      </div>
      <div>
        <Doughnut :width="400" :height="400" :data="data" :options="options" id="internChart" />
      </div>

      <div class="vr"></div>

      <div>
          <div class="container">
            <h2 class="text-primary mb-4">On Going Task:</h2>
            <div class="card">
              <h5 class="card-header">{{ dbTask.taskName }}</h5>
              <div class="card-body">
                <h6 class="card-text">- {{ dbTask.taskDetails }}.</h6>
                <p class="card-text">Sender: {{ dbTask.taskSender }}</p>
                <a href="#" class="btn btn-success mt-2">Complete</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>