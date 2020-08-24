import Vue from 'vue'
import Moment from 'moment'

// 自定义过滤器

Vue.filter('date-format', function (value) {
  return Moment(value).format('YYYY-MM-DD HH:mm:ss')
})
