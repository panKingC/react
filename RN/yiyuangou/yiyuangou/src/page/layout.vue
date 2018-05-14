<style scoped>
  *{
    padding:0;
    margin:0;
  }
  .el-header, .el-footer {
    background-color: #324157;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: left;
    padding: 20px 30px;
  }

  body > .el-container {
    height:100%;
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-aside[data-v-f51a6afe]{
      text-align:left;
  }
</style>
<template>
  <div style="height:100%;">
      <el-header> <topbar/></el-header>
      <el-container style="height:calc(100vh - 60px);">
        <el-aside width="200px"> <leftslider/></el-aside>
        <el-main> <router-view></router-view></el-main>
      </el-container>
  </div>
</template>

<script>
import topbar from '@/components/topBar'
import leftslider from '@/components/leftslider'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    topbar,
    leftslider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->



