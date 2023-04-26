import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AddTicket from './components/AddTicket.vue'
import TicketCard from './components/TicketCard.vue'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.component('TicketCard', TicketCard)
app.component('AddTicket', AddTicket)

app.mount('#app')
