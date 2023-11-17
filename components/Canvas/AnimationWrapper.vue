<template>
  <div ref="wrapper" class="wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

export default {
  props: {
    fromTo: {
      type: Object, // Assuming fromTo is an object
      required: true,
    },
    to: {
      type: Object, // Assuming to is an object
      required: true,
    },
  },
  setup(props) {
    const wrapper = ref(null);

    onMounted(() => {
      gsap.fromTo(wrapper.value, props.fromTo, props.to);
    });

    return { wrapper };
  },
};
</script>

<style></style>
