<script>
import { ScheduleComponent, SchedulePlugin } from '@syncfusion/ej2-vue-schedule';

export default {
   
    data() {
        return {
            
        }
    },
    components: {
       ejsSchedule: ScheduleComponent,

    },

  
}
</script>

<template>
 <div>
    <ejsSchedule height='550px' width='100%' :eventSettings='eventSettings'> 
    
    </ejsSchedule>
 </div>
</template>

