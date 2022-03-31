import SlideVerify from './SlideVerify.vue'

const plugins = {
  install (Vue) {
    Vue.component(SlideVerify.name, SlideVerify)
  }
}

if (typeof window !== typeof undefined && window.vue) {
  window.Vue.use(SlideVerify)
}

export default plugins