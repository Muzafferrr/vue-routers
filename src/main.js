import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";

import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";

const routes = [
    {
        path: "/componentA/:id",
        name: "ComponentA",
        component: ComponentA,
    },
    {
        path: "/componentB-*",
        name: "ComponentB",
        component: ComponentB,
    },
];
const router = createRouter({
    history: createWebHistory(),
    mode:history,
    routes,
});
createApp(App).use(router).mount('#app')
