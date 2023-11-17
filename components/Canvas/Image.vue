<template>
  <suspense>
    <primitive :object="newScene"></primitive>
  </suspense>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useGLTF } from "@tresjs/cientos";
import * as THREE from "three";

const newScene = new THREE.Scene();

onBeforeMount(async () => {
  const path = "/images/robert.glb";
  const { scene } = await useGLTF(path, { draco: true });
  scene.scale.set(0.1, 0.1, 0.1);
  newScene.add(scene);
});
</script>

<style></style>
