<style>
 
</style>
<template>
  <div>
    <h3 class="title">抢免单活动设置</h3>
    <el-row style="padding-left:20px;padding-top:10px">
      <el-col :span="5">
        <template>
          <el-select v-model="value" placeholder="请选择商品名称" @change="valueChange(value)">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-col>
      <el-col :span="4">
        <template>
          <el-select
            v-model="value9"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入搜索关键字"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-col>
      <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
    </el-row>
    <el-row style="padding-left:1%;padding-top:10px">
      <template>
        <el-table
          :data="exemptionInfo"
          style="width: 98%;margin-top:30px">
          <el-table-column
            prop="commodity"
            label="商品名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="活动名称">
          </el-table-column>
          <el-table-column
            label="活动主图"
            width="110">
            <template slot-scope="scope">
              <img :src="exemptionInfo.Supplier" width="50" height="50"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="requirement"
            label="投放数量"
            width="110">
          </el-table-column>
          <el-table-column
            prop="classification"
            label="标价"
            width="110">
          </el-table-column>
          <el-table-column
            prop="unitPrice"
            label="计划期数"
            width="110">
          </el-table-column>
          <el-table-column
            prop="now"
            label="当前期数">
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              <el-radio :label="scope.$index" v-model="radio" @change.native="getCurrentRow(scope.$index)">开启</el-radio>
            </template>
            
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click.native.prevent="deleteRow(scope.$index, exemptionInfo)">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="评论管理">
            <template slot-scope="scope">
              <el-button @click="infoClick(scope.row)" type="text" size="small">点击管理</el-button>
            </template>
          </el-table-column>
          <el-table-column
           :render-header="renderHeader">
          </el-table-column>
        </el-table>
      </template>
    </el-row>
    

    <el-dialog title="商品评价管理" :visible.sync="briefing" width="40%">
      <template>
        <el-table
          :data="comment"
          border
          style="width: 90%;margin-left:5%;margin-bottom:20px">
          <el-table-column
            prop="time"
            label="时间"
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户名"
            align="center">
          </el-table-column>
          <el-table-column
            prop="content"
            label="评论内容"
            align="center">
          </el-table-column>
          <el-table-column
            label="评论图片"
            align="center">
            <template slot-scope="scope">
              <img :src="comment.imgs" width="50" height="50" class="head_pic"/>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click.native.prevent="Shield(scope.$index, tableData)">屏蔽</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      
    </el-dialog>
    <el-dialog title="添加抢免单商品" :visible.sync="addproduct" width="40%">
      
      13131
      
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',

        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"],
        exemptionInfo: [{
          commodity: '联想笔记本电脑',
          name: '联想笔记本优惠各家',
          requirement:'1212',
          Supplier: '',
          classification: '123',
          unitPrice: '206',
          attribute: '积分专区',
          now:'5',
          }, {
          commodity: '九阳豆浆机',
          name: '九阳豆浆机优惠各家',
          requirement:'1212',
          Supplier: '',
          classification: '789',
          unitPrice: '3000',
          attribute: '积分专区',
          now:'5',
        }],
          radio:'1',//是否开启当前活动，1为开启
          
          briefing:false,//商品评价弹窗
         
        tableData: [{
          date: '4G',
          name: '4000',
          address: '989',
          colorB:'5656'
        }, {
          date: '8G',
          name: '4000',
          address: '5612',
          colorB:'5656'
        }],
        comment: [{
          time: '2018年4月20日',
          name: 'JACK',
          content: '质量非常好！',
          imgs:''
        }, {
          time: '2018年4月18日',
          name: 'JACK',
          content: '质量非常好！',
          imgs:''
        }],
        addproduct:false,//添加积分抢购弹窗
      }
    },
   
    methods: {
      //添加商品按钮
       renderHeader(h) {
        return (
          <div>
            <el-button type="primary" on-click={()=>this.addListP()}>添加活动商品</el-button>
          </div>
        )
      },
      //商品名称选择搜索
      valueChange(val){
        console.log(val)

      },
      //联想输入
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      },
     
      //查看商品评价
      infoClick(row) {
        this.briefing = true;
        console.log(row);
      },
      //删除活动商品
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      //开启当前商品活动切换
      getCurrentRow(val){
        console.log(val)//下标
      },
      //屏蔽当前评论
      Shield(index,rows){
        console.log(index,rows)
      },
      //添加活动商品
      addListP(){
        this.addproduct = true;
      },
      //搜索
      search(){
        console.log(123)
      },
    }
    
  }
  
</script>