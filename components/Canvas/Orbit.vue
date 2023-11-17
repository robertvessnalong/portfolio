<template>
  <TresOrbitControls
    v-if="renderer && camera"
    :args="[camera, renderer.domElement]"
  />
</template>

<script lang="ts">
export default {
  props: {
    renderer: Object,
    camera: Object,
  },
};
</script>
