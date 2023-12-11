<template>
  <NuxtLayout>
    <LayoutSection class="w-screen h-[70vh] sm:h-screen">
      <LayoutContainer
        id="layout-container"
        class="max-w-full h-full w-full flex justify-center content-center relative flex-col"
      >
        <Transition
          name="fade-overlay"
          enter-active-class="opacity-1 transition-opacity duration-200"
          leave-active-class="opacity-0 transition-opacity duration-200"
        >
          <div
            v-show="!hasFinishLoading"
            class="absolute bg-grey-600 t-0 l-0 w-full h-full z-20 flex justify-center items-center text-black font-mono"
          >
            <div class="w-200px">
              Loading... {{ progress }} %
              <i class="i-ic-twotone-catching-pokemon animate-rotate-in"></i>
            </div>
          </div>
        </Transition>
        <CanvasWrapper window-size v-show="hasFinishLoading">
          <TresPerspectiveCamera :position="[0, 0, 1.15]" />
          <TresHemisphereLight :args="[0xffffbb, 0x080820, 1]" />
          <TresDirectionalLight :arg="[0xffffff, 1]" />
          <OrbitControls />
          <CanvasAnimationWrapper :position="[-2, 0, 0]" add>
            <TresMesh :position="[0, 0.2, -0.5]" ref="textRef">
              <CanvasText
                text="Robert"
                :size="0.3"
                :height="0"
                :bevel-thickness="0.12"
              />
            </TresMesh>
          </CanvasAnimationWrapper>
          <CanvasAnimationWrapper :position="[0, -2, 0]" add :direction="'y'">
            <TresMesh :position="[0, 0, -5]">
              <CanvasImage />
            </TresMesh>
          </CanvasAnimationWrapper>
          <CanvasAnimationWrapper :position="[2, 0, 0]">
            <TresMesh :position="[0, -0.25, 0]">
              <CanvasText
                text="Long"
                :size="0.2"
                center
                :height="0"
                :bevel-thickness="0.12"
              />
            </TresMesh>
          </CanvasAnimationWrapper>
        </CanvasWrapper>
      </LayoutContainer>
    </LayoutSection>
    <LayoutSection
      class="w-screen h-screen bg-gradient-to-r from-[#108dc7] to-[#ef8e38]"
    >
      <LayoutContainer> </LayoutContainer>
    </LayoutSection>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useProgress } from "@tresjs/cientos";

const { hasFinishLoading, progress, items } = await useProgress();

useHead({
  meta: [
    { name: "keywords", content: "Web Development, Custom Web Apps" },
    {
      name: "description",
      content:
        "Web Developer Passionate About Building Fun and Functional Web Applications",
    },
  ],
});
</script>

<style scoped>
@media (orientation: portrait) {
  .content-wrapper {
    height: 450px;
  }
}

@media (orientation: landscape) {
  .content-wrapper {
    height: 50vh;
  }

  .content-wrapper:first-child {
    top: 10px;
  }
}
</style>
