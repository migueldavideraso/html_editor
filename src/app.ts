import './app.css'
import App from './App.svelte'

export function createHTMLEditor(target: Element | ShadowRoot) {
  new App({
    target,
  })
}
