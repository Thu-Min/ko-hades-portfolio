<template>
    <main>
        <section class="bg-center bg-no-repeat h-screen w-screen bg-[../../public/Artist Background.jpg] bg-gray-700 bg-blend-multiply bg-fixed">

            <!-- Jumbotron -->
            <div
                class="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen text-white bg-img">


                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style="background-color: rgba(0, 0, 0, 0.8)">

                    <NavBar/>
                    
                    <div class="flex h-full items-center justify-center">
                        <div>
                        <!-- <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"> -->
                            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Art is where I belong.</h1>
                                <h1 class="mb-4 text-lg font-extrabold tracking-tight leading-none text-white md:text-2xl lg:text-4xl">Kyi Shwin Soe</h1>
                                <p class="mb-10 max-w-5xl text-md font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-48">"Art is where I Belong" is a heartfelt collection that showcases my true essence. Through vibrant colors and captivating brushstrokes, I express emotions and experiences, finding a sense of belonging in the world of art. Join me on this magical journey of self-discovery through my creations.</p>
                                
                                <div class="flex flex-col items-center justify-center mt-40">
                                    <svg @click="gotoHome()" class="cursor-pointer w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                                    </svg>

                                    <p class="text-md font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Go Back</p>

                                    
                                </div>
                            </div>
                        <!-- </section> -->
                        </div>
                    </div>
                </div>

            </div>
            <!-- Jumbotron -->
        </section>
    </main>
</template>

<script>
    import NavBar from './NavBar.vue'

    export default {
        components: {
            NavBar,
        },
        methods: {
            gotoHome() {
                this.$router.push({
                    name: 'home'
                });
            }
        },
    }
</script>

<style>
.bg-img {
  background: url('../../public/img/artist_bg.jpg');
  background-color: rgba(0, 0, 0, 0.6)
  /* Other styles here */
}
</style>