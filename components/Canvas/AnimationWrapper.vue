<template>
  <TresGroup ref="group" :position="position">
    <slot />
  </TresGroup>
</template>

<script lang="ts" setup>
import TresGroup from "@tresjs/core";
import { ref, onMounted } from "vue";
const {
  position,
  to = 0,
  add = false,
  direction = "x",
} = defineProps({
  position: Array,
  to: Number,
  add: Boolean,
  direction: {
    type: String,
  },
});

console.log(position);

const { onBeforeLoop, onAfterLoop } = useRenderLoop();

const group = ref();

const animateText = (
  textRef: Ref<any>,
  delta: number,
  speedMultiplier = 3.5
) => {
  if (textRef.value) {
    const newPosition = add
      ? textRef.value.position[direction] + delta * speedMultiplier
      : textRef.value.position[direction] - delta * speedMultiplier;

    if (add && newPosition <= 0) {
      textRef.value.position[direction] = newPosition;
    } else if (!add && newPosition >= 0) {
      textRef.value.position[direction] = newPosition;
    }
  }
};

onMounted(() => {
  // Use a loop for common animation logic
  onBeforeLoop(({ delta, elapsed }) => {
    animateText(group, delta);
  });
});
</script>

<style></style>
