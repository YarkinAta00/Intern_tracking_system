<script>
export default{
  
  
}
</script>
<template>
   <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand fs-2 fw-bold px-3 text-light">ITS</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/home" class="nav-link active text-light fs-5 px-3" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/interns" class="nav-link active text-light fs-5 px-3" aria-current="page">Interns</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tasks" class="nav-link active text-light fs-5 px-3" aria-current="page">Tasks</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/applicants" class="nav-link active text-light fs-5 px-3" aria-current="page">Applicants</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/apply" class="nav-link active text-light fs-5 px-3" aria-current="page">Apply Now!</router-link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</template>