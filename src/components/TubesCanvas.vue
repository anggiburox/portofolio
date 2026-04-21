<template>
  <canvas :id="canvasId" class="tubes-canvas overflow-hidden"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  canvasId: {
    type: String,
    default: "tubes-canvas",
  },
});

let app = null;

const randomColors = (count) => {
  return Array(count)
    .fill()
    .map(
      () =>
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0"),
    );
};

onMounted(async () => {
  try {
    const TubesCursor = (
      await import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js")
    ).default;
    const canvas = document.getElementById(props.canvasId);

    if (!canvas) return;

    app = TubesCursor(canvas, {
      tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
          intensity: 200,
          colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
        },
      },
    });

    const handleClick = () => {
      if (app?.tubes) {
        app.tubes.setColors(randomColors(3));
        app.tubes.setLightsColors(randomColors(4));
      }
    };

    document.body.addEventListener("click", handleClick);
    window._cleanupTubes = () =>
      document.body.removeEventListener("click", handleClick);
  } catch (error) {
    console.error("Error loading tubes cursor:", error);
  }
});

onBeforeUnmount(() => {
  app?.dispose?.();
  window._cleanupTubes?.();
});
</script>

<style scoped>
.tubes-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: auto;
}
</style>
