import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "./assets/main.css";

// Append naive ui style at the end of the head
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

var app = createApp(App);

app.use(router);

app.mount('#app')
