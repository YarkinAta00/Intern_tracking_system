<script>
export default{
props:{
    pageTitleValue:{
        type:String,
        default:()=>"",
    },
    pageUserName:{
        type:Object,
    },
},
}
</script>

<template>
<div class="col-md-10 mx-auto">
        <h1 v-bind="$attrs" class="mt-5" style="font-size:50px;">{{ pageTitleValue }} {{ pageUserName }}</h1>
    </div>
</template>
