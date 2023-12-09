<template>
  <suspense>
    <Text3D
      ref="textRef"
      font="/fonts/Poppins_Regular.json"
      :height="height"
      :text="text"
      :size="responsiveSize"
      :bevelThickness="bevelThickness"
      :bevelSegments="bevelSegments"
      :bevelSize="bevelSize"
      bevelEnabled
      center
      need-updates
    >
      <TresMeshNormalMaterial />
    </Text3D>
  </suspense>
</template>

<script setup lang="ts">
import { useRenderLoop } from "@tresjs/core";
import { useTresContext } from "@tresjs/core";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { onWindowResize } from "#imports";

const { renderer, camera } = useTresContext();

const {
  text,
  center,
  height = 0.2,
  size = 0.5,
  bevelThickness = 0.5,
  bevelSegments = 1,
  bevelSize = 1,
  bevelEnabled = true,
} = defineProps([
  "text",
  "center",
  "height",
  "size",
  "bevelThickness",
  "bevelSegments",
  "bevelSize",
  "bevelEnabled",
]);

const { onLoop } = useRenderLoop();

const responsiveSize = ref<number>(size);

const handleResize = () => {
  return onWindowResize({ renderer, camera, size, responsiveSize });
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize(); // Call handleResize once on component mount to set initial size
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style></style>
