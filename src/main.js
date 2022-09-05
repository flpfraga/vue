import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuelidate from 'vuelidate'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faShoppingCart,
    faExclamationCircle,
    faSearch,
    faTrash,
    faStar,
    faAngleDown,
    faHeart,
    faHeartCircleCheck


} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart,
    faExclamationCircle,
    faSearch,
    faTrash,
    faStar,
    faAngleDown,
    faHeart,
    faHeartCircleCheck
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false
app.use(Vuelidate)
app.use(router)
app.use(store)
app.mount('#app')
