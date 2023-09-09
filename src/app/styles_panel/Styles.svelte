<script>
	import { setElement as setFileElement } from "@/file_state/sections";
	import { getOptions } from "./controller";

	export let element = null;

	$: Options = getOptions(element);

	let _element = null;
	let showOptions = false;

	$: if (_element?.id !== element?.id) {
		showOptions = false;

		setTimeout(function () {
			_element = element;
			showOptions = true;
		}, 100);
	}

	const changeElementKey = (key, value) => {
		setFileElement(element.id, {
			[key]: value,
		});
	};

	const changeStyleKey = (key, value) => {
		setFileElement(element.id, {
			styles: {
				...element.styles,
				[key]: value,
			},
		});
	};

	const deleteStyleKeys = (keys) => {
		element.styles = element.styles || {};

		keys.forEach((key) => {
			delete element.styles[key];
		});

		setFileElement(element.id, { styles: element.styles });
	};
</script>

{#if showOptions}
	<Options {element} {changeStyleKey} {deleteStyleKeys} {changeElementKey} />
{/if}
