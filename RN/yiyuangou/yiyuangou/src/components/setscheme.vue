<style scope>
  .setscheme-box .p-font{
    font-size:14px;
    color: #606266;
    line-height: 40px;
  }
  .setscheme-box .p-float{
    float:left;
    margin-right:10px;
    font-size:14px;
    color: #606266;
    line-height: 40px;
  }
  .setscheme-box .el-table td, .el-table th{
    padding:0!important;
    height:50px;
  }
  .setscheme-box .el-input__inner{
    height:50px;
    border-width:0px!important;
  }
  .setscheme-box .el-table .cell{
     padding:0px !important;
  }
</style>
<template>
  <div class="setscheme-box">
    <el-row style="padding-left:1%;padding-top:10px;width:600px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="中奖几率" for="scheme">
          <el-input  type="textarea"
          :autosize="{ minRows: 3, maxRows: 3}"
          resize=none
          id="scheme"
          style="width:80%;height:50px"
          ref="schemeInput"
          v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="其他设置" for="scheme1">
          <el-input type="textarea"
          id="scheme1"
          style="width:80%"
          :autosize="{ minRows: 10, maxRows: 10}"
          resize=none
          placeholder="请输入设置各种跟中奖几率的参数和条件"
          v-model="form.desc"></el-input>
        </el-form-item>
        <p class="p-font">一定中奖的幸运码</p>
      </el-form>
      </el-row>
      <el-row style="padding-left:1%;padding-top:10px;width:600px">
       <el-col :span="20">
          <template>
          <el-table
            :data="List"
            ref="schemeTable"
            border>
            <el-table-column
              label="幸运码"
              prop="num"
              align="center"
              style="padding:0">
              <template slot-scope="scope">
                <el-input  v-model="List.num" style="padding:0"></el-input>
              </template>
            </el-table-column>
            <el-table-column
            label="手机号"
            prop="tell"
            align="center">
              <template slot-scope="scope">
                <el-input  v-model="List.tell"></el-input>
              </template>
            </el-table-column>
            <el-table-column
            label="昵称"
            prop="nickname"
            align="center">
              <template slot-scope="scope">
                <el-input  v-model="List.nickname"></el-input>
              </template>
          </el-table-column>
        </el-table>
      </template>
     </el-col>
      <el-col :span="3" :offset="1">
        <el-button type="primary" plain @click="addTable">添加幸运码</el-button>
      </el-col>
    </el-row>
     <el-row style="margin-top:30px">
      <p class="p-float">第</p>
      <el-input :autosize="{ minRows: 1, maxRows: 1}" resize=none type="textarea" style="width:50px;float:left;margin-right:10px;height:10px"/>
      <p class="p-float">期开始执行</p>
    </el-row>
    <el-row style="margin:50px 0 0 40%">
      <el-button type="primary" @click="onSubmit">保 存</el-button>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: "setscheme",
    data() {
      return {
        form: {
          name: '',
          desc: '',
        },
        List:[{
          num: '1',
          tell: '2',
          nickname: '3'
        }]
      }
    },
    created(){
      this.$nextTick(function(){
        this.$refs.schemeInput.focus();
      })
    },
    methods: {
      //保存
      onSubmit() {
        console.log('submit!');
      },
      //动态添加table row
      addTable(){
        console.log(123)
        console.log(this.$refs.schemeTable)
        this.$refs.schemeTable.height = "900px";
        let obj = {
            num: '1',
            tell: '2',
            nickname: '3'
        }
        this.form.List.push();

      }


    }

  }

</script>
