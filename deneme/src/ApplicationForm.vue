<script>
import PageTitle from './components/PageTitle.vue';
import Button from './components/Button.vue';
import PopupModel from './components/PopupModel.vue';
import Checkbox from './components/Checkbox.vue';
export default {
    components: {
        PageTitle,
        Button,
        PopupModel,
        Checkbox
    },

}
</script>
<template>
    <PageTitle pageTitleValue="Application Form" />
    <div class="mx-5 mt-4">
        <div class="mb-3">
            <label for="formFileMultiple" class=" mb-2 fs-5 form-label">Select CV</label>
            <input class="form-control" type="file" id="formFileMultiple" multiple>
        </div>

        <div class="mt-4">
            <label class="mb-2 fs-5" for="contactInfo">Contact Information</label>
            <textarea id="contactInfo" class="form-control" aria-label="With textarea"
                placeholder="Contact Information"></textarea>
        </div>

        <Checkbox label="Agree to terms and conditions" />

        <div class="container-sm d-flex flex-column align-items-center justify-content-center mt-3 p-4">
            <Button class="pt-2 px-3 fs-5" buttonText="Send" />
        </div>
    </div>
</template>