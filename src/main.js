import Vue from 'vue'
import App from './App.vue'
import { Button,Link,Card } from 'element-ui';

Vue.use(Button)
Vue.use(Link)
Vue.use(Card)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
