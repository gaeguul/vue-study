import ElectronicsPage from '@/pages/ElectronicsPage.vue';
import HomePage from '@/pages/HomePage.vue';
import JeweleryPage from '@/pages/JeweleryPage.vue';
import MensClothingPage from '@/pages/MensClothingPage.vue';
import WomensClothingPage from '@/pages/WomensClothingPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/product/:id',
      name: 'product/id',
      component: () => import('@/pages/ProductDetailPage.vue'),
    },
    {
      path: '/product/write',
      name: 'product/write',
      component: () => import('@/pages/ProductWritePage.vue'),
    },
    {
      path: '/product/edit/:id',
      name: 'product/edit',
      component: () => import('@/pages/ProductEditPage.vue'),
    },
    {
      path: '/electronics',
      name: 'electronics',
      component: ElectronicsPage,
    },
    {
      path: '/jewelery',
      name: 'jewelery',
      component: JeweleryPage,
    },
    {
      path: '/mensclothing',
      name: "men's clothing",
      component: MensClothingPage,
    },
    {
      path: '/womensclothing',
      name: "women's clothing",
      component: WomensClothingPage,
    },
  ],
});

export default router;
