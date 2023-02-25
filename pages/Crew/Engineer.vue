<script setup>
definePageMeta({
    layout: "crew",
})
</script>

<template>
    <div class="grid grid-cols-2 items-end">
        <div class="text-white my-auto ml-20">
            <h5 class="text-3xl uppercase mb-32" style="letter-spacing: 4.75px;"><span class=" opacity-25">02</span> Meet your crew</h5>
            <h4 class="font-[Bellefair] text-[2rem] opacity-50 uppercase">Flight Engineer</h4>
            <h3 class="font-[Bellefair] text-[3.5rem] w-[40rem] mb-5 uppercase">Anousheh Ansari</h3>
            <p class="text-lightBlue mb-20">
                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                fly to the ISS, and the first Iranian in space.
            </p>
            <CrewNavBar />
        </div>
        <div class="mx-auto mt-[8.25rem] self-end">
            <img src="../../assets/crew/image-anousheh-ansari.png" alt="" class="w-96">
        </div>
    </div>
</template>

