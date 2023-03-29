<template>
    <div>
        <button 
            v-for="n in 4" 
            class="rounded-[50%] w-2 
            h-2 bg-white  
            hover:bg-opacity-50 mr-3"
            :class="n === number ? 'bg-opacity-100, border-none' : 'bg-opacity-[0.17]'"
            @click="$emit('navigate', n)"
        ></button>
    </div>
</template>

<script setup>
const props = defineProps({
    number: Number,
})
const emit = defineEmits({'navigate': String})
</script>