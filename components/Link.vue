<script setup>
defineProps({
    to: String,
    text: String,

})
</script>

<template>
    <NuxtLink 
                to="/" 
                class=" py-4 ml-5 
                        hover:border-b-[3px] 
                        hover:border-white 
                        hover:border-opacity-50"
            >
                <span class="font-bold">00</span> Home
            </NuxtLink>
</template>

<style scoped>
.router-link-active, .router-link-exact-active {
        border-bottom-width: 3px;
        border-color: white;
    }
</style>
