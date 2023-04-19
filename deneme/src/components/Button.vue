<script>
export default{
    props:{
        buttonText:{
            type:String,
            default:()=>"",
        },
    },
    methods:{
        login(){
            this.$emit("login")
        }
    }
}
</script>

<template>
   <button @click="login" type="button" class="btn btn-primary mx-4">{{ buttonText }}</button>
</template>