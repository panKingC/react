<template>
  <div>
    <h3 class="title">返款</h3>
    <el-row>
        <el-radio v-model="radio" label="1">全部</el-radio>
        <el-radio v-model="radio" label="2">待返款</el-radio>
        <el-radio v-model="radio" label="3">已返款</el-radio>
    </el-row>
   
    <el-table :data="productData" style="100%" border class="mt20">
        <el-table-column label="免单商品名称" prop="proname"  align="center"></el-table-column>
        <el-table-column label="免单商品图"  align="center">
            <template slot-scope="scope">
                    <img :src="scope.row.proimg" width="60" height="60" class="head_img"/>
            </template>
        </el-table-column>
        <el-table-column label="应付金额" prop="payprice"  align="center"></el-table-column>
        <el-table-column label="收货信息"  align="center">
           <template slot-scope="scope">
             <p style="color:#333;">{{scope.row.receiptName}}</p>
             <p>{{scope.row.receiptPhone}}</p>
             <p style="font-size:12px;line-height:18px;">{{scope.row.data}}</p>
           </template>
        </el-table-column>
        <el-table-column label="用户名" prop="username"  align="center"></el-table-column>
        <el-table-column label="抢免单期数" prop="periods"  align="center">
          <template slot-scope="scope">
             <p>第{{scope.row.periods}}期</p>
          </template>
        </el-table-column>
         <el-table-column label="抢免单时间" prop="time"  align="center" sortable></el-table-column>
        <el-table-column label="状态"  align="center">
            <template slot-scope="scope">
              <el-tag type="danger" size="small" v-if="scope.row.status==0">待返款</el-tag>
              <el-tag type="success" size="small" v-else-if="scope.row.status==1">已返款</el-tag>
             
            </template>
        </el-table-column>              
        <el-table-column label="返款操作"   align="center">
           <template slot-scope="scope">
             <div  v-if="scope.row.status==0">
              <el-button  size="mini" type="danger" style="margin:0 auto; margin-bottom:8px;"
              @click="automatic(scope.row)">自动返款</el-button>
               <el-button  size="mini" type="danger"  style="margin:0 auto;"
              @click="Manual(scope.row)">手动返款</el-button>
             </div> 
             <div v-else-if="scope.row.status==1">
              <el-button  size="mini" type="success" style="margin:0 auto;"
              @click="readRefunds(scope.row,scope.$index)">返款信息浏览</el-button>
              
             </div> 
           </template>
        </el-table-column>
    </el-table>
    <el-pagination class="mt20" @size-change="handleSizeChange"    @current-change="handleCurrentChange" :page-sizes="[10,20, 50, 100]" :page-size="20"
    layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
     <!-- 手动返款 -->
    <el-dialog title="手动返款" :visible.sync="dialogManual" width="40%">
        <el-form :model="form">
          
            <el-form-item label="操作人" :label-width="formLabelWidth">
              <el-input v-model="form.user" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="转账截图" :label-width="formLabelWidth">
              <el-upload   action="https://jsonplaceholder.typicode.com/posts/"  :limit='3'   list-type="picture-card"    :on-preview="handlePictureCardPreview"   :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>    
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogManual = false">取 消</el-button>
        <el-button type="primary" @click="dialogManual = false">确 定</el-button>
      </div>
    </el-dialog>  
     <!-- 返款信息浏览弹窗 -->
    <el-dialog title="返款信息浏览" :visible.sync="dialogexpense" width="40%">
      <template>
        <p style="margin-bottom:10px;">用户手机号：<span style="color:#f56c6c">{{phone}}</span></p>
        <el-table :data="tableexpense" border style="width:90%; margin-left:5%;margin-bottom:20px">
          <el-table-column prop="transaction" label="流水号"  align="center"></el-table-column>
          <el-table-column prop="account" label="收发账号"  align="center"></el-table-column>
          <el-table-column prop="time" label="转账时间" width="150"  align="center"></el-table-column>
          <el-table-column  prop="money"   label="金额"   align="center"></el-table-column>
          <el-table-column  prop="type"   label="转账方式"  align="center" > </el-table-column>
         </el-table>
      </template>
    </el-dialog>   
   </div>

</template>
<script>
export default {
  data() {
    return {
      value:"",
      radio: '1',
      phone:'15817382831',
      formLabelWidth:'120px',
      dialogImageUrl: '',
      dialogVisible: false,
      dialogManual:false,
      dialogexpense:false,
      form:{
        user:'',
      },
     tableexpense:[{
       transaction:'335465769909800',
       account:'16726327212',
       time:'2018.04.20 18：36',
       money:'￥300',
       type:'支付宝'
     }],
     
     productData:[
        {
         proname:'联想笔记本电脑黑色8G抢免单',
         proimg:'http://wx.qlogo.cn/mmopen/Q3auHgzwzM4UewV7dDKwbjoMIK0LrORiaZ2Yd5v8s6ibTkIrWVR5ZQsHYFvSLW6tIKjggUhW6BUAsiaIAjcXkVRIBlKed4RSQ7nPwhjic3jxzhc/0',
         payprice:'￥5000',
         receiptName:'jack',
         receiptPhone:'15726372312',
         username:'15726372312',
         periods:'10',
         data:'广东省深圳市罗湖区田贝工业区4栋4楼佳峰集团',
         time:'2018.04.20',
         status:'1',
        },
        {
         proname:'联想笔记本电脑黑色8G抢免单',
         proimg:'http://wx.qlogo.cn/mmopen/Q3auHgzwzM4UewV7dDKwbjoMIK0LrORiaZ2Yd5v8s6ibTkIrWVR5ZQsHYFvSLW6tIKjggUhW6BUAsiaIAjcXkVRIBlKed4RSQ7nPwhjic3jxzhc/0',
         payprice:'￥5000',
         receiptName:'jack',
         receiptPhone:'15726372312',
         username:'15726372312',
         periods:'10',
         data:'广东省深圳市罗湖区田贝工业区4栋4楼佳峰集团',
         time:'2018.04.19',
         status:'0',
        },
       
     ],
    
    };
      
  },
  methods: {
    search(){
      if(!this.keyword){return}
      console.log(this.keyword);
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
     handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    readRefunds(row,$index){
      this.dialogexpense=true;
    },
    Manual(row){
     this.dialogManual=true;
    },
     automatic(row) {
       const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', {style:'color:#333;font-size:16px;'}, '返款成功/失败！'),
            
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
    
  
  },
  
};
</script>
</script>