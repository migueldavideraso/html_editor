import type { I_Elements_Styles } from '@/types/main'
import { writable } from 'svelte/store'

export const allStylesStore = (function () {
  const { subscribe } = writable<I_Elements_Styles>({
    page: {
      'box-sizing': 'border-box',
      'font-family': '"Helvetica"',
    },

    all: {
      position: 'relative',
    },

    app: {
      overflow: 'auto',
      width: '100%',
      height: '100%',
      'padding-top': '10px',
      'padding-left': '10px',
      'padding-right': '10px',
      'padding-bottom': '10px',
      'background-color': 'rgba(255, 255, 255, 1)',
    },

    text: {
      'line-height': 'var(--font-size)',
      'font-size': 'var(--font-size)',
      'flex-direction': 'column',
      'word-wrap': 'break-word',
      color: '#000000',
      display: 'flex',
      cursor: 'default',
      'grid-gap': '5px',
      'padding-top': '5px',
      'padding-left': '5px',
      '--font-size': '12px',
      'padding-right': '5px',
      'padding-bottom': '5px',
      'background-color': 'rgba(255, 255, 255, 1)',
    },

    box: {
      'padding-top': '10px',
      'padding-left': '10px',
      'padding-right': '10px',
      'padding-bottom': '10px',
      border: '1px solid rgba(0, 0, 0, 1)',
      'background-color': 'rgba(255, 255, 255, 1)',
    },

    section: {
      'flex-direction': 'column',
      'flex-wrap': 'wrap',
      display: 'flex',
      'grid-gap': '10px',
      'padding-top': '10px',
      'padding-left': '10px',
      'padding-right': '10px',
      'padding-bottom': '10px',
      border: '1px solid rgba(0, 0, 0, 1)',
      'background-color': 'rgba(255, 255, 255, 1)',
    },

    grid: {
      // 'align-items': 'baseline',
      display: 'grid',
      'grid-gap': '10px',
      'padding-top': '10px',
      'padding-left': '10px',
      'padding-right': '10px',
      'padding-bottom': '10px',
      border: '1px solid rgba(0, 0, 0, 1)',
      'background-color': 'rgba(255, 255, 255, 1)',
      // 'grid-template-rows': 'repeat(auto-fill, 100px)',
      'grid-template-columns': 'repeat(auto-fill, minmax(min(100px, 100%), 1fr))',
    },

    button: {
      'font-family': 'inherit',
      'background-color': '#ff9600',
      color: '#eeeeee',
      'font-size': '14px',
      'font-weight': '500',
      'border-radius': '8px',
      'padding-top': '7.5px',
      'padding-left': '15px',
      'padding-right': '15px',
      'padding-bottom': '7.5px',
      border: '1px solid transparent',
      transition: 'border-color 0.25s',
    },
  })

  return {
    subscribe,
  }
})()
