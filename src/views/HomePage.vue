<template>
    <div class="flex justify-center items-center h-[91vh]">
        <!-- <div> -->
        <!-- <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"> -->
            <div class="">
                <div class="px-4 mx-auto max-w-screen-xl text-center">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">I am Kyi Shwin Soe</h1>
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">and I am an Artist.</h1>
                    <p class="max-w-5xl mb-10 text-md font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-48">Hello there! I'm Kyi Shwin Soe, an artist who loves bringing imagination to life through colorful paintings. Welcome to my creative world!</p>
                    
                    <div class="flex flex-col items-center justify-center mt-40">
                        <p class="text-md font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">My Slogan</p>
                        <!-- <button @click()">Click</button> -->
                        <svg @click="gotoSologan()" class="cursor-pointer w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                        </svg>
                    </div>
                </div>
            </div>
            
        <!-- </section> -->
        <!-- </div> -->
    </div>
</template>

<script>

// import router from '@/router/script';

    export default {
        name: 'HomePage',
        components: {
            
        },
        methods: {
            gotoSologan(){
                this.$router.push({
                    name: 'sologan'
                });
            }
        }
    }
</script>
<!-- 
<style>
.bg-img {
  background: url('../../public/img/artist_bg.jpg');
  background-color: rgba(0, 0, 0, 0.6)
  /* Other styles here */
}
</style> -->