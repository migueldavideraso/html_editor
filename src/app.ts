import './app.css'
import App from './App.svelte'


export function createHTMLEditor (target: Document | Element | ShadowRoot) {

  new App({
    target,
  })
}



