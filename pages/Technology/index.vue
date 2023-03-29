<script setup>
definePageMeta({
    layout: "technology",
})

const tech = ref('vehicle')

const technologies = [
    'vehicle',
    'spaceport',
    'capsule'
]

const technology = {
    vehicle: {
        id: 1,
        title: 'Launch Vehicle',
        text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond.Our WEB-X carrier rocket is the most powerful in operation.Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image: '/_nuxt/assets/technology/image-launch-vehicle-portrait.jpg'
    },
    spaceport: {
        id: 2,
        title: 'Spaceport',
        text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        image: '/_nuxt/assets/technology/image-spaceport-portrait.jpg'
    },
    capsule: {
        id: 3,
        title: 'Space Capsule',
        text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        image: '/_nuxt/assets/technology/image-space-capsule-portrait.jpg'
    }
}
</script>

<template>
    <div class="grid grid-cols-2 mb-24">
        <div class="text-white ml-40 -mt-12">
            <h5 class="text-3xl text-white uppercase mb-32" style="letter-spacing: 4.75px;"><span
                    class="opacity-25">03</span> Space launch 101</h5>
            <div class="flex flex-row">
                <TechnologyNavBar :number="technology[tech]['id']" class="mr-20" @navigate="(e => technologies.forEach(el => technology[el]['id'] === e ? tech = el : ''))" />
                <div class="text-lightBlue max-w-md">
                    <h5 class="uppercase" style="letter-spacing: 4.75px;">The Terminology...</h5>
                    <h3 class="font-[Bellefair] text-[3.5rem] w-[30rem] text-white mb-5 uppercase">{{ technology[tech]['title'] }}</h3>
                    <p class="">{{ technology[tech]['text'] }}</p>
                </div>
            </div>
        </div>
        <div class="grid justify-end">
            <img :src="technology[tech]['image']" alt="" class="">
        </div>
    </div>
</template>