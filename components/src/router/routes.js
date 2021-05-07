
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/ajax-bar', component: () => import('pages/QAjaxBarPage.vue') },
      { path: '/avatar', component: () => import('pages/QAvatarPage.vue') },
      { path: '/badge', component: () => import('pages/QBadgePage.vue') },
      { path: '/banner', component: () => import('pages/QBannerPage.vue') },
      { path: '/bar', component: () => import('pages/QBarPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
