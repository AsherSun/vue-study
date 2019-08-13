import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/communication',
      name: 'communication',
      component: () => import(/* webpackChunkName: "communication" */ './views/Communication.vue'),
      children: [
        {
          path: 'parent_to_child',
          name: 'parent_to_child',
          component: () => import(/* webpackChunkName: "parent_to_child" */ './vue-component-study/communication/parent-to-child/Index.vue'),
          children: [
            {
              path: 'props',
              name: 'props',
              component: () => import('./vue-component-study/communication/parent-to-child/props/Parent.vue')
            },
            {
              path: 'refs',
              name: 'refs',
              component: () => import('./vue-component-study/communication/parent-to-child/refs/Parent.vue')
            },
            {
              path: 'children',
              name: 'children',
              component: () => import('./vue-component-study/communication/parent-to-child/children/Parent.vue')
            },
          ]
        },
        {
          path: 'child_to_parent',
          name: 'child_to_parent',
          component: () => import(/* webpackChunkName: "child_to_parent" */ './vue-component-study/communication/child-to-parent/Index.vue'),
          children: [
            {
              path: 'event',
              name: 'event',
              component: () => import('./vue-component-study/communication/child-to-parent/event/Parent.vue')
            },
            {
              path: 'parent',
              name: 'parent',
              component: () => import('./vue-component-study/communication/child-to-parent/parent/Parent.vue')
            }
          ],
        }
      ]
    }
  ]
})
