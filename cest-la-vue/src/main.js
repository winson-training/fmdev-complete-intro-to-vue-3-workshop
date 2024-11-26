import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomePage from '@/views/HomePage.vue'
// import UserPage from '@/views/UserPage.vue'
// import LoginPage from  '@/views/LoginPage.vue'

const app = createApp(App)
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/user',
            name: 'User',
            component: () => import('@/views/UserPage.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/LoginPage.vue')
        },
        {
            path: '/user/:name',
            component: () => import('@/views/UserProfilePage.vue')
        }
        // {
        //     path: '/contact',
        //     name: 'Contact',
        //     component: () => import('./components/Contact.vue')
        // },
        // {
        //     path: '/projects',
        //     name: 'Projects',
        //     component: () => import('./components/Projects.vue')
        // },
        // {
        //     path: '/blog',
        //     name: 'Blog',
        //     component: () => import('./components/Blog.vue')
        // },
        // {
        //     path: '/blog/:id',
        //     name: 'BlogPost',
        //     component: () => import('./components/BlogPost.vue')
        // },
        // {
        //     path: '/:pathMatch(.*)*',
        //     name: 'NotFound',
        //     component: () => import('./components/NotFound.vue')
        // }
    ]
})

app.use(router)
app.mount('#app')