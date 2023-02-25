<script setup>
definePageMeta({
    layout: "crew",
})
</script>

<template>
    <div class="grid grid-cols-2 items-end">
        <div class="text-white my-auto ml-20">
            <h5 class="text-3xl uppercase mb-32" style="letter-spacing: 4.75px;"><span class=" opacity-25">02</span> Meet your crew</h5>
            <h4 class="font-[Bellefair] text-[2rem] opacity-50 uppercase">Mission Specialist</h4>
            <h3 class="font-[Bellefair] text-[3.5rem] w-[40rem] mb-5 uppercase">Mark Shuttleworth</h3>
            <p class="text-lightBlue mb-20">
                Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                African to travel to space as a space tourist.
            </p>
            <CrewNavBar />
        </div>
        <div class="mx-auto mt-[3.75rem] self-end">
            <img src="../../assets/crew/image-mark-shuttleworth.png" alt="" class="w-80">
        </div>
    </div>
</template>

