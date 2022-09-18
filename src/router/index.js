import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import MonitoringUnit from '../views/AllUnit.vue';
import Weather from '../views/Weather.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Dashboard | SS6 Development'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About Page | SS6 Development'
    }
  },
  {
    path: '/operation-monitoring-unit',
    name: 'monitoringunit',
    component: MonitoringUnit,
    meta: {
      title: 'Operation - Monitoring Unit | SS6 Development'
    }
  },
  {
    path: '/weather',
    name: 'weather',
    component: Weather,
    meta: {
      title: 'Weather | SS6 Development'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'SS6 Development'
  next();
})

export default router
