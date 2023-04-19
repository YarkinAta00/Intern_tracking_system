<script>
export default{
    props:{
        buttonText:{
            type:String,
            default:()=>"",
        },
    },
    methods:{
        navigateProfile(){
            this.$emit("navigateProfile")
        }
    }
}
</script>

<template>
   <button @click="navigateProfile" type="button" class="btn btn-primary mx-4">{{ buttonText }}</button>
</template>