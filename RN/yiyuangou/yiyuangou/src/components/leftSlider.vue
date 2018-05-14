<template>
    <div id="sidebar-wrap">
        <el-menu background-color="#324157" text-color="#ddd" :default-active="$route.path" :unique-opened="isUnique" :router="isRouter" mode="vertical">
            <template v-for="item in menu">
                <el-submenu v-if="item.children.length !== 0" :index="item.router" :key="item.router">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.router" :key="child.router">
                        <i :class="child.icon"></i>
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>

                <el-menu-item v-else :index="item.router" :key="item.router">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>

            </template>
        </el-menu>
    </div>
</template>
<script>
export default {
  name: "leftslider",
  data() {
    return {
      isUnique: true,
      isRouter: true,
      menu: [
        {
          name: '商品管理',
          router: '/classification',
          icon: 'el-icon-menu',
          children: [
            {
              name: '分类设置',
              router: '/classification',
              icon: 'el-icon-view'
            },
             {
              name: '基础信息维护',
              router: '/information',
              icon: 'el-icon-view'
            }
          ]
        }, {
          name: '全额购',
          router: '/product',
          icon: 'el-icon-menu',
          children: [
             {
              name: '商城货品管理',
              router: '/product',
              icon: 'el-icon-view'
            },
             {
              name: '交易记录',
              router: '/transaction',
              icon: 'el-icon-view'
            }
          ]
        },
        {
          name: '积分抢购',
          router: '/activity',
          icon: 'el-icon-menu',
          children: [
            {
              name: '活动设置',
              router: '/activity',
              icon: 'el-icon-view'
            },
            {
              name: '当前活动',
              router: '/nowactivity',
              icon: 'el-icon-view'
            },
            {
              name: '中奖方案管理',
              router: '/programme',
              icon: 'el-icon-view'
            },
            {
              name: '往期活动',
              router: '/oldactivity',
              icon: 'el-icon-view'
            },
            {
              name: '中奖记录',
              router: '/record',
              icon: 'el-icon-view'
            }
          ]
        }, 
        {
          name: '抢免单',
          router: '/setexemption',
          icon: 'el-icon-menu',
          children: [
            {
              name: '活动设置',
              router: '/setexemption',
              icon: 'el-icon-view'
            },
            {
              name: '当前活动',
              router: '/nowexemption',
              icon: 'el-icon-view'
            },
             {
              name: '中奖方案管理',
              router: '/exemptionprogramme',
              icon: 'el-icon-view'
            },
            {
              name: '往期活动',
              router: '/oldexemption',
              icon: 'el-icon-view'
            }
          ]
        },
        {
          name: '订单中心',
          router: '/ordermana',
          icon: 'el-icon-menu',
          children: [
            {
              name: '订单管理',
              router: '/ordermana',
              icon: 'el-icon-view'
            },
            {
              name: '发货管理',
              router: '/goodsmana',
              icon: 'el-icon-view'
            }]
        },
        {
          name: '用户中心',
          router: '/messagesave',
          icon: 'el-icon-menu',
          children: [
            {
              name: '信息维护',
              router: '/messagesave',
              icon: 'el-icon-view'
            },
            // {
            //   name: '礼券设置',
            //   router: '/giftcode',
            //   icon: 'el-icon-view'
            // },
             {
              name: '安全设置',
              router: '/security',
              icon: 'el-icon-view'
            }
          ]
        },
         {
          name: '系统管理',
          router: '/message',
          icon: 'el-icon-menu',
          children: [
            {
              name: '信息管理',
              router: '/message',
              icon: 'el-icon-view'
            },
            {
              name: '新手指南',
              router: '/newbie',
              icon: 'el-icon-view'
            },
             {
              name: '帮助中心',
              router: '/help',
              icon: 'el-icon-view'
            },
             {
              name: '规则介绍',
              router: '/regular',
              icon: 'el-icon-view'
            },
             {
              name: '系统日志',
              router: '/systemlog',
              icon: 'el-icon-view'
            },
             {
              name: '中奖算法方案',
              router: '/algorithm',
              icon: 'el-icon-view'
            }
           ]
        },
        {
           name: '财务及报表',
          router: '/dayshop',
          icon: 'el-icon-menu',
          children: [
            {
              name: '日销售额',
              router: '/dayshop',
              icon: 'el-icon-view'
            },
            {
              name: '返款',
              router: '/refunds',
              icon: 'el-icon-view'
            }
          ]  
        }
      ]
    };
  },
  computed: {
    // toggSliderBar() {
    //   return this.$store.state.common.isCollapse;
    // }
  },
  methods:{

  }
}
</script>
<style scoped>
#sidebar-wrap {
  height: 100%;
  background: #324157;
  transition: all 0.3s;
  overflow: hidden;
}

/*  动态改变左侧导航包裹层宽度 */
#sidebar-wrap.collapsed {
  width: 64px;
  transition: all 0.3s;
}
/* 美化左侧导航的留白 */
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 160px;
  padding-left: 30px !important;
}
</style>
