<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
  meta: [
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Site Title`
      : "Robert Long | Crafting Digital Delight ";
  },
});
</script>
