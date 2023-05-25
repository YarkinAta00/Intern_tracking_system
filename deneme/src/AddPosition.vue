<script>
import PageTitle from './components/PageTitle.vue';
import Button from './components/Button.vue';
import DropdownMenu from './components/DropdownMenu.vue';
export default {
  components: {
    PageTitle,
    Button,
    DropdownMenu,
  }
}
</script>

<template>
  <div class="row md-10">
        <PageTitle pageTitleValue="Add Position" />
    </div>
  
  <div class=" container fluid mx-5 mt-4 mb-4">
    <div class="mt-4">
      <label class="mb-2 fs-5" for="positionName">Position Name</label>
      <input id="positionName" type="text" class="form-control" placeholder="Position Name" aria-label="Username"
        aria-describedby="basic-addon1">
    </div>

    <div class="mt-4">
      <label class="mb-2 fs-5" for="teamName">Related Team Name</label>
      <input id="teamName" type="text" class="form-control" placeholder="Related Team Name" aria-label="Related Team Name"
        aria-describedby="basic-addon2">
    </div>
    <div class="mt-4">
      <label class="mb-2 fs-5" for="jobRequirements">Job Requriements</label>
      <textarea id="jobRequirements" class="form-control" aria-label="With textarea"
        placeholder="Job Requriements"></textarea>
    </div>

    <div class="mt-4">
      <label class="mb-2 fs-5" for="jobDescription">Job Description</label>
      <textarea id="jobDescription" class="form-control" aria-label="With textarea"
        placeholder="Job Description"></textarea>
    </div>

    <div class="mt-4">
      <label class="mb-2 fs-5">Degrees</label>
      <DropdownMenu defaultSelect="Degrees" />
    </div>

    <div class="container-sm d-flex flex-column align-items-center justify-content-center mt-3 p-4">
      <Button class="pt-2 px-3 fs-5" buttonText="Add Position" />
    </div>
  </div>
</template>