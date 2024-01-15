<template>
    <div class="flex flex-col p-4 gap-2">
    <h1 class="text-2xl"> chrome-extension-starter - popup </h1>
    <button class="border border-gray-600 p-2" @click="count++">
        you clicked {{ count }} time{{ count === 1 ? '' : 's' }}
    </button>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>
