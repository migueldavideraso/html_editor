

export const getUID = (length) => {

	length = length || Math.ceil((Math.random() * 100) + 50)

	let result = ''
	const characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890' 
	const charactersLength = characters.length

	for (let i = 0; i <= length; i++) {
		const index = Math.ceil(Math.random() * charactersLength) - 1
		const character = characters.at(index)

		result += character
	}

	return result
}


export const reduceUnit = (arr, key) => {

	let result = {}

	arr.forEach(obj => {
		result[obj?.[key]] = obj
	})

	return result
}

export const reduceGroup = (arr, key) => {

	let result = {}

	arr.forEach(obj => {

		const previousData = result[obj?.[key]] || []

		result[obj?.[key]] = [ ...previousData, obj ]
	})

	return result
}


const styleUnits = ['rem', 'px', '%']

export const getUnitIndex = (string) => {

	for (const unit of styleUnits) {
		const indexOf = string.indexOf(unit)

		if (indexOf === -1) {
			continue
		}

		if (string.slice(indexOf) !== unit) {
			continue
		}

		return indexOf
	}

	return -1
}


export const getUnitByStyleKey = (string) => {

	string = string || ''

	const index = getUnitIndex(string)

	return index > -1 ? string.slice(index) : ''
}

export const getValueByStyleKey = (string) => {

	string = string || ''

	const index = getUnitIndex(string)

	return index > -1 ? string.slice(0, index) : ''
}

export const isStyleValueNumeric = (string) => {

	if (!string) {
		return true
	}

	const unit = getValueByStyleKey(string)
	const value = parseFloat(unit)

	return value !== NaN && value?.constructor === Number
}



export const isHexadecimalColor = (string) => {

	if (!string) {
		return true
	}

	return string.indexOf('#') === 0 && (string.length === 7 || string.length === 4)
}


export const getBrightness = (color) => {

	// var color = [100, 255, 255];
	// var brightness = (color[0] + color[0] + color[1] + color[2] + color[2] + color[2]) / 6

	// brightness * .1

	if (!color) {
		return 255
	}

	let rgb = 0

	if (color.indexOf('#') > -1) {
		color = color.slice(1) // strip #
		rgb = parseInt(color, 16) // convert rrggbb to decimal
	}
	else if (color.indexOf('rgb') > -1) {

		color = (
			color.indexOf('rgba') > -1 ?
			color.slice(5, -1).split(',') :
			color.slice(4, -1).split(',')
		)

		color = (color[0] | 1 << 8).toString(16).slice(1) + 
		(color[1] | 1 << 8).toString(16).slice(1) + 
		(color[2] | 1 << 8).toString(16).slice(1)

		rgb = parseInt(color, 16)
	}

	const r = (rgb >> 16) & 0xff;  // extract red
	const g = (rgb >>  8) & 0xff;  // extract green
	const b = (rgb >>  0) & 0xff;  // extract blue
	
	const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

	return luma
}

