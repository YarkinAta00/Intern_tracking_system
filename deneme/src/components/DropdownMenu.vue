<script>
export default {
    props:{
        defaultSelect:{
        type: String,
        default:"",
    },
    }
}
</script>
<template>
 <select class="form-select mt-4" aria-label="Default select example">
      <option selected>{{ defaultSelect }}</option>
      <option value="1">Software Engineering</option>
      <option value="2">Computer Engineering</option>
      <option value="3">Electric and Electronics Engineering</option>
    </select>
</template>