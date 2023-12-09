import { gsap } from "gsap";
import type { Ref, ComputedRef } from "vue";
import { WebGLRenderer, PerspectiveCamera, Camera } from "three";

interface onWindowResizeProps {
  renderer: Ref<WebGLRenderer>;
  camera: Ref<PerspectiveCamera> | ComputedRef<Camera | undefined>;
  size: Ref<number>;
  responsiveSize: Ref<number>;
}

export const onWindowResize = ({
  renderer,
  camera,
  size,
  responsiveSize,
}: onWindowResizeProps) => {
  const cameraValue = camera.value;

  if (cameraValue instanceof PerspectiveCamera) {
    // Update the aspect ratio based on the new size
    cameraValue.aspect = window.innerWidth / window.innerHeight;
    cameraValue.updateProjectionMatrix();
    renderer.value.setSize(window.innerWidth, window?.innerHeight, false);
    const topSize = ref(size);

    if (window.innerWidth >= 1024) {
      responsiveSize.value = topSize.value;
    } else if (window.innerWidth >= 768) {
      responsiveSize.value = 0.25;
    } else if (window.innerWidth >= 465) {
      responsiveSize.value = 0.2;
    } else {
      responsiveSize.value = 0.12;
    }
  }
};
