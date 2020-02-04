import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import NewEmployeeForm from "./views/NewEmployeeForm";

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
            name: 'employee',
            component: NewEmployeeForm
        }
    ]
});
