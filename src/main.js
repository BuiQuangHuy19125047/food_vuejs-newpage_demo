import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import Vue from 'vue'
import Vuex from "vuex"
import VueRouter from "vue-router"
import Login from "./components/Login.vue"
import MainPage from "./components/MainPage.vue"


Vue.use(VueCompositionAPI)
Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect:{
          name: "mainpage"
      }
    },
    {
      path: "/mainpage",
      name: "mainpage",
      component: MainPage
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      props:{
        title:"Sign In",
        nonState:"New to DoorDash?", 
        changeState:"Sign Up",
        changeTo: "/signup"
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: Login,
      props:{
        title:"Sign Up", 
        nonState:"Already have an account?",
        changeState:"Sign In",
        signup:"true",
        changeTo: "/login"
      }
    }
  ]
})
//If you not install the Vue Composition API, please
//commented out above import and use statement, 
//or proceed to https://www.npmjs.com/package/@vue/composition-api
//to install, but please install to use the Infinity List feature that
//yauangon has just install


Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
