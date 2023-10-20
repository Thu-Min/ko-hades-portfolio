<template>
    <section class="bg-cover bg-no-repeat bg-blend-multiply bg-fixed bg-img">
        <NavBar></NavBar>
        
        <!-- <div class=""> -->
            <div class="">
                <router-view></router-view>
            </div>
        <!-- </div> -->
    </section>
  
    
    
  </template>
  
  <script>
  import NavBar from './NavBar.vue';
  // import HomePage from './views/HomePage.vue';
  export default {
    components: {
      NavBar
    },
  
  }
  </script>
  <style>
  .bg-img {
    background: url('../../public/img/artist_bg.jpg');
    background-color: rgba(0, 0, 0, 0.8)
    /* Other styles here */
  }
  </style>
  <!-- <style>
  .slide-top-enter-active,
  .slide-leave-active {
    transition: all 0.75s ease-out;
  }
  
  .slide-top-enter-to {
    position: absolute;
    top: 0;
  }
  
  .slide-top-enter-from {
    position: absolute;
    top: -100%;
  }
  
  .slide-top-leave-to {
    position: absolute;
    bottom: -100%;
  }
  
  .slide-top-leave-from {
    position: absolute;
    bottom: 0;
  }
  </style> -->