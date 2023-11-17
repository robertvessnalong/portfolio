<template>
  <div :class="`container mx-auto ${noPadding && 'px-2'}`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    noPadding: false,
  },
};
</script>

<style></style>
