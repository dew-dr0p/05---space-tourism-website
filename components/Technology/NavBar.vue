<template>
    <div class="flex flex-col">
        <NuxtLink to="/Technology">
            <button class="rounded-[50%] w-12 h-12 text-white border border-white border-opacity-25 hover:border-opacity-100 mb-5">
                1
            </button>
        </NuxtLink>
        <NuxtLink to="/Technology/Spaceport">
            <button class="rounded-[50%] w-12 h-12 text-white border border-white border-opacity-25 hover:border-opacity-100 mb-5">
                2
            </button>
        </NuxtLink>
        <NuxtLink to="/Technology/Capsule">
            <button class="rounded-[50%] w-12 h-12 text-white border border-white border-opacity-25 hover:border-opacity-100 mb-5">
                3
            </button>
        </NuxtLink>
    </div>
</template>

<style scoped>
.router-link-active button, .router-link-exact-active button {
        color: #0B0D17;
        background-color: white;
        border: none;
    }
</style>