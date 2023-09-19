<template>

  <section class="bg-center bg-no-repeat h-screen w-screen bg-[../../public/Artist Background.jpg] bg-gray-700 bg-blend-multiply bg-fixed">

    <!-- <div id="default-carousel" class="relative w-full" data-carousel="slide">

        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

            <div class="duration-100 ease-in-out" data-carousel-item>
                <img src="https://blog.artweb.com/wp-content/uploads/2022/12/Van-Gogh-Starry-Night.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                <h1>hi</h1>
            </div>

            <div class="duration-100 ease-in-out" data-carousel-item>
                <img src="https://images.artsmia.org/wp-content/uploads/2022/11/17112836/ext_202207080012-resized.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div> 
    </div> -->

    <NavBar/>

    <HomePage/>

  </section>

  
  
</template>

<script>
import HomePage from './components/HomePage.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    HomePage, NavBar
  }
}
</script>
