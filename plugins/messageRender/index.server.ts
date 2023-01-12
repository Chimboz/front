import { JSDOM } from 'jsdom'
import messageRender from './messageRender'

const { window } = new JSDOM('')

export default defineNuxtPlugin(() => {
  return {
    provide: {
      messageRender: messageRender(window)
    }
  }
})
