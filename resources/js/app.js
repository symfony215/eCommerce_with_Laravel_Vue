

require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform';

import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '3px'
})

const routes = [
  { path: '/admin/home', component: require('./components/admin/Dashboard.vue').default },
  { path: '/admin/profile', component: require('./components/admin/Profile.vue').default },
  { path: '/admin/Product', component: require('./components/admin/product/Products.vue').default },
  { path: '/admin/product/create', component: require('./components/admin/product/Create.vue').default },
  { path: '/', component: require('./components/user/Home.vue').default },
  { path: '/invoice', component: require('./components/user/Invoice.vue').default },
  { path: '/cart', component: require('./components/user/Cart.vue').default },
  { path: '/checkout', component: require('./components/user/Checkout.vue').default },
  { path: '/product', component: require('./components/user/ProductList.vue').default },
  { path: '/singleProduct', component: require('./components/user/SinglePage.vue').default },
]
// let Footer = require('./components/user/Footer.vue').default;
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

window.Fire = new Vue();

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    router,
});
