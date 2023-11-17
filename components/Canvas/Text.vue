<template>
  <suspense>
    <Text3D
      font="/fonts/Poppins_Regular.json"
      :text="text"
      :size="responsiveSize"
      :bevelThickness="0.02"
      :bevelSegments="1"
      :bevelSize="0.018"
      center
      need-updates
    >
      <TresMeshNormalMaterial />
    </Text3D>
  </suspense>
</template>

<script setup lang="ts">
import { useTresContext } from "@tresjs/core";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { onWindowResize } from "#imports";

const { renderer, camera } = useTresContext();

const { text, center, size } = defineProps(["text", "center", "size"]);

const responsiveSize = ref<number>(0.5);

const handleResize = () => {
  return onWindowResize({ renderer, camera, responsiveSize });
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
