<template>
  <suspense>
    <GLTFModel path="/images/robert.glb" draco></GLTFModel>
  </suspense>
</template>

<script lang="ts" setup>
import { GLTFModel } from "@tresjs/cientos";
</script>

<style></style>
