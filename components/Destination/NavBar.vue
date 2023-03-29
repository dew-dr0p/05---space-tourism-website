<template>
    <div>
            <button 
                class=" py-4 mr-12 uppercase text-sm
                        hover:border-b-[3px] 
                        hover:border-white 
                        hover:border-opacity-50"
                :class="destination === 'moon' ? 'border-b-[3px] border-white' : ''"
                style="letter-spacing: 2.7px;"
                @click="emit('navigate', 'moon')"
            >
                Moon
            </button>
            <button 
                class=" py-4 mr-10 uppercase text-sm
                        hover:border-b-[3px] 
                        hover:border-white 
                        hover:border-opacity-50"
                :class="destination === 'mars' ? 'border-b-[3px] border-white' : ''"
                style="letter-spacing: 2.7px;"
                @click="change('mars')"
            >
                Mars
            </button>
            <button 
                class=" py-4 mr-10 uppercase text-sm
                        hover:border-b-[3px] 
                        hover:border-white 
                        hover:border-opacity-50"
                :class="destination === 'europa' ? 'border-b-[3px] border-white' : ''"
                style="letter-spacing: 2.7px;"
                @click="$emit('navigate', 'europa')"
            >
                Europa
            </button>
            <button 
                class=" py-4 mr-10 uppercase text-sm
                        hover:border-b-[3px] 
                        hover:border-white 
                        hover:border-opacity-50"
                :class="destination === 'titan' ? 'border-b-[3px] border-white' : ''"
                style="letter-spacing: 2.7px;"
                @click="emit('navigate', 'titan')"
            >
                Titan
            </button>
        </div>
</template>

<script setup>
const props = defineProps({
    destination: String
})

const emit = defineEmits({'navigate': String})

function change(e) {
    emit('navigate', e)
}
</script>