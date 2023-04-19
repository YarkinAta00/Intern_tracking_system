<script>
export default{
props:{
    pageTitleValue:{
        type:String,
        default:()=>"",
    },
},
}
</script>

<template>
<div class="col-md-10 mx-auto">
        <h1 v-bind="$attrs" class="mt-5" style="font-size:50px;">{{ pageTitleValue }}</h1>
    </div>
</template>
