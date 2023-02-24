<script setup>
definePageMeta({
    layout: "destination",
})
</script>

<template>
    <div class="grid grid-cols-2 items-end">
        <div class="mx-auto">
            <h5 class="text-3xl text-white uppercase -ml-10 mb-16" style="letter-spacing: 4.75px;"><span class=" opacity-25">01</span> Pick your Destination</h5>
            <img src="~/assets/destination/image-europa.png" alt="" class="w-96">
        </div>
        <div class="text-lightBlue my-auto ml-10 mr-20">
            <DestinationNavBar class="mb-5" />
            <h1 class="font-[Bellefair] text-white text-[6.25rem] uppercase">Europa</h1>
            <p class="mb-10">
                The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                ice skating, curling, hockey, or simple relaxation in your snug 
                wintery cabin.
            </p>
            <img src="~/assets/Rectangle.svg" alt="" class="mb-6">
            <div class="flex flex-row">
                <div class="uppercase mr-20">
                    <h6 class="text-sm mb-2" style="letter-spacing: 2.35px;">Avg. distance</h6>
                    <h6 class="font-[Bellefair] text-3xl text-white">628 mil. km</h6>
                </div>
                <div class="uppercase">
                    <h6 class="text-sm mb-2" style="letter-spacing: 2.35px;">Est. travel time</h6>
                    <h6 class="font-[Bellefair] text-3xl text-white">3 years</h6>
                </div>
            </div>
        </div>
    </div>
</template>