/**
 * 路由器对象
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/shop/shop.vue'
import ShopGoods from '../pages/shop/shopGoods/shopGoods.vue'
import ShopRatings from '../pages/shop/shopRatings/shopRatings.vue'
import ShopInfo from '../pages/shop/shopInfo/shopInfo.vue'
// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
