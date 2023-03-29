<script setup>
definePageMeta({
    layout: "crew",
})

const member = ref('commander')

const crewMembers = [
    'commander',
    'specialist',
    'pilot',
    'engineer'
]

const crew = {
    commander: {
        id: 1,
        position: 'Commander',
        name: 'Douglas Hurley',
        about: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image: '/_nuxt/assets/crew/image-douglas-hurley.png'
    },
    specialist: {
        id: 2,
        position: 'Mission Specialist',
        name: 'Mark Shuttleworth',
        about: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        image: '/_nuxt/assets/crew/image-mark-shuttleworth.png'
    },
    pilot: {
        id: 3,
        position: 'Pilot',
        name: 'Victor Glover',
        about: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        image: '/_nuxt/assets/crew/image-victor-glover.png'
    },
    engineer: {
        id: 4,
        position: 'Flight Engineer',
        name: 'Anousheh Ansari',
        about: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        image: '/_nuxt/assets/crew/image-anousheh-ansari.png'
    }
}
</script>

<template>
    <div class="grid grid-cols-2">
        <div class="text-white m-auto mt-4 max-w-md">
            <h5 class="text-3xl uppercase mb-32" style="letter-spacing: 4.75px;"><span class=" opacity-25">02</span> Meet your crew</h5>
            <h4 class="font-[Bellefair] text-[2rem] opacity-50 uppercase">{{ crew[member]['position'] }}</h4>
            <h3 class="font-[Bellefair] text-[3.5rem] w-[40rem] mb-5 uppercase">{{ crew[member]['name'] }}</h3>
            <p class="text-lightBlue mb-20">{{ crew[member]['about'] }}</p>
            <CrewNavBar :number="crew[member]['id']" @navigate="(e => crewMembers.forEach(el => crew[el]['id'] === e[0] ? member = el : ''))" />
        </div>
        <div class="mx-auto mt-3 self-end">
            <img :src="crew[member]['image']" alt="" class="">
        </div>
    </div>
</template>

