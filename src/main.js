import Vue from "vue";
import {
  Button,
  Select,
  Container,
  Aside,
  Main,
  Header,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Option,
  Switch,
  DatePicker,
  Dialog,
} from "element-ui";
import App from "./App.vue";

import router from "./router";

import store from "./store"

import http from "axios"

Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Option);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.config.productionTip = false;

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
