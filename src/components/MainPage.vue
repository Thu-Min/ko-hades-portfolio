<template>
    <main>
        <!-- <section class="bg-center bg-no-repeat h-screen w-screen bg-[../../public/Artist Background.jpg] bg-gray-700 bg-blend-multiply bg-fixed"> -->

            <!-- Jumbotron -->
            <div
                class="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen text-white bg-img">


                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style="background-color: rgba(0, 0, 0, 0.8)">

                    <NavBar/>
                    <!-- <HomePageVue/> -->
                </div>

            </div>
            <!-- Jumbotron -->
        <!-- </section> -->
    </main>
</template>

<script>
// import HomePageVue from '../views/HomePage.vue';
import NavBar from '../views/NavBar.vue';
// import router from '@/router/script';

    export default {
        name: 'MainPage',
        components: {
            NavBar
        },
        // methods: {
        //     gotoSologan(){
        //         this.$router.push({
        //             name: 'sologan'
        //         });
        //     }
        // }
    }
</script>

<style>
.bg-img {
  background: url('../../public/img/artist_bg.jpg');
  background-color: rgba(0, 0, 0, 0.6)
  /* Other styles here */
}
</style>