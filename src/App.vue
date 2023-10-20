<template>
  <!-- <section class="bg-cover bg-no-repeat h-screen w-screen bg-blend-multiply bg-fixed bg-img"> -->
    <BackgroundImageVue>
      <!-- <NavBar></NavBar> -->
    </BackgroundImageVue>
    <!-- Jumbotron -->
    <!-- <router-view></router-view> -->


    <!-- Jumbotron -->



  <!-- </section> -->

  
  
</template>

<script>
import BackgroundImageVue from './components/BackgroundImage.vue';
// import NavBar from './components/NavBar.vue';
// import HomePage from './views/HomePage.vue';
export default {
  name: 'App',
  components: {
    BackgroundImageVue
  },

}
</script>
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