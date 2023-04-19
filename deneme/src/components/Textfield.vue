<script>
export default{
props:{
    label:{
        type: String,
        default:"",
    },
},
}
</script>

<template>
    <label>{{ label }}</label>
  <input
   v-bind="$attrs" 
   :placeholder="label"
   >
</template>