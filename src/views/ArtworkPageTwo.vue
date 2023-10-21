<template>
    <div class="h-full">
        <div class="">
            <div class="flex mb-32 mt-20 items-center justify-center">
                <div>
                    <img src="../../public/img/artwork_four.png" alt="" class="max-h-96 max-w-full">
                </div>

                <div class="ml-10">
                    <h1 class="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Fourth Artwork</h1>
                    <h1 class="mb-10 text-3xl font-extrabold tracking-tight leading-none text-white">Tagline for this Artwork</h1>
                    <p class="max-w-lg text-md font-normal text-gray-300 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>

            <div class="flex mb-32 items-center justify-center">
                <div class="mr-10">
                    <h1 class="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Fifth Artwork</h1>
                    <h1 class="mb-10 text-3xl font-extrabold tracking-tight leading-none text-white">Tagline for this Artwork</h1>
                    <p class="max-w-lg text-md font-normal text-gray-300 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                <div>
                    <img src="../../public/img/artwork_two.png" alt="" class="max-h-96 max-w-full">
                </div>
            </div>

            <div class="flex mt-20 items-center justify-center">
                <div>
                    <img src="../../public/img/artwork_three.png" alt="" class="max-h-96 max-w-full">
                </div>

                <div class="ml-10">
                    <h1 class="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Sixth Artwork</h1>
                    <h1 class="mb-10 text-3xl font-extrabold tracking-tight leading-none text-white">Tagline for this Artwork</h1>
                    <p class="max-w-lg text-md font-normal text-gray-300 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>

        <nav aria-label="Page navigation example" class="flex justify-center py-16">
            <ul class="list-style-none flex items-center">
                <li class="flex items-center">
                    <i class="fa-solid fa-chevron-left mt-1" style="color: #ff0000;"></i>
                    <a
                        class="pointer-events-none relative block rounded-full bg-transparent px-2 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-white"
                        >Prev
                    </a>
                </li>
                <li>
                    <router-link :to="{ path: '/artwork/page=1' }" class="cursor-pointer relative block rounded-full mx-3 py-1.5 text-sm text-white transition-all duration-300 ">1</router-link>
                </li>
                <li aria-current="page">
                    <router-link :to="{ path: '/artwork/page=2' }" class="cursor-pointer relative block rounded-full bg-transparent-500 bg-red-500 mx-3 px-3  py-1.5 text-sm font-medium text-white transition-all duration-300">2</router-link>
                </li>
                <li class="flex items-center">
                    <a
                        class="relative block rounded-full bg-transparent px-2 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#!"
                        >Next
                    </a>
                    <i class="fa-solid fa-chevron-right mt-1" style="color: #ff0000;"></i>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        beforeRouteLeave(to, from, next) {
            window.scrollTo(0, 0);
            next();
        }
    }
</script>

<style lang="scss" scoped>

</style>