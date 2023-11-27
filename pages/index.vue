<template>
  <NuxtLayout>
    <LayoutSection class="w-screen h-screen">
      <LayoutContainer
        id="layout-container"
        class="h-full w-full flex justify-center content-center relative flex-col"
      >
        <!-- Higher Text -->
        <CanvasAnimationWrapper
          :from-to="{ opacity: 0, x: '-100%' }"
          :to="{ opacity: 1, x: '0', duration: 0.6 }"
          class="content-wrapper block absolute left-0 top-1 w-full text-center"
        >
          <CanvasWrapper>
            <TresPerspectiveCamera :position="[0, 0, 1.3]" />
            <CanvasText text="Robert" size="0.5" />
          </CanvasWrapper>
        </CanvasAnimationWrapper>
        <!-- Image -->
        <CanvasAnimationWrapper
          :from-to="{ opacity: 0, y: '100%' }"
          :to="{ opacity: 1, y: '0' }"
          class="relative w-full h-full text-center"
        >
          <CanvasWrapper class="canvasImage">
            <TresPerspectiveCamera
              :args="[20, 20, 0.1, 20]"
              :position="[0, 0, 2]"
            />
            <TresHemisphereLight :args="[0xffffbb, 0x080820, 1]" />
            <TresDirectionalLight :arg="[0xffffff, 1]" />
            <CanvasImage />
          </CanvasWrapper>
        </CanvasAnimationWrapper>
        <!-- Lower Text -->
        <CanvasAnimationWrapper
          :from-to="{ opacity: 0, x: '100%' }"
          :to="{ opacity: 1, x: '0', duration: 0.6 }"
          class="content-wrapper block absolute left-0 bottom-0 w-full text-center"
        >
          <CanvasWrapper>
            <TresPerspectiveCamera
              :args="[30, 20, 0.1, 20]"
              :position="[0, 0, 2]"
            />
            <CanvasText text="Long" size="0.5" />
          </CanvasWrapper>
        </CanvasAnimationWrapper>
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
