<template>
  <div>
       <h3 class="title">安全设置</h3>
       <el-row  class="main">
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
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" ></el-input>
          </el-col>
           <el-button type="primary" @click="search()" style="float: left;margin-left:20px;">搜索</el-button>
       </el-row>
        <el-table :data="userData" style="100%" border class="mt20">
        <el-table-column label="手机号" prop="phone"  align="center"></el-table-column>
        <el-table-column label="头像"  align="center">
            <template slot-scope="scope">
                    <img :src="scope.row.userhead" width="45" height="45" class="head_img"/>
            </template>
        </el-table-column>
        <el-table-column label="昵称" prop="nickname"  align="center"></el-table-column>
        <el-table-column label="登录密码"   align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="danger"
              @click="uploginpw(scope.row)">点击重置</el-button>
           </template>
        </el-table-column>
        <el-table-column label="支付密码"  align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="danger" 
              @click="uppaypw(scope.row)">点击重置</el-button>
           </template>
        </el-table-column>
       
        </el-table>
        <el-pagination class="mt20" @size-change="handleSizeChange"    @current-change="handleCurrentChange" :page-sizes="[10,20, 50, 100]" :page-size="20"
        layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
   </div>

</template>
<script>
export default {
  data() {
    return {
      value:"",
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
     
     userData:[
        {
         phone:'15827322372',
         userhead:'http://wx.qlogo.cn/mmopen/Q3auHgzwzM4UewV7dDKwbjoMIK0LrORiaZ2Yd5v8s6ibTkIrWVR5ZQsHYFvSLW6tIKjggUhW6BUAsiaIAjcXkVRIBlKed4RSQ7nPwhjic3jxzhc/0',
         nickname:'userData',
        },
        {
         phone:'15827232237',
          userhead:'http://wx.qlogo.cn/mmopen/Q3auHgzwzM4UewV7dDKwbjoMIK0LrORiaZ2Yd5v8s6ibTkIrWVR5ZQsHYFvSLW6tIKjggUhW6BUAsiaIAjcXkVRIBlKed4RSQ7nPwhjic3jxzhc/0',
         nickname:'JACK',
        },
       
     ],
    
    };
      
  },
  methods: {
    search(){
      if(!this.keyword){return}
      console.log(this.keyword);
    },
     handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
     uploginpw(row) {
       const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '是否重置手机号'),
            h('span', { style: 'color: red' }, row.phone),
            h('span', null, '用户的登录密码?'),
            h('div', { style: 'color: #999' }, '（重置后用户新密码默认为身份证后六位！）')
          ],),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
     
       },
    uppaypw(row) {
       const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '是否重置手机号'),
            h('span', { style: 'color: red' }, row.phone),
            h('span', null, '用户的支付密码?'),
            h('div', { style: 'color: #999' }, '（重置后用户新密码默认为身份证后六位！）')
          ],),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
     
       }
  
  },
  
};
</script>
<style>


.head_img{
  vertical-align: middle;
}
.el-pagination{
  margin: 20px 0;
}
</style>