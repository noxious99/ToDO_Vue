import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue"
import About from "./components/About.vue";
import FAQ from "./components/FAQ.vue";
const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/about",
        name: 'About',
        component: About
    }
    ,
    {
        path: "/about",
        name: 'About',
        component: About
    },
    {
        path: "/faq",
        name: 'FAQ',
        component: FAQ
    }
]

const Router = createRouter({
    history: createWebHistory(),
        routes
})

export default Router