<script>
export default {
    props: {
        name: "Textfield",
        example:{
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        modelValue: String
    },

    emits: ['update:modelValue'],
}
</script>

<template>
    <label class="mb-2 fs-5">{{ label }}</label>
    <input :name="name" :value="modelValue" v-bind="$attrs" :placeholder="example"
        @input="$emit('update:modelValue', $event.target.value)">
</template>