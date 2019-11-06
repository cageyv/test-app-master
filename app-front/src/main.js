import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Element UI
-------------------------- */
import {
  Menu,
  MenuItem,
  Input,
  Button,
  Table,
  TableColumn,
  Form,
  FormItem,
  Card,
  Container,
  Aside,
  Main,
  Loading,
  Message
} from 'element-ui'

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Card)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
