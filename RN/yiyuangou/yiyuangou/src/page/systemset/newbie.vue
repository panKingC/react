<template>
  <div>
    <h3 class="title">新手指南</h3>
    <el-form :model="form">
       <el-form-item label="页面链接" :label-width="formLabelWidth">
          <el-input v-model="form.link" auto-complete="off" style="width:400px;margin-right:10px"></el-input>
          <el-button type="info" plain @click="dialogVisible = true">预览</el-button>
        </el-form-item>
         <el-form-item label="" :label-width="formLabelWidth">
             <el-button type="primary" @click="onSubmit">保存</el-button>
         </el-form-item>
    </el-form>

    <!-- 预览内容弹窗 -->
     <el-dialog title="页面预览" :visible.sync="dialogVisible">
        <div class="content" style="height:300px;border:solid 1px #ededed;padding:10px;">展示内容</div>
        <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
     </el-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      value:"",
      
       formLabelWidth: '120px',
       form:{
          user:'',
          title:'',
           desc: '',
       },
       dialogVisible:false,
    };
      
  },
  methods: {
    search(){
      if(!this.keyword){return}
      console.log(this.keyword);
    },
    onSubmit() {
        console.log('submit!');
      },
     preview(){
        dialogVisible=true;
     },
     onSubmit() {
        console.log('submit!');
      },
  },
  
};
</script>