<template>
  <div>
    <h3 class="title">日销售额</h3>
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
    <el-row style="margin-top:20px">
        <el-radio v-model="radio" label="1">时间排序（近到远）</el-radio>
        <el-radio v-model="radio" label="2">日总销量排序（大到小）</el-radio>
        <el-radio v-model="radio" label="3">日全额购销量排序（大到小）</el-radio>
        <el-radio v-model="radio" label="4">日积分抢购销量排序（大到小）</el-radio>
        <el-radio v-model="radio" label="5">日抢免单销量排序（大到小）</el-radio>
     </el-row>
    <el-row>
      <template>
        <el-table :data="dailySales" style="margin-top:20px" border>
          <el-table-column prop="time"   label="时间"  sortable align="center"></el-table-column>
          <el-table-column  label="日总销售量"  align="center"> 
            <template slot-scope="scope">
                  <p class="jifen">￥{{scope.row.sales}}</p>
                  <p class="jifen">积分：{{scope.row.integral}}</p>
              </template>
          </el-table-column>
          <el-table-column prop="buy" label="日全额购销量(￥)" sortable align="center"> </el-table-column>
          <el-table-column prop="purchase" label="日积分抢购销量" sortable align="center"></el-table-column>
          <el-table-column prop="exemption" label="日抢免单销量(￥)" sortable align="center"></el-table-column>
        </el-table>
      </template>
    </el-row> 
      <el-pagination
        class="mt20"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10,20, 50, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
        </el-pagination> 
  </div>
</template>
<script>
  export default {
    data() {
      return {
          radio: '1',
        value:'',
        options: [
        {
          value: "选项1",
          label: "时间"
        },
        {
          value: "选项2",
          label: "日总销售量"
        },
       {
          value: "选项3",
          label: "日全额购销量"
        },
        {
          value: "选项4",
          label: "日积分抢购销量"
        },
        {
          value: "选项5",
          label: "日抢免单销量"
        },
      ],
        dailySales: [{
          time:'2018.04.20',
          sales:'329290',
          integral:'89900',
          buy:'18000',
          purchase:'800000',
          exemption:'15000'
        
          }, {
          time:'2018.04.22',
          sales:'429290',
          integral:'88800',
          buy:'18000',
          purchase:'700000',
          exemption:'18000'
        },
        ],
      }
    },
   
    methods: {
     search(){

     },
     handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
     
      
    }
    
  }
  
</script>