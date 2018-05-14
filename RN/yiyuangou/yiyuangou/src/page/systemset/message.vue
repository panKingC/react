<template>
  <div>
    <h3 class="title">消息管理</h3>
    <el-form :model="form">
        <el-form-item label="选择用户"  :label-width="formLabelWidth">
          <el-select class="filter-item" filterable multiple v-model="form.user" value-key="t_id" placeholder="请选择用户" style="width:100%;">
             <el-option v-for="item in option" :key="item.t_id" :label="item.t_realname" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主题" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="" :label-width="formLabelWidth">
          <el-button type="primary" @click="onSubmit">发送</el-button>
         </el-form-item>
    </el-form>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:"",
      option: [
        {
          value: "选项1",
          label: "手机号"
        },
        {
          value: "选项2",
          label: "昵称"
        },
       
      ],
       formLabelWidth: '120px',
       form:{
          user:'',
          title:'',
           desc: '',
       },
    };
      
  },
  methods: {
    search(){
      if(!this.keyword){return}
      console.log(this.keyword);
    },
    onSubmit() {
        console.log('submit!');
      }
     
  
  },
  
};
</script>