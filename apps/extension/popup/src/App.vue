<template>
    <h1 class="text-2xl my-4"> chrome-extension-starter - popup </h1>
    <button class="border-gray-600 mb-4 p-2">
        you clicked {{ count }} time{{ count === 1 ? '' : 's' }}
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
</script>
