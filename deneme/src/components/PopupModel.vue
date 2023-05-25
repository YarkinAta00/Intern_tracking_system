<script>
import axios from 'axios';
export default {
    props: {
        
        modelTitle: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            fileData: null,
        };
    },
    created() {
        this.fetchFileData();
    },
    methods: {
        async fetchFileData() {
            try {
                const response = await axios.get(`https://localhost:7270/api/File/DisplayFile/8`, {
                    responseType: 'blob',
                });
                this.fileData = URL.createObjectURL(response.data);
            } catch (error) {
                console.error('Error fetching file data:', error);
            }
        },
    }};
</script>
<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ modelTitle }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img v-if="fileData" :src="fileData" alt="File" class="img-fluid" />
            <p v-else>No file available.</p>
          </div>
        </div>
      </div>
    </div>
  </template>