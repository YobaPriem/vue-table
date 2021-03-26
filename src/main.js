import { createApp } from 'vue'
import App from './App.vue'
import request from './api/request.js'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
    .mixin({
        created() {
            this.request = request
        }
    })
    .mount('#app')
