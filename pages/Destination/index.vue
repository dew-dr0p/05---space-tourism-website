<script setup>
definePageMeta({
    layout: "destination",
})

const destination = ref('titan')

const destinations = {
    moon: {
        image: '/_nuxt/assets/destination/image-moon.png',
        title: 'Moon',
        text: 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
        distance: '384,400 km',
        time: '3 days'
    },
    mars: {
        image: '/_nuxt/assets/destination/image-mars.png',
        title: 'Mars',
        text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        time: '9 months'
    },
    europa: {
        image: '/_nuxt/assets/destination/image-europa.png',
        title: 'Europa',
        text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        time: '3 years'
    },
    titan: {
        image: '/_nuxt/assets/destination/image-titan.png',
        title: 'Titan',
        text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        time: '7 years'
    },
}
function submit(e) {
    destination = e[0]
    console.log(destination)
}
</script>

<template>
    <div class="grid grid-cols-2 mx-20 mb-28">
        <div class="m-auto">
            <h5 class="text-3xl text-white uppercase -ml-16 mb-24" style="letter-spacing: 4.75px;"><span class=" opacity-25">01</span> Pick your Destination</h5>
            <img :src="destinations[destination]['image']" alt="" class="">
        </div>
        <div class="text-lightBlue m-auto max-w-md">
            <DestinationNavBar class="mb-9" :destination="destination" @navigate="submit" />
            <h1 class="font-[Bellefair] text-white text-[6.25rem] uppercase">{{ destinations[destination]['title'] }}</h1>
            <p class="mb-14">{{ destinations[destination]['text'] }}</p>
            <!-- <img src="~/assets/Rectangle.svg" alt="" class="mb-6"> -->
            <div class="h-px w-[27.75rem] bg-[#383B4B] mb-7"></div>
            <div class="flex flex-row">
                <div class="uppercase mr-20">
                    <h6 class="text-sm mb-2" style="letter-spacing: 2.35px;">Avg. distance</h6>
                    <h6 class="font-[Bellefair] text-3xl text-white">{{ destinations[destination]['distance'] }}</h6>
                </div>
                <div class="uppercase">
                    <h6 class="text-sm mb-2" style="letter-spacing: 2.35px;">Est. travel time</h6>
                    <h6 class="font-[Bellefair] text-3xl text-white">{{ destinations[destination]['time'] }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>