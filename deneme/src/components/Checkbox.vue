<script>
export default{
    props: {
        modelValue: {
            type: String,
            default: "",
        },
        label:{
        type: String,
        default:"",

    },
    },
}
</script>

<template>
 <div class="mt-3 form-check">
    <label>{{ label }}</label>
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
</div>
</template>