import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
import { Button, Switch, Form, FormItem, Input, Icon } from 'element-ui'
Vue.use(Button)
Vue.use(Switch)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
