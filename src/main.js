import Vue from 'vue'
import { Button, Select,Container,Aside,Main,Header,Menu,Submenu,MenuItem,MenuItemGroup } from 'element-ui';
import App from './App.vue'

import router from './router'

Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
