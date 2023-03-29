<template>
    <div class="flex flex-col">
            <button 
                v-for="n in 3" 
                class="rounded-[50%] w-20 h-20 font-[Bellefair] 
                border border-white text-3xl
                border-opacity-25 hover:border-opacity-100 mb-5"
                :class="number === n ? 'text-blue bg-white border-none' : 'text-white bg-none'"
                @click="$emit('navigate', n)"
            >{{ n }}</button>
    </div>
</template>

<script setup>
const props = defineProps({
    number: Number
})
const emit = defineEmits(['navigate'])
</script>