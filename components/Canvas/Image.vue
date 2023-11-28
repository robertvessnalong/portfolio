<template>
  <suspense>
    <primitive :object="new THREE.Scene()"></primitive>
  </suspense>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useGLTF } from "@tresjs/cientos";
import * as THREE from "three";

onBeforeMount(async () => {
  const path = "/images/robert.glb";
  const { scene } = await useGLTF(path, { draco: true });
  scene.scale.set(0.1, 0.1, 0.1);
  new THREE.Scene().add(scene);
});
</script>

<style></style>
