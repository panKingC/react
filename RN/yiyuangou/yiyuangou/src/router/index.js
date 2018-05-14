import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import classification from '@/page/shop/classification'
import information from '@/page/shop/information'
import product from '@/page/fullpurchase/product'
import transaction from '@/page/fullpurchase/transaction'

import activity from '@/page/integralbuy/activity'
import nowactivity from '@/page/integralbuy/nowactivity'
import programme from '@/page/integralbuy/programme'
import oldactivity from '@/page/integralbuy/oldactivity'
import record from '@/page/integralbuy/record'

import setexemption from '@/page/sexemption/setexemption'
import nowexemption from '@/page/sexemption/nowexemption'
import exemptionprogramme from '@/page/sexemption/exemptionprogramme'
import oldexemption from '@/page/sexemption/oldexemption'


import dayshop from '@/page/financial/dayshop'
import refunds from '@/page/financial/refunds'
import goodsmana from '@/page/order/goodsmana'
import ordermana from '@/page/order/ordermana'
import algorithm from '@/page/systemset/algorithm'
import help from '@/page/systemset/help'
import message from '@/page/systemset/message'
import newbie from '@/page/systemset/newbie'
import regular from '@/page/systemset/regular'
import systemlog from '@/page/systemset/systemlog'
import giftcode from '@/page/user/giftcode'
import messagesave from '@/page/user/messagesave'
import security from '@/page/user/security'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect:"classification",
      children:[
        {
          path: '/classification',
          component: classification,
        },
        {
          path: '/information',
          component: information,
        },
        {
          path: '/product',
          component: product,
        },
        {
          path: '/transaction',
          component: transaction,
        },
        {
          path: '/activity',
          component: activity,
        },
        {
          path: '/nowactivity',
          component: nowactivity,
        },
        {
          path: '/programme',
          component: programme,
        },
        {
          path: '/oldactivity',
          component: oldactivity,
        },
        {
          path: '/record',
          component: record,
        },
        {
          path: '/setexemption',
          component: setexemption,
        },
        {
          path: '/nowexemption',
          component: nowexemption,
        },
        {
          path: '/exemptionprogramme',
          component: exemptionprogramme,
        },
        {
          path: '/oldexemption',
          component: oldexemption,
        },
        {
          path: '/dayshop',
          component: dayshop,
        },
        {
         path:'/refunds',
         component:refunds,
        },
        {
          path:'/goodsmana',
          component:goodsmana,
        },
        {
          path:'/ordermana',
          component:ordermana,
        },
        {
          path:'/algorithm',
          component:algorithm,
        },
        {
          path:'/help',
          component:help,
        },
        {
          path:'/message',
          component:message,
        },
        {
          path:'/newbie',
          component:newbie,
        },
        {
          path:'/regular',
          component:regular,
        },
        {
          path:'/systemlog',
          component:systemlog,
        },
        {
          path:'/giftcode',
          component:giftcode,
        },
        {
          path:'/messagesave',
         component:messagesave,
        },
        {
          path:'/security',
          component:security,
        }
      ]
    }
  ]
})
