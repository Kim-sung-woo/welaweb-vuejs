import Vue from 'vue'
import Router from 'vue-router'

import Intro from '@/views/Intro'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '',
    //   redirect: '/before-login/intro',
    //   pathMatch: 'full',
    // },

    //before-login
    {
      path: 'before-login',
      children: [
        {
          path: '',
          redirect: 'intro'
        },
        {
          label: '웰라 소개',
          path: 'intro',
          name: 'intro',
          component: Intro
        },
      ]
    }
    // { path: '/',
    //   name: 'before-login',
    //   component: SuccessCertification },
    // {
    //   path: 'before-login',
    //
    //   children: [
    //     {
    //       label: '웰라 소개',
    //       name: 'intro',
    //       component: Intro
    //     }
    //   ]
    // }
  ]
})
