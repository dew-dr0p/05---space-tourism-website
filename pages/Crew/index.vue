<script setup>
definePageMeta({
    layout: "crew",
})
</script>

<template>
    <div class="grid grid-cols-2 items-end">
        <div class="text-white my-auto ml-20">
            <h5 class="text-3xl uppercase mb-32" style="letter-spacing: 4.75px;"><span class=" opacity-25">02</span> Meet your crew</h5>
            <h4 class="font-[Bellefair] text-[2rem] opacity-50 uppercase">Commander</h4>
            <h3 class="font-[Bellefair] text-[3.5rem] w-[40rem] mb-5 uppercase">Douglas Hurley</h3>
            <p class="text-lightBlue mb-20">
                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                and former NASA astronaut. He launched into space for the third time as 
                commander of Crew Dragon Demo-2.
            </p>
            <CrewNavBar />
        </div>
        <div class="mx-auto mt-3 self-end">
            <img src="~/assets/crew/image-douglas-hurley.png" alt="" class="w-96">
        </div>
    </div>
</template>

