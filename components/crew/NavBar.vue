<template>
    <div>
        <NuxtLink to="/Crew">
            <button class="rounded-[50%] w-2 h-2 bg-white bg-opacity-[0.17] hover:bg-opacity-50 mr-3"></button>
        </NuxtLink>
        <NuxtLink to="/Crew/Specialist">
            <button class="rounded-[50%] w-2 h-2 bg-white bg-opacity-[0.17] hover:bg-opacity-50 mr-3"></button>
        </NuxtLink>
        <NuxtLink to="/Crew/Pilot">
            <button class="rounded-[50%] w-2 h-2 bg-white bg-opacity-[0.17] hover:bg-opacity-50 mr-3"></button>
        </NuxtLink>
        <NuxtLink to="/Crew/Engineer">
            <button class="rounded-[50%] w-2 h-2 bg-white bg-opacity-[0.17] hover:bg-opacity-50 mr-3"></button>
        </NuxtLink>
    </div>
</template>

<style scoped>
.router-link-active, .router-link-exact-active button {
        --tw-bg-opacity: 1;
        border: none;
    }
</style>