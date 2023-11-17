<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Site Title`
      : "Robert Long | Crafting Digital Delight ";
  },
});
</script>
