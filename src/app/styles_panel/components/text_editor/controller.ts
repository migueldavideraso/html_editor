import Pickr from '@simonwep/pickr'
import Quill from 'quill'

import { rteSettings } from './settings'
import { colorPickerSettings } from '../settings'

export const createEditor = ({ editorElementContainer, editorElement }) => {
  const sectionElement = editorElementContainer.parentElement

  sectionElement.style['min-height'] = '225px'
  editorElement.style.border = 'none'

  const editor = new Quill(editorElement, rteSettings)

  setColorPicker({
    editor,
    type: 'color',
    _colorPickerButton: editorElementContainer.querySelector('.ql-toolbar .ql-formats .ql-color'),
  })

  setColorPicker({
    editor,
    type: 'background',
    _colorPickerButton: editorElementContainer.querySelector('.ql-toolbar .ql-formats .ql-background'),
  })

  return editor
}

export const getTextByHtml = text => {
  return text
    .replaceAll('ql-align-right', 'align-right')
    .replaceAll('ql-align-center', 'align-center')
    .replaceAll('ql-align-justify', 'align-justify')
    .replaceAll('ql-size-small', 'size-small')
    .replaceAll('ql-size-large', 'size-large')
    .replaceAll('ql-size-huge', 'size-huge')
}

const setColorPicker = ({ editor, type, _colorPickerButton }) => {
  const colorPickerButton = _colorPickerButton.cloneNode(true)

  _colorPickerButton.parentNode.replaceChild(colorPickerButton, _colorPickerButton)

  colorPickerButton.classList.add('color_picker')
  colorPickerButton.innerHTML = `<div></div>${colorPickerButton.innerHTML}`

  const colorPicker = Pickr.create({
    el: colorPickerButton.children[0],
    ...colorPickerSettings,
  })

  colorPickerButton.onclick = () => {
    const format = getSelectedTextFormat(editor)

    colorPicker.setColor(format.format[type] || '#000')

    if (type !== 'background') {
      colorPickerButton.querySelector('svg').style.setProperty('--stroke', format[type] || '#444')
    }
  }

  colorPicker.on('change', (color, source, instance) => {
    const format = getSelectedTextFormat(editor)
    const { index, length } = editor.getSelection()

    editor.formatText(index, length, type, color.toHEXA().toString())

    if (type !== 'background') {
      colorPickerButton.querySelector('svg').style.setProperty('--stroke', format[type] || '#444')
    }
  })
}

const getSelectedTextFormat = editor => {
  const { index, length } = editor.getSelection()
  const format = editor.getFormat(index, length)

  return format
}

const colorPickerButtonHTML = `
	<div></div>
	<svg viewBox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"></line> <polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"></polyline> <line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"></line> </svg>
`
