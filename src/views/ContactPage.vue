<template>
    <div class="h-[91vh]">        
        <div class="flex items-center justify-center">
            <form class="w-[550px] mt-10">
                <div class="mb-12 flex justify-center items-end">
                    <h1 class="text-center mb-4 mr-3 text-5xl font-extrabold tracking-tight leading-none text-red-700">Work</h1>
                    <h1 class="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-white">With Me</h1>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <!-- <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label> -->
                        <input type="text" id="last_name" class="bg-transparent border border-gray-50 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-50 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required>
                    </div>
                    <div>
                        <!-- <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label> -->
                        <input type="text" id="company" class="bg-transparent  border border-gray-50 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-50 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required>
                    </div>  
                </div>
                <div class="mb-6">
                    <!-- <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label> -->
                    <input type="email" id="email" class="bg-transparent  border border-gray-50 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-50 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required>
                </div> 
                <div class="mb-6">
                    <!-- <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> -->
                    <textarea id="message" rows="4" class="resize-none block p-2.5 w-full text-md text-gray-900 bg-transparent  border border-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-50 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Message Here ..."></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="w-[70%] text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium h-[55px] px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800">Submit</button>
                </div>
            </form>
        </div>
        <div class="mt-20 flex justify-center items-center">
            <div class="flex items-center">
                <i class="fa-solid fa-phone fa-lg" style="color: #ff0000;"></i>
                <p class="text-gray-50 text-md ml-2">+95 9754606143</p>
            </div>
            <div class="flex items-center ml-10">
                <i class="fa-solid fa-envelope fa-lg" style="color: #ff0000;"></i>
                <p class="text-gray-50 text-md ml-2">kyishwinsoe@gmail.com</p>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>