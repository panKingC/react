<template >
  <div>
       <h3 class="title">订单管理</h3>
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
        <el-table :data="orderData" style="100%" border class="mt20">
        <el-table-column label="订单号" prop="orderid" width="180" align="center"></el-table-column>
        <el-table-column label="购买用户" prop="buyuser" width="140" align="center"></el-table-column>
        <el-table-column label="收货人" prop="receiver" width="140" align="center"></el-table-column>
        <el-table-column label="联系电话" prop="orderphone"  width="140" align="center"></el-table-column>
        <el-table-column label="收货地址" prop="orderdata"  align="center"></el-table-column>
        <el-table-column label="订单详情" prop="ordermain" width="140" align="center">
           <template slot-scope="scope">
              <el-button plain size="mini" type="warning" 
              @click="read()">查看</el-button>
           </template>
        </el-table-column>
        <el-table-column label="订单状态" prop="orderuser" width="140" align="center" sortable>
            <template slot-scope="scope">
            <el-tag type="danger" size="small" v-if="scope.row.status==0">待付款</el-tag>
            <el-tag type="primary" size="small" v-else-if="scope.row.status==1">待收货</el-tag>
            <el-tag type="success" size="small" v-else-if="scope.row.status==2">已完成</el-tag>
            <el-tag type="info" size="small" v-else-if="scope.row.status==3">待评价</el-tag>
            </template>
        </el-table-column>              
        <el-table-column label="物流信息" fixed="right" width="140" align="center">
            <template slot-scope="scope">
              <el-button plain size="mini" type="warning" 
              icon="el-icon-edit" 
              @click="handleEdit(scope.row)">查看/修改</el-button>
           </template>
        </el-table-column>                       
        </el-table>
        <el-pagination
        class="mt20"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10,20, 50, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
        </el-pagination>
     
     <!-- 订单详情弹窗 -->
     <el-dialog title="订单详情" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
         <el-table-column property="order" label="订单号" width="150"></el-table-column>
        <el-table-column property="proname" label="商品名称" width="150"></el-table-column>
        <el-table-column property="price" label="单价(￥)" width="200"></el-table-column>
        <el-table-column property="total" label="总价(￥)"></el-table-column>
      </el-table>
    </el-dialog>
    
    
    <!-- 物流信息弹框 -->
    <el-dialog title="物流信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
       <el-form-item label="物流公司" :label-width="formLabelWidth" >
          <el-input  v-model="form.logistics"></el-input >
        </el-form-item>
         <el-form-item label="物流单号" :label-width="formLabelWidth">
          <el-input v-model="form.order" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="实时信息" :label-width="formLabelWidth">
         
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
          label: "订单号"
        },
        {
          value: "选项2",
          label: "购买用户"
        },
        {
          value: "选项3",
          label: "发货人"
        },
        {
          value: "选项4",
          label: "订单状态"
        }
      ],
     
     orderData:[
        {
          orderid: '123486523486',
          buyuser: 'JACK',
          receiver: 'JACK',
          orderphone: '15013612345',
          status:0,
          orderdata:'广东省深圳市罗湖区田贝工业区4栋4楼佳峰集团'
        },
        {
         orderid: '123486523486',
          buyuser: 'JACK',
          receiver: 'JACK',
          orderphone: '15013612345',
          status:1,
          orderdata:'广东省深圳市罗湖区田贝工业区4栋4楼佳峰集团'
        },
        {
         orderid: '123486523486',
          buyuser: 'JACK',
          receiver: 'JACK',
          orderphone: '15013612345',
          status:2,
          orderdata:'广东省深圳市罗湖区田贝工业区4栋4楼佳峰集团'
        },
        {
         orderid: '123486523486',
          buyuser: 'JACK',
          receiver: 'JACK',
          orderphone: '15013612345',
          status:3,
          orderdata:'广东省深圳市罗湖区田贝工业区4栋4楼佳峰集团'
        }
     ],
     gridData: [{
          order: '1234567',
          proname: '联想笔记本电脑',
          price: '4000',
          total:'4000',
          
        }, 
        {
          order: '1234567',
          proname: '联想笔记本电脑',
          price: '4000',
          total:'4000',
        },
         {
          order: '1234567',
          proname: '联想笔记本电脑',
          price: '4000',
          total:'4000',
        }
        ],
    dialogTableVisible: false,
    dialogFormVisible: false,
    form: {
      order: '154286952167652196',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
      logistics:'顺风快递',

    },
    formLabelWidth: '120px'
    };
      
  },
  methods: {
    search(){
      
      console.log(this.keyword);
    },
    handleEdit(row) {
      this.dialogFormVisible=true;
      console.log(row);
    },
  
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    read(){
      this.dialogTableVisible = true;
    },
    close(){
      this.isShow =false;
    }
  },
  
};
</script>
<style>

.el-dialog__body{
  padding-top: 10px;
}
</style>