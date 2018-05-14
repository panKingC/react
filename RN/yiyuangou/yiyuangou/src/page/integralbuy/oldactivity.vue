<style>
 
</style>
<template>
  <div>
    <h3 class="title">往期活动</h3>
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
          :data="nowactivityInfo"
          style="width: 90%;margin-top:30px">
          <el-table-column
            prop="commodity"
            label="商品名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="活动名称">
          </el-table-column>
          <el-table-column
            label="活动主图">
            <template slot-scope="scope">
              <img :src="nowactivityInfo.Supplier" width="50" height="50"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="requirement"
            label="参与情况">
          </el-table-column>
          <el-table-column
            prop="classification"
            label="计划期数">
          </el-table-column>
          <el-table-column
            prop="unitPrice"
            label="当前期数">
          </el-table-column>
          <el-table-column>
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
        nowactivityInfo: [{
          commodity: '联想笔记本电脑',
          name: '联想笔记本优惠各家',
          requirement:'1212',
          Supplier: '',
          classification: '123',
          unitPrice: '206',
          }, {
          commodity: '九阳豆浆机',
          name: '九阳豆浆机优惠各家',
          requirement:'1212',
          Supplier: '',
          classification: '789',
          unitPrice: '3000',
        }],
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
        loading: false,
      }
    },
   
    methods: {
      //搜索
      search(){
        console.log(123)
      },
    
     
      
    }
    
  }
  
</script>