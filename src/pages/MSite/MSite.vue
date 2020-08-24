<template>
   <section class="msite">
        <HeaderTop :title="address.name">
          <router-link class="header_seach" slot="left" to="/search">
            <i class="iconfont iconicon_search"></i>
          </router-link>
          <router-link class="header_login" slot="right" to="userInfo._id ? '/userInfo': '/login'">
            <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
            <span class="header_login_text" v-else><i class="iconfont iconicon-person"></i></span>
          </router-link>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categorysArr.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide"  v-for="(categorys,index) in categorysArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="back" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
        </div>
        <shopList></shopList>
      </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  mounted () {
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
  },

  watch: {
    categorys (value) {
      this.$nextTick(() => { // 一旦完成界面更新，立即调用
        // 创建一个swiper实例对象，来实现轮播
        new Swiper('.swiper-container', {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },

  computed: {
    ...mapState(['address', 'categorys', 'userInfo']),
    // 根据categorys一维数组生成一个二维数组
    categorysArr () {
      const {categorys} = this
      // 定义一个空的二维数组
      const arr = []
      // 准备一个小的数组
      let minArr = []
      // 遍历categorys
      categorys.forEach(c => {
        // 如果小数组内数据达到8个，则创建一个新的小数组
        if (minArr.length === 8) {
          minArr = []
        }
        // 如果小数组内没有数据，就将小数组存入到arr里
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        // 将从categorys遍历到的数据存入到小数组中
        minArr.push(c)
      })
      // 返回arr数组
      return arr
    }
  },

  components: {
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .iconicon_search
    display inline-block
    font-size 30px
    padding 7.5px 0 0 10px
    color $bc
  .msite  // 首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
