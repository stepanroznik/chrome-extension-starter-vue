<template>
  <div class="flex flex-col p-4 gap-4 w-96">
    <h1 class="text-xl">chrome-extension-starter - popup</h1>
    <button
      class="border border-gray-600 bg-white hover:bg-gray-600 hover:text-white p-2"
      @click="count++"
    >
      you clicked {{ count }} time{{ count === 1 ? '' : 's' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>
