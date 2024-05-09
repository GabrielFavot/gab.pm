<template>
  <div class="fixed inset-x-0 top-5 h-1 mx-8 rounded-sm bg-gray-800">
    <div class="flex justify-between mt-3">
      <a 
      v-for="link in links" :key="link.name" 
      :href="link.url" 
      class="font-mono tracking-wide capitalize text-gray-800 hover:underline hover:underline-offset-8 decoration-4 font-extrabold">
      {{ link.name }}
    </a>
      
    </div>
  </div>
</template>

<script lang="ts" setup>

const links = [
  { name: '<GAB>', url: '/' },
  { name: 'Github', url: 'https://github.com/gabrielfavot' },
  { name: 'Contact', url: 'mail:gabriel@favot.fr' },
]

</script>

