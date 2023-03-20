<template>
	<div class="top-0 bottom-0 w-1 bg-transparent absolute hover:cursor-ew-resize"
		:class="{
			'left-0': side === 'left',
			'right-0': side === 'right',
			'bg-gray-300 dark:bg-zinc-700': dragActive,
		}"
		@mousedown="resize">
	</div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
	maxWidth: {
		type: Number,
		default: 350
	},
	minWidth: {
		type: Number,
		default: 280
	},
	width: {
		type: Number,
		default: 300
	},
	side: {
		type: String,
		default: "right"

	}
});

const emit = defineEmits({
	resize: (width) => width
});

const dragActive = ref(false);

function resize(ev) {
	const startX = ev.clientX;
	const startWidth = props.width;
	// to disable cursor jitter
	const docCursor = document.body.style.cursor;
	document.body.style.cursor = window.getComputedStyle(ev.target).cursor;

	const mousemove = (mouseMoveEvent) => {
		const movement = (mouseMoveEvent.clientX - startX) * (props.side === "left" ? -1 : 1);
		let newWidth = startWidth + movement;
		// clamp width between min and max
		newWidth = Math.min(Math.max(props.minWidth, newWidth), props.maxWidth);
		console.log(props.minWidth, newWidth, props.maxWidth);
		emit("resize", newWidth);
		dragActive.value = true;
		mouseMoveEvent.preventDefault();
	};
	document.addEventListener("mousemove", mousemove);
	document.addEventListener("mouseup", (mouseUpEvent) => {
		document.body.style.cursor = docCursor;
		document.removeEventListener("mousemove", mousemove);
		dragActive.value = false;
		mouseUpEvent.preventDefault();
	});
}
</script>