
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
import PageTitle from './components/PageTitle.vue';
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  components: {
    Doughnut,
    PageTitle,
  },
  data() {
    return chartConfig
  },
};
</script>
<template>
  <div>
    <div class="row mt-4">
      <PageTitle pageTitleValue="Welcome YARKIN ATA" />
    </div>

    <div class="row mt-5">
      <div class="col-5 ">
        <Doughnut :data="data" :options="options" id="internChart" />

      </div>

      <div class="col-5 mx-5">
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
    </div>
  </div>
</template>