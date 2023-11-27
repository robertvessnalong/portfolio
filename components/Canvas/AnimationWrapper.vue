<template>
  <div ref="wrapper" class="wrapper">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";
const props = defineProps({
  fromTo: {
    type: Object, // Assuming fromTo is an object
    required: true,
  },
  to: {
    type: Object, // Assuming to is an object
    required: true,
  },
});

const wrapper = ref(null);

onMounted(() => {
  gsap.fromTo(wrapper.value, props.fromTo, props.to);
});
</script>

<style></style>
