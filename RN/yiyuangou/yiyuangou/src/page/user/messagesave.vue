<template >
  <div>
    <h3 class="title">信息维护</h3>
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
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" ></el-input>
          </el-col>
           <el-button type="primary" @click="search()" style="float: left;margin-left:20px;">搜索</el-button>
       </el-row>
        <el-table :data="messData" style="100%" border class="mt20">
        <el-table-column label="手机号" prop="phone" width="120" align="center" fixed="left"></el-table-column>
        <el-table-column label="头像" prop="userhead"  align="center">
          <template slot-scope="scope">
                    <img :src="scope.row.userhead" width="45" height="45" class="head_img"/>
            </template>
        </el-table-column>
        <el-table-column label="昵称" prop="nickname"  align="center"></el-table-column>
        <el-table-column label="身份信息" prop="identity"  align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="warning" 
              @click="reaDidentity(scope.row)">查看</el-button>
           </template>
        </el-table-column>
        <el-table-column label="地址" prop="data"  align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="warning" 
              @click="readData(scope.row)">查看</el-button>
           </template>
        </el-table-column>
        <el-table-column label="消费明细" prop="expense"  align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="warning" 
              @click="readExpense(scope.row)">查看</el-button>
           </template>
        </el-table-column>
        <el-table-column label="积分明细" prop="integral"  align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="warning" 
              @click="readIntegral(scope.row)">查看</el-button>
           </template>
        </el-table-column>
        <el-table-column label="订单管理（查询）" prop="ordermain"  align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="warning" 
              @click="readOrder(scope.row)">查看</el-button>
           </template>
        </el-table-column>
        <el-table-column label="最后登录时间" prop="lasttime" sortable width="160" align="center"></el-table-column>
        <el-table-column label="分享管理" prop="share"  align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="warning" 
              @click="readShare(scope.$index)">查看</el-button>
           </template>
        </el-table-column>
        <el-table-column label="用户积分" prop="userint"  align="center">
           <template slot-scope="scope">
              <p class="jifen">{{scope.row.userint}}</p>
              <el-button plain size="mini" type="warning"  icon="el-icon-edit"
              @click="readUserint(scope.$index,scope.row)">管理</el-button>
           </template>
        </el-table-column>
         <el-table-column label="用户登录权限" prop="loginpower"  align="center">
           <template slot-scope="scope">
              <el-button :type="scope.row.loginpower=='1'?'success':'danger'" icon="el-icon-sort" size="small" @click="updataloginp(scope.$index)">{{scope.row.loginpower=='1'?'开启':'禁止'}}</el-button>
           </template>
        </el-table-column>
        <el-table-column label="用户交易权限" prop="dealpower"  align="center">
           <template slot-scope="scope">
             <el-button :type="scope.row.dealpower=='1'?'success':'danger'" icon="el-icon-sort" size="small"  @click="updataleal(scope.$index)">{{scope.row.dealpower=='1'?'开启':'禁止'}}</el-button>
           </template>
        </el-table-column>
         <el-table-column label="操作" prop="userint"  align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="danger"
              @click="downline(scope.row)">强制下线</el-button>
           </template>
        </el-table-column>
        </el-table>

         <el-pagination class="mt20" @size-change="handleSizeChange"    @current-change="handleCurrentChange" :page-sizes="[10,20, 50, 100]" :page-size="20"
        layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
     
      <!-- 身份信息弹窗 -->
     <el-dialog title="身份信息" :visible.sync="dialogidentity">
          <el-form :model="form">
             <el-form-item label="手机号码" :label-width="formLabelWidth">
                <div class="el-input__inner">{{form.phone}}</div>
              </el-form-item>
               <el-form-item label="身份证号" :label-width="formLabelWidth">
                <div class="el-input__inner">{{form.number}}</div>
              </el-form-item>
          </el-form>
    </el-dialog>
     <!-- 收货地址弹窗 -->
    <el-dialog title="收货地址" :visible.sync="dialogdata" width="40%">
      <template>
        <el-table :data="tableData" border style="width: 90%;margin-left:5%;margin-bottom:20px">
          <el-table-column prop="num" label=""  align="center"></el-table-column>
          <el-table-column prop="name" label="收件人"  align="center"></el-table-column>
          <el-table-column  prop="phone"   label="联系电话"   align="center"></el-table-column>
          <el-table-column  prop="address"   label="详细地址"  align="center" width="180"> </el-table-column>
          <el-table-column  prop="remark" label="备注" align="center"></el-table-column>
        </el-table>
      </template>
    </el-dialog>
     <!-- 消费明细弹窗 -->
    <el-dialog title="消费明细" :visible.sync="dialogexpense" width="40%">
      <template>
        <p style="margin-bottom:10px;">用户手机号：<span style="color:#f56c6c">{{phone}}</span></p>
        <el-table :data="tableexpense" border style="width: 90%;margin-left:5%;margin-bottom:20px">
          <el-table-column prop="time" label="消费时间"  align="center"></el-table-column>
          <el-table-column prop="type" label="活动类型"  align="center"></el-table-column>
          <el-table-column  prop="pro"   label="商品"   align="center"></el-table-column>
          <el-table-column  prop="num"   label="数量"  align="center" width="80"> </el-table-column>
          <el-table-column  prop="price" label="价格/积分" align="center"></el-table-column>
        </el-table>
      </template>
    </el-dialog>   
     <!-- 积分明细弹窗 -->
    <el-dialog title="积分明细" :visible.sync="dialogintegral" width="40%">
      <template>
        <p style="margin-bottom:10px;">用户手机号：<span style="color:#f56c6c">{{phone}}</span></p>
        <el-table :data="tableintegral" border style="width: 90%;margin-left:5%;margin-bottom:20px">
          <el-table-column prop="time" label="时间"  align="center"></el-table-column>
          <el-table-column prop="type" label="操作"  align="center"></el-table-column>
          <el-table-column  prop="pro"   label="商品"   align="center"></el-table-column>
          <el-table-column  prop="num"   label="数量"  align="center" width="80"> </el-table-column>
          <el-table-column  prop="integral" label="积分增减" align="center"></el-table-column>
          <el-table-column  prop="total" label="积分增减" align="center"></el-table-column>
        </el-table>
      </template>
    </el-dialog>   
      <!-- 分享弹窗 -->
    <el-dialog title="分享管理" :visible.sync="dialogshare" width="40%">
        <el-form :model="form">
          <el-form-item label="二维码" :label-width="formLabelWidth" >
              <img :src="form.mode" width="110" height="110" style="border:solid 1px #e9e9e9;padding:5px;"/>
            </el-form-item>
            <el-form-item label="分享文字" :label-width="formLabelWidth">
              <el-input v-model="form.represent" auto-complete="off"></el-input>
            </el-form-item>
           
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogshare = false">取 消</el-button>
        <el-button type="primary" @click="dialogshare = false">确 定</el-button>
      </div>
    </el-dialog>  
     <!-- 用户积分弹窗 -->
    <el-dialog title="积分管理" :visible.sync="dialoguserint" width="40%">
      <el-form :model="form">
         <el-form-item label="手机号" :label-width="formLabelWidth"><span style="color:#f56c6c">{{form.phone}}</span></el-form-item>
        <el-form-item label="当前积分" :label-width="formLabelWidth">
          <el-input v-model="form.jifen" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
       <div slot="footer" class="dialog-footer">
        <el-button @click="dialoguserint = false">取 消</el-button>
        <el-button type="primary" @click="dialoguserint = false">确 定</el-button>
      </div>
    </el-dialog>    
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:"",
      phone:"1673263728",
      form:{
        mode:'http://3d.zberp.net/home/CreateOrCode',
        represent:'天气不错',
        phone:'15626321234',
        number:'4401264865134',
        jifen:'3000',
      },
      tableintegral:[
        {
          time:'2017年4月20日',
          type:'全额购',
          pro:'联想笔记本，4G,红色',
          num:'1',
          integral:'+400',
          total:'5000',
        },
        {
          time:'2017年4月22日',
          type:'积分抢购',
          pro:'九阳豆浆机',
          num:'10',
          integral:'-400',
          total:'3000',
        },
      ],
      tableexpense: [
        {
          time:'2017年4月20日',
          type:'全额购',
          pro:'联想笔记本，4G,红色',
          num:'1',
          price:'￥4000',
        },
        {
          time:'2017年4月18日',
          type:'积分抢购',
          pro:'九阳豆浆机',
          num:'10',
          price:'100分',
        },
      ],
      tableData:[
        {
          num:'收货地址1',
          name:'黎明',
          phone:'15013612345',
          address:'广东省深圳市南山区蛇口半岛城邦1栋1203',
          remark:'',
        },
        {
           num:'收货地址2',
           name:'李那',
          phone:'15013612345',
          address:'广东省深圳市罗湖区田贝工业区4栋4楼佳峰集团',
          remark:'默认地址',
        },
      ],
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
     messData:[
        {
          phone: '15747412586',
          userhead: 'http://wx.qlogo.cn/mmopen/QWiajE66Y3IKE8ibxlkSJnyEe23SPfzn14rfvZDSKrGYwnlqVImlUucQxibYsgBe6HkhfnYFQTDqV9mSSQwCzWQpS7ewFwGKwMw/132',
          nickname: 'JACK',
          orderphone: '15013612345',
          lasttime:'2018.04.20 18：36',
          userint:'63377',
          loginpower:'0',
          dealpower:'1',
        },
         {
          phone: '1574741232',
          userhead: 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM4UewV7dDKwbjoMIK0LrORiaZ2Yd5v8s6ibTkIrWVR5ZQsHYFvSLW6tIKjggUhW6BUAsiaIAjcXkVRIBlKed4RSQ7nPwhjic3jxzhc/0',
          nickname: 'JACK',
          orderphone: '15013612345',
          lasttime:'2018.04.19 18：36',
          userint:'62738',
          loginpower:'1',
          dealpower:'0'
        },
        
      ],
    
    formLabelWidth: '120px',
    dialogidentity:false,
    dialogdata:false,
    dialogexpense:false,
    dialogintegral:false,
    dialogshare:false,
    dialoguserint:false,
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
    reaDidentity(row){
        this.dialogidentity=true;
    },
    readData(row){
     this.dialogdata=true;
    },
    readExpense(row){
     this.dialogexpense=true;
    },
    readIntegral(row){
      this.dialogintegral=true;
    },
    readShare($index){
      this.dialogshare=true;
    },
    readUserint($index,row){
      this.dialoguserint=true;
    },
    updataloginp(row, $index){
      
    },
    updataleal($index){

    }
  },
  
};
</script>
<style scoped>

.head_img{
  vertical-align: middle;
}
.el-pagination{
  margin: 20px 0;
}
.jifen{
  margin-bottom: 5px;
  color: #333;
}
</style>