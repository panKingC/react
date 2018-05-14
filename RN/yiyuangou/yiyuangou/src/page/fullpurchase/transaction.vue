<template>
  <div>
    <h3 class="title">交易记录</h3>
    <el-row style="padding-left:1%;padding-top:10px">
     <el-col :span="6">
      <template>
        <div class="block">
          <el-date-picker
            v-model="value5"
            type="datetimerange"
            :picker-options="pickerOptions2"
            range-separator="至"
            start-placeholder="搜索开始日期"
            end-placeholder="搜索结束日期"
            align="right">
          </el-date-picker>
        </div>
      </template>
     </el-col>
     <el-col :span="2">
      <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
     </el-col>
    </el-row>
    <el-row style="padding-left:1%;padding-top:10px">
      <template>
        <el-table
          :data="transaction"
          style="width: 98%;margin-top:30px;">
          <el-table-column
            prop="name"
            label="商品名称">
          </el-table-column>
          <el-table-column
            prop="attribute"
            label="属性">
          </el-table-column>
          <el-table-column
            prop="price"
            label="标价">
          </el-table-column>
          <el-table-column
            prop="integral"
            label="获得积分"
            width="180">
          </el-table-column>
          <el-table-column
            prop="special"
            label="专区"
            width="180">
          </el-table-column>
          <el-table-column
            prop="time"
            label="交易时间">
          </el-table-column>
          <el-table-column
            prop="user"
            label="交易用户">
          </el-table-column>
        </el-table>
      </template>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
        transaction: [{
          name: '王小虎',
          attribute: '黑色,8G',
          price: '￥2000',
          integral:'200',
          special:'积分专区',
          time:'2018.4.21',
          user:'sdfsdf'
        }, {
          name: '王小虎',
          attribute: '黑色,8G',
          price: '￥2000',
          integral:'200',
          special:'积分专区',
          time:'2018.4.21',
          user:'sdfsdf'
        }],
      };
    },
    methods: {
      //搜索
      search(){
        console.log(123)
      },
    }
  };
</script>