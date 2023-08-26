



export const setMoveController = (args) => {

	const {
		element,
		moveElement,
		wrapperElement,
	} = args

	let onMove = false

	moveElement.onpointerdown = () => {

		onMove = true

		moveElement.onpointermove = ({ movementX, movementY }) => {

			const elementStyles = window.getComputedStyle(element)
			const wrapperStyles = window.getComputedStyle(wrapperElement)

			const top = parseInt(elementStyles.top)
			const left = parseInt(elementStyles.left)
			const width = parseInt(elementStyles.width)
			const bottom = parseInt(elementStyles.bottom)

			const wrapperWidth = parseInt(wrapperStyles.width)

			if (top <= 0 && movementY < 0) {
				return
			}

			if (bottom <= 0 && movementY > 0) {
				return
			}

			if (left <= 0 && movementX < 0) {
				return
			}

			if (wrapperWidth - left - width <= 0 && movementX > 0) {
				return
			}

			element.style.top = `${parseInt(top) + movementY}px`
			element.style.left = `${parseInt(left) + movementX}px`
		}
	}

	moveElement.onpointerup = () => {
		moveElement.onpointermove = () => {}
	}

	window.addEventListener('mouseup', (e) => {
		moveElement.onpointermove = () => {}
	})
}



