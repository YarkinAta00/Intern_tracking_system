<script>
import PageTitle from './components/PageTitle.vue';
import Button from './components/Button.vue';
export default {
    components: {
        PageTitle,
        Button
    },
    methods: {
    goAddPosition(){
                this.$router.push('addposition') 
            }
  },
}
</script>
<template>
    <div class="row md-10 mx-5"> 
        <PageTitle pageTitleValue="Open Positions" />
        <div class="col">
            <Button @click="goAddPosition" class="px-4 pt-2 mx-5 mt-5" buttonText="Add"/>
        </div> 
    </div>
    <div class="col-md-10 mx-auto mt-5">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                     <h5> Support Engineer Intern</h5>
                       
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul>
                            <li>
                                <strong>Department: </strong>
                                <br>
                                <p>Support Team</p>
                            </li>

                            <li>
                                <strong>Requirements: </strong>
                                <br>
                                <p>Requirements</p>
                            </li>

                            <li>
                                <strong>Job Description: </strong>
                                <br>
                                <p>Description</p>
                            </li>
                        </ul>
                        <Button class="mt-3 px-3 pt-2" buttonText="Apply!"/>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <h5> Test Autiomation Intern</h5>
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul>
                            <li>
                                <strong>Department: </strong>
                                <br>
                                <p>Testing Team</p>
                            </li>

                            <li>
                                <strong>Requirements: </strong>
                                <br>
                                <p>Requirements</p>
                            </li>

                            <li>
                                <strong>Job Description: </strong>
                                <br>
                                <p>Description</p>
                            </li>
                        </ul>
                        <Button class="mt-3 px-3 pt-2" buttonText="Apply!"/>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <h5> Full Stack Developer Intern </h5>
                            
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li>
                                    <strong>Department: </strong>
                                    <br>
                                    <p>Developer Team</p>
                                </li>

                                <li>
                                    <strong>Requirements: </strong>
                                    <br>
                                    <p>Requirements</p>
                                </li>

                                <li>
                                    <strong>Job Description: </strong>
                                    <br>
                                    <p>Description</p>
                                </li>
                            </ul>
                            <Button class="mt-3 px-3 pt-2" buttonText="Apply!"/>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                           <h5> Business Analyst Intern </h5>
                           
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li>
                                    <strong>Department: </strong>
                                    <br>
                                    <p>Project Management Team</p>
                                </li>

                                <li>
                                    <strong>Requirements: </strong>
                                    <br>
                                    <p>Requirements</p>
                                </li>

                                <li>
                                    <strong>Job Description: </strong>
                                    <br>
                                    <p>Description</p>
                                </li>
                            </ul>
                            <Button class="mt-3 px-3 pt-2" buttonText="Apply!"/>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                           <h5> Front-end Developer Intern</h5>
                          
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li>
                                    <strong>Department: </strong>
                                    <br>
                                    <p>Developer Team</p>
                                </li>

                                <li>
                                    <strong>Requirements: </strong>
                                    <br>
                                    <p>Medior</p>
                                </li>

                                <li>
                                    <strong>Job Description: </strong>
                                    <br>
                                    <p>Description</p>
                                </li>
                            </ul>
                            <Button class="mt-3 px-3 pt-2" buttonText="Apply!"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>