<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
  meta: [
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "bg-gradient-to-r from-[#108dc7] to-[#ef8e38]",
    },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Site Title`
      : "Robert Long | Crafting Digital Delight ";
  },
});
</script>
