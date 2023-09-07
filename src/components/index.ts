import GlobalLoading from './loading/GlobalLoading.vue'
import { type App, type Component, type ComputedOptions, type MethodOptions } from 'vue'

const allGolbal: {
  [propNmae: string]: Component<any, any, any, ComputedOptions, MethodOptions>
} = {
  GlobalLoading
}

export default {
  install(app: App) {
    Object.keys(allGolbal).forEach((item) => {
      const com: Component<any, any, any, ComputedOptions, MethodOptions> = allGolbal[item]
      app.component(item, com)
    })
  }
}
