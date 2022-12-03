<template>

    <div class="h-screen-navbar w-full" ref="canvasWrapper">

        <canvas id="background" ref="backgroundCanvas"></canvas>
    </div>

</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Canvas } from "../../../helper/canvas.js";

const props = defineProps({
    theme: String
})

const backgroundCanvas = ref(null);
const canvasWrapper = ref(null);

let canvas;
const ballNum = ref(50);
const ballColor = ref(props.theme.name !== "dark" ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)");

watch(() => props.theme, (_, newVal) => {
    // Why the fuck is this the wrong way around???
    if (newVal && newVal.name === "dark") {
        ballColor.value = "rgba(0,0,0,0.3)"
    } else {
        ballColor.value = "rgba(255,255,255,0.3)"
    }

    canvas.setTheme(ballColor.value);
})

const render = (canvas) => {
    canvas.update();
    requestAnimationFrame(() => render(canvas));
}

onMounted(() => {
    const ctx = backgroundCanvas.value.getContext("2d");
    const { clientHeight, clientWidth } = canvasWrapper.value;

    backgroundCanvas.value.height = clientHeight;
    backgroundCanvas.value.width = clientWidth;

    canvas = new Canvas(ctx, clientWidth, clientHeight, ballColor.value, ballNum.value);
    canvas.init();
    render(canvas);

    window.addEventListener("resize", () => {
        if (canvasWrapper.value) {
            const { clientHeight, clientWidth } = canvasWrapper.value;
            backgroundCanvas.value.height = clientHeight;
            backgroundCanvas.value.width = clientWidth;
            canvas.resize(clientWidth, clientHeight);
        }
    })
})
</script>