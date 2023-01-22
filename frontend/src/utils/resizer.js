import { useStore } from "../store";
const store = useStore();

export default function set_resizer(target) {
	let template_html = `<div class="z-10 editor fixed hover:border-[1px] hover:border-blue-200">
			<div class="absolute w-[4px] border-none bg-transparent top-0 bottom-0 left-[-2px] left-handle cursor-ew-resize hidden pointer-events-auto"></div>
			<div class="absolute w-[4px] border-none bg-transparent top-0 bottom-0 right-[-2px] right-handle cursor-ew-resize hidden pointer-events-auto"></div>
			<div class="absolute h-[4px] border-none bg-transparent top-[-2px] right-0 left-0 top-handle cursor-ns-resize hidden pointer-events-auto"></div>
			<div class="absolute h-[4px] border-none bg-transparent bottom-[-2px] right-0 left-0 bottom-handle cursor-ns-resize hidden pointer-events-auto"></div>

			<div class="absolute w-[8px] h-[8px] border-[1px] border-blue-400 rounded-full bg-white top-[-4px] left-[-4px] cursor-nwse-resize hidden pointer-events-auto"></div>
			<div class="absolute w-[8px] h-[8px] border-[1px] border-blue-400 rounded-full bg-white bottom-[-4px] left-[-4px] cursor-nesw-resize hidden pointer-events-auto"></div>
			<div class="absolute w-[8px] h-[8px] border-[1px] border-blue-400 rounded-full bg-white top-[-4px] right-[-4px] cursor-nesw-resize hidden pointer-events-auto"></div>
			<div class="absolute w-[8px] h-[8px] border-[1px] border-blue-400 rounded-full bg-white bottom-[-4px] right-[-4px] cursor-nwse-resize hidden pointer-events-auto"></div>
		<div>`;

	let editor_template = document.createElement("template");
	editor_template.innerHTML = template_html;

	let editor = editor_template.content.firstChild;

	let right_handle = editor.querySelector(".right-handle");
	right_handle.addEventListener("mousedown", (e) => {
		let start_x = e.clientX;
		let start_width = target.offsetWidth;

		// to disable cursor jitter
		let doc_cursor = document.body.style.cursor;
		document.body.style.cursor =
			window.getComputedStyle(right_handle)["cursor"];

		let mousemove = (e) => {
			let movement = e.clientX - start_x;
			target.style.width = start_width + movement + "px";
			e.preventDefault();
		};
		document.addEventListener("mousemove", mousemove);
		document.addEventListener("mouseup", (e) => {
			document.body.style.cursor = doc_cursor;
			document.removeEventListener("mousemove", mousemove);
			e.preventDefault();
		});
	});

	let bottom_handle = editor.querySelector(".bottom-handle");
	bottom_handle.addEventListener("mousedown", (e) => {
		let start_y = e.clientY;
		let start_height = target.offsetHeight;

		// to disable cursor jitter
		let doc_cursor = document.body.style.cursor;
		document.body.style.cursor =
			window.getComputedStyle(bottom_handle)["cursor"];

		let mousemove = (e) => {
			let movement = e.clientY - start_y;
			target.style.height = start_height + movement + "px";
		};
		document.addEventListener("mousemove", mousemove);
		document.addEventListener("mouseup", () => {
			document.body.style.cursor = doc_cursor;
			document.removeEventListener("mousemove", mousemove);
		});
	});

	document.getElementsByClassName("overlay")[0].append(editor);

	function update_editor() {
		let bound = target.getBoundingClientRect();
		editor.style.width = bound.width + "px";
		editor.style.height = bound.height + "px";
		editor.style.top = bound.top + "px";
		editor.style.right = bound.right + "px";
		editor.style.left = bound.left + "px";
		editor.style.right = bound.right + "px";
	}
	update_editor();

	// TODO: sup buddy?
	target.closest(".canvas-container").addEventListener("wheel", update_editor);

	window.addEventListener("resize", update_editor);
	window.addEventListener("scroll", update_editor);

	let observer = new MutationObserver(update_editor);
	const config = {
		attributes: true,
		subtree: true,
	};
	observer.observe(target, config);
	observer.observe(document.getElementsByClassName("canvas")[0], {
		...config,
		childList: true,
	});

	editor.addEventListener("click", (e) => {
		e.stopPropagation();
		target.click();
	});

	if (store.selected_component == target) {
		// selected
		editor.querySelectorAll("[class*=resize]").forEach((element) => {
			element.classList.remove("hidden");
		});
		editor.classList.add(
			"pointer-events-none",
			"border-[1px]",
			"border-blue-400"
		);
	}

	store.$subscribe(({ events }, state) => {
		if (events.key !== "selected_component") return;
		if (events.newValue == target) {
			// selected
			editor.querySelectorAll("[class*=resize]").forEach((element) => {
				element.classList.remove("hidden");
			});
			editor.classList.add(
				"pointer-events-none",
				"border-[1px]",
				"border-blue-400"
			);
		} else {
			// un-selected
			editor.querySelectorAll("[class*=resize]").forEach((element) => {
				element.classList.add("hidden");
			});
			editor.classList.remove(
				"border-[1px]",
				"border-blue-400",
				// if the new selected component is a child of this component
				target.contains(events.newValue) ? "pointer-events-none": null,
			);
		}
	});
}
