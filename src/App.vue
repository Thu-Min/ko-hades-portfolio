<template>
  <main>
    <!-- <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view>
      <!-- <transition name="slide">
        <component :is="Component" />
      </transition> -->
    </router-view>
  </main>

  <!-- <section class="bg-center bg-no-repeat h-screen w-screen bg-[../../public/Artist Background.jpg] bg-gray-700 bg-blend-multiply bg-fixed"> -->

    <!-- Jumbotron -->
    <!-- <div
      class="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen text-white bg-img">


      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.8)">
      
        <NavBar/>
        
        <div class="flex h-full items-center justify-center">
          <HomePage/>
        </div>
      </div>
      <router-view></router-view>
    </div> -->
    <!-- Jumbotron -->



  <!-- </section> -->

  
  
</template>

<script>

export default {
  name: 'App',

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