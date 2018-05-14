<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
}
html{
  height:100%;
}
body{
  height:100%;
}
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.title{
    line-height:80px;
    text-align:left;
    font-size:20px;
}
.mt20 {
    margin-top: 20px;
}
.close{
  float: right;
  color:#999;
  font-size:25px;
  padding:0;
}
.el-menu{
  border-right:none;
}
.box-card{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 450px;
  overflow-y: auto;
  transform: translate(-50%, -50%);
}
.main .el-select {
  width: 100%;
}
</style>
