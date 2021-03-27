import Country from "./views/Country"
import CountryDetail from "./views/CountryDetail"

import Vue from "vue"

Vue.use(Router)
export default new Router ({
mode: 'history',
routes: [

    {
        path: '/',
        name: 'contry',
        component: Country
    },
    {
        path: '/:id/detail',
        name: 'detail',
        component: CountryDetail
    },

]

})