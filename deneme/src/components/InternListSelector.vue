<script>
import axios from 'axios';
export default {
    name: 'ReusableSelect',
    props: {
        options: {
            type: Array,
            required: true
        },
        value: {
            type: [String],
            default: ''
        }
    },
    data() {
        return {
            selectedOption: this.value,
            baseURL: `https://localhost:7270/api/`,
        };
    },
    methods: {
        showInterns() {
            axios.get(this.baseURL + `InternshipTracker/GetUsers`)
                .then((response) => {
                    this.options = response.data;
                    console.log(response.data)
                })
        },
        handleChange(event) {
            this.selectedOption = event.target.value;
            this.$emit('input', this.selectedOption);
        }
    },
    mounted() {
        this.showInterns();
    },
};

</script>

<template>
    <select class="form-select" v-model="selectedOption" @change="handleChange">
        <option disabled value="">Select Intern</option>
        <option v-for="option in options" :value="option.firstName" :key="option.value">
            {{ option.firstName }}
        </option>
    </select>
</template>
  