import { createRouter, createWebHistory } from 'vue-router'

import TheHome from '../views/TheHome'
import TheSearch from '../views/TheSearch'
import TheCheckout from '../views/TheCheckout'
import TheFavourites from '../views/TheFavourites'
import TheFinalizer from '../views/TheFinalizer'
import TheNotFound from '../views/TheNotFound'

const routes = [
    {
        path: '/',
        name: 'home',
        component: TheHome
    },
    {
        path: '/search/:searchText',
        name: 'search',
        component: TheSearch
    },
    {
        path: '/checkout/',
        name: 'checkout',
        component: TheCheckout
    },
    {
        path: '/favourites/',
        name: 'favourites',
        component: TheFavourites
    },
    {
        path: '/finalizer/',
        name: 'finalizer',
        component: TheFinalizer
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: TheNotFound
    },

]

 const router = createRouter({
    history: createWebHistory(),
    routes
 })

 export default router;