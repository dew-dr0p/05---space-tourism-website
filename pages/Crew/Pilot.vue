<script setup>
definePageMeta({
    layout: "crew",
})
</script>

<template>
    <div class="grid grid-cols-2 items-end">
        <div class="text-white my-auto ml-20">
            <h5 class="text-3xl uppercase mb-32" style="letter-spacing: 4.75px;"><span class=" opacity-25">02</span> Meet your crew</h5>
            <h4 class="font-[Bellefair] text-[2rem] opacity-50 uppercase">Pilot</h4>
            <h3 class="font-[Bellefair] text-[3.5rem] w-[40rem] mb-5 uppercase">Victor Glover</h3>
            <p class="text-lightBlue mb-20">
                Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                International Space Station. Glover is a commander in the U.S. Navy where 
                he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                station systems flight engineer.
            </p>
            <CrewNavBar />
        </div>
        <div class="mx-auto mt-[5.2rem] self-end">
            <img src="../../assets/crew/image-victor-glover.png" alt="" class="w-96 ">
        </div>
    </div>
</template>

