<template>
    <div class="m-10 mr-0 flex flex-row">
        <img src="~/assets/Group2.svg" alt="" class=" mr-20">
        <img src="~/assets/Rectangle.svg" alt="">
        <div class="absolute w-[40rem] h-[6rem] right-0 -mt-5 bg-[rgba(255,255,255)] bg-opacity-[0.04] backdrop-filter blur-xs">
        </div>
        <div class="text-white uppercase text-sm px-6 mt-3" style="letter-spacing: 2.7px;">
            <NuxtLink 
                to="/" 
                class=" py-[2.5rem] ml-12 
                        hover:border-b-[3px] 
                        hover:border-white 
                        hover:border-opacity-50"
            >
                <span class="font-bold">00</span> Home
            </NuxtLink>
            <NuxtLink to="/Destination" class="py-[2.5rem] ml-10 hover:border-b-[3px] hover:border-white hover:border-opacity-50"><span class="font-bold">01</span> Destination</NuxtLink>
            <NuxtLink to="/Crew" class="py-[2.5rem] ml-10 hover:border-b-[3px] hover:border-white hover:border-opacity-50"><span class="font-bold">02</span> Crew</NuxtLink>
            <NuxtLink to="/Technology" class="py-[2.5rem] ml-10 hover:border-b-[3px] hover:border-white hover:border-opacity-50"><span class="font-bold">03</span> Technology</NuxtLink>
        </div>
    </div>
</template>