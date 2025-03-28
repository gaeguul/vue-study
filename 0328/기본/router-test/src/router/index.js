import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/members',
      component: Members,
    },
    {
      path: '/members/:id',
      component: MemberInfo,
    },
    {
      path: '/videos',
      component: Videos,
    },
  ],
});

export default router;
