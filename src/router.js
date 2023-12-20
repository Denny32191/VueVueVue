import { createRouter, createWebHistory } from 'vue-router';
import ListForm from './components/ListForm.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterField from './components/RegisterField.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LoginPage
  },
  {
    path: '/list-form',
    name: 'ListForm',
    component: ListForm
  },
  {
    path: '/register-field',
    name: 'RegisterField',
    component: RegisterField
  }
];

const router = createRouter({
  history: createWebHistory('/Regvue/'),
  routes
});

export default router;


