import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "./assets/main.css";
import PocketBase from 'pocketbase';

const client = new PocketBase('https://pocketbase.xandervos.dev');

// Append naive ui style at the end of the head
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

var app = createApp(App);

app.config.globalProperties.pocketbase = client;
app.config.globalProperties.loggedIn = false;

app.use(router);

client.authStore.loadFromCookie(document.cookie);

console.log(client.authStore);

app.mount('#app')
