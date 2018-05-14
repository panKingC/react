
<template>
  <div>
    <h3 class="title">抢免单当前活动</h3>
    <el-row style="padding-left:1%;padding-top:10px">
      <template>
        <el-table
          :data="nowexemptionInfo"
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
            label="活动主图">
            <template slot-scope="scope">
              <img :src="nowexemptionInfo.Supplier" width="50" height="50"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="requirement"
            label="本期剩余商品数量">
          </el-table-column>
          <el-table-column
            prop="classification"
            label="标价">
          </el-table-column>
          <el-table-column
            prop="unitPrice"
            label="计划期数">
          </el-table-column>
          <el-table-column
            prop="unitPrice"
            label="当前期数">
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
        nowexemptionInfo: [{
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
      }
    },
   
    methods: {
     
    
     
      
    }
    
  }
  
</script>