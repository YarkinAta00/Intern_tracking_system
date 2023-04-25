<script>
export default {
    props: {
        name: "Textfield",
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
    <label>{{ label }}</label>
    <input :name="name" :value="modelValue" v-bind="$attrs" :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)">
</template>