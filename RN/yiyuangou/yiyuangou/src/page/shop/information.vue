<style scope>
  .information-box .img-box{
    width:80%;
    margin-left:10%;
    height:250px;
    border:1px solid black;
    border-radius:5px;
  }
  .img-list-box{
    margin-top:50px;
    width:90%;
    margin-left:5%;
    height:100px;
  }
  .img-list-box li{
    float:left;
    width:60px;
    height:60px;
    border:1px solid black;
    border-radius:5px;
    margin-right:10px
  }
  .content-box{
    width:80%;
    margin-left:10%;
    min-height:100px;
  }
</style>
<template>
  <div class="information-box">
    <h3 class="title">基础信息维护</h3>
    <el-row style="padding-left:1%;padding-top:10px">
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
    <el-row style="padding-left:1%;padding-top:20px">
      <template>
        <el-table
          :data="tableData"
          style="width: 98%">
          <el-table-column
            prop="fictitious"
            label="虚拟商品"
            width="90">
          </el-table-column>
          <el-table-column
            prop="name"
            label="商品名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="Supplier"
            label="供应商">
          </el-table-column>
          <el-table-column
            prop="classification"
            label="分类">
          </el-table-column>
          <el-table-column
            label="图片/小视频"
            width="110">
            <template slot-scope="scope">
              <el-button @click="imgClick(scope.row)" type="text" size="small">点击查看</el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="详情介绍"
            width="110">
            <template slot-scope="scope">
              <el-button @click="infoClick(scope.row)" type="text" size="small">点击查看</el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="unitPrice"
            label="成本单价"
            width="110">
          </el-table-column>
          <el-table-column
            prop="attribute"
            label="属性">
          </el-table-column>
          <el-table-column
            prop="num"
            label="库存数"
            width="110">
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作"
             width="180">
             <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button
                size="mini"
                type="danger"
                @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column
           :render-header="renderHeader">
        </el-table-column>
        </el-table>
      </template>
    </el-row>
    <el-dialog title="图片/小视频查看" :visible.sync="imgSee" width="40%">
        <div class="img-box">
          <img scr=""/>
        </div>
        <ul class="img-list-box">
          <li></li>
          <li></li>
        </ul>
    </el-dialog>

    <el-dialog title="商品详情介绍" :visible.sync="briefing" width="30%">
      <p class="content-box">{{content}}</P>  
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
        tableData: [{
            fictitious: '否',
            name: '联想笔记本电脑',
            Supplier: '联想集团',
            classification: '电子产品-电脑',
            unitPrice: '￥206',
            attribute: '颜色：红色,白色,黑色',
            num: '156',
          }, {
            fictitious: '是',
            name: '九阳豆浆机',
            Supplier: '九阳集团',
            classification: '厨房用品',
            unitPrice: '￥3000',
            attribute: '颜色：红色,白色,黑色',
            num: '5689',
          }],
          imgSee:false,//图片、小视频弹窗
          briefing:false,//商品详情介绍弹窗
          content:'的说法就是了飞机上了飞机士大夫撒了地方撒',//详情内容
      }
    },
   
    methods: {
      //添加商品按钮
       renderHeader(h) {
        return (
          <div style="margin-left:10%">
            <el-button type="primary" on-click={()=>this.addListP()}>添加商品</el-button>
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
      //查看图片、视屏
      imgClick(row) {
        console.log(row);
        this.imgSee = true;
      },
      //查看商品详情
      infoClick(row) {
        this.briefing = true;
        console.log(row);
      },
      //删除商品
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      //搜索
      search(){
        console.log(123)
      },
    }
    
  }
  
</script>