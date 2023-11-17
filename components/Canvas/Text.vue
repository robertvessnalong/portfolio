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
import { gsap } from "gsap";
import { useTresContext } from "@tresjs/core";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { onWindowResize } from "#imports";

const { renderer, camera } = useTresContext();

const { text, center, size } = defineProps(["text", "center", "size"]);

const textWrapper = ref(null);
const responsiveSize = ref<number>(0.5);

const handleResize = () => {
  return onWindowResize({ renderer, camera, responsiveSize });
};

const handleAnimation = () => {
  gsap.fromTo(
    textWrapper,
    { opacity: 0, x: "-100%" },
    { opacity: 1, x: "0", duration: 0.6 }
  );
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
