<template>
  <TresPerspectiveCamera :args="[20, 20, 0.1, 20]" :position="[0, 0, 2]" />
  <TresHemisphereLight :args="[0xffffbb, 0x080820, 1]" />
  <TresDirectionalLight :arg="[0xffffff, 1]" />
  <CanvasImage />
</template>

<script lang="ts" setup>
import { extend } from "@tresjs/core";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const props = defineProps({
  imagePath: String,
});
</script>

<style></style>
