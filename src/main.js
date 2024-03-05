// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import DoctorPage from './components/DoctorPage.vue'
import ContactPage from './components/ContactPage.vue'
import DepartmentPage from './components/DepartmentPage.vue'
import AboutPage from './components/AboutPage.vue'
import HomePage from './components/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router= createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/', component:HomePage},
    {path: '/about', component:AboutPage},
    {path: '/department', component:DepartmentPage},
    {path: '/doctor', component:DoctorPage},
    {path: '/contact', component:ContactPage},
  ]
})
const app= createApp(App)
app.use(router)
app.mount('#app')
