<template>
  <div>
    <h3 class="title">系统日志</h3>
    <el-row class="main">
        <el-col :span="4">
            <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      <el-col :span="5" style="padding-left:20px;">
        <el-input placeholder="请输入内容"  prefix-icon="el-icon-search" ></el-input>
      </el-col>
        <el-button type="primary" @click="search()" style="float: left;margin-left:20px;">搜索</el-button>
    </el-row>
    <el-row>
      <template>
        <el-table
          :data="systemLog" style="width: 90%;margin-top:30px">
          <el-table-column
            prop="username"
            label="用户名">
          </el-table-column>
          <el-table-column
            prop="type"
            label="操作内容">
          </el-table-column>
         <el-table-column
            prop="time"
            label="操作时间">
          </el-table-column>
          <el-table-column prop="remark"
            label="备注">
          </el-table-column>
           <el-table-column></el-table-column>
        </el-table>
      </template>
    </el-row>  
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value:'',
        options: [
        {
          value: "选项1",
          label: "手机号"
        },
        {
          value: "选项2",
          label: "昵称"
        },
       
      ],
        systemLog: [{
          username: 'admin',
          type: '登录',
          time:'2018.04.20 18：36',
          remark: '登录成功',
        
          }, {
          username: 'admin',
          type: '登录',
          time:'2018.04.21 18：36',
          remark: '登录失败',
        },
        ],
      }
    },
   
    methods: {
     
    
     
      
    }
    
  }
  
</script>