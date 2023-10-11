export const getUID = (length: number) => {
  length = length || Math.ceil(Math.random() * 100 + 50)

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

export const reduceUnit = (arr: any[], key: string | number) => {
  let result = {}

  arr.forEach(obj => {
    result[obj?.[key]] = obj
  })

  return result
}

export const reduceGroup = (arr: any[], key: string | number) => {
  let result = {}

  arr.forEach(obj => {
    const previousData = result[obj?.[key]] || []

    result[obj?.[key]] = [...previousData, obj]
  })

  return result
}

const styleUnits = ['rem', 'px', '%']

export const getUnitIndex = (styleValue: string) => {
  for (const unit of styleUnits) {
    const indexOf = styleValue.indexOf(unit)

    if (indexOf === -1) {
      continue
    }

    if (styleValue.slice(indexOf) !== unit) {
      continue
    }

    return indexOf
  }

  return -1
}

export const getUnitByStyleKey = (styleValue: string) => {
  styleValue = styleValue || ''

  const index = getUnitIndex(styleValue)

  return index > -1 ? styleValue.slice(index) : ''
}

export const getValueByStyleKey = (styleValue: string) => {
  const index = getUnitIndex(styleValue)

  return index > -1 ? styleValue.slice(0, index) : ''
}

export const isStyleValueNumeric = (styleValue: string) => {
  if (!styleValue) {
    return true
  }

  const unit = getValueByStyleKey(styleValue)
  const value = parseFloat(unit)

  return String(value) === unit
}

export const isHexadecimalColor = (colorValue: string) => {
  if (!colorValue) {
    return true
  }

  return colorValue.indexOf('#') === 0 && (colorValue.length === 7 || colorValue.length === 4)
}

export const getBrightness = (color: string) => {
  if (!color) {
    return 255
  }

  let rgb = 0

  if (color.indexOf('#') > -1) {
    color = color.slice(1) // strip #
    rgb = parseInt(color, 16) // convert rrggbb to decimal
  } else if (color.indexOf('rgb') > -1) {
    const colorElements: string | string[] = color.indexOf('rgba') > -1 ? color.slice(5, -1).split(',') : color.slice(4, -1).split(',')

    const rgbColor =
      (parseInt(colorElements[0]) | (1 << 8)).toString(16).slice(1) +
      (parseInt(colorElements[1]) | (1 << 8)).toString(16).slice(1) +
      (parseInt(colorElements[2]) | (1 << 8)).toString(16).slice(1)

    rgb = parseInt(rgbColor, 16)
  }

  const r = (rgb >> 16) & 0xff // extract red
  const g = (rgb >> 8) & 0xff // extract green
  const b = (rgb >> 0) & 0xff // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

  return luma
}
