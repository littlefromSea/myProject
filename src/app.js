/* 引入vue和主页 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false;

/* 实例化一个vue */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')