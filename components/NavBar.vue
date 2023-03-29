<template>
    <div class="m-10 mr-0 flex flex-row items-center self-start">
        <img src="~/assets/Group2.svg" alt="" class=" mr-16">
        <!-- <img src="~/assets/Rectangle.svg" alt=""> -->
        <div class="h-px w-[29.75rem] bg-white mix-blend-normal opacity-25 z-[1]"></div>
        <!-- <div class="absolute w-[40rem] h-[6rem] right-0 -mt-5 bg-[rgba(255,255,255)] bg-opacity-[0.04] backdrop-filter blur-xs">
        </div> -->
        <div class="h-24 w-[52rem] -ml-3 bg-[rgba(255,255,255)] bg-opacity-[0.04] backdrop-blur-2xl text-white uppercase text-sm flex flex-row items-center" style="letter-spacing: 2.7px;">
            <NuxtLink 
                to="/" 
                class=" py-[2.25rem] ml-44 
                        hover:border-b-[3px] 
                        hover:border-white 
                        hover:border-opacity-50"
            >
                <span class="font-bold">00</span> Home
            </NuxtLink>
            <NuxtLink to="/Destination" class="py-[2.25rem] ml-10 hover:border-b-[3px] hover:border-white hover:border-opacity-50"><span class="font-bold">01</span> Destination</NuxtLink>
            <NuxtLink to="/Crew" class="py-[2.25rem] ml-10 hover:border-b-[3px] hover:border-white hover:border-opacity-50"><span class="font-bold">02</span> Crew</NuxtLink>
            <NuxtLink to="/Technology" class="py-[2.25rem] ml-10 hover:border-b-[3px] hover:border-white hover:border-opacity-50"><span class="font-bold">03</span> Technology</NuxtLink>
        </div>
    </div>
</template>