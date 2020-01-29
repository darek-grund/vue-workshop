import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import HelloForm from "./views/HelloForm";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/employee',
            redirect: {
                name: 'home'
            },
            component: HelloForm
        }
    ]
});
