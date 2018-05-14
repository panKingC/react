<style scoped>
</style>
<template>
  <div>
    <h3 class="title">商品分类设置</h3>
    <el-row style="padding-left:1%;padding-top:10px">
      <el-table
        :data="tableData"
        style="width: 98%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table
              :data="tableData1"
              style="width: 100%"
              :show-header="false">
              <el-table-column
                width="100"
                prop="Pname1"
                align="center">
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <img src="" width="50" height="50"/>
                </template>
               </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEditC(scope.$index, scope.row)">修改</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDeleteC(scope.$index, tableData1 )">删除</el-button>
                </template>
              </el-table-column>
              
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          label="分类名称"
          prop="Pname"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          label="添加子分类(最多两级)"
          width="400"
          align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              plain
              size="mini"
              @click="addList(scope.$index, scope.row)">添加子分类</el-button>
            <el-button
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="300"
          align="center">
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
      
      <el-dialog title="添加子分类" :visible.sync="dialogFormVisible" width="40%">
        <el-form :model="form">
          <el-form-item label="上级分类" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off" disabled ></el-input>
          </el-form-item>
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model="form.region" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="enterAdd">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="修改分类" :visible.sync="reviseInfo" width="40%">
        <el-form :model="reviseForm">
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model="reviseForm.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="reviseInfo = false">取 消</el-button>
          <el-button type="primary" @click="enterRevise">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="添加分类" :visible.sync="addInfo" width="40%">
        <el-form :model="addForm">
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model="addForm.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addInfo = false">取 消</el-button>
          <el-button type="primary" @click="enterAddP">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          Pname: '电子产品',
          }, {
          Pname: '食品',
        }],
        tableData1: [{
          Pname1: '123',
          }, {
          Pname1: '321',
        }],
        addInfo:false,//添加父分类弹窗
        addForm:{
          name:'',
        },
        dialogFormVisible: false,//添加子分类弹窗
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        dialogImageUrl: '',
        dialogVisible: false,
        reviseInfo: false,//修改分类弹窗
        reviseForm: {
          name:''
        }
      }
    },
    methods: {
      //添加父分类
       renderHeader(h) {
        return (
          <div style="margin-left:10%">
            <el-button type="primary" on-click={()=>this.addListP()}>添加分类</el-button>
          </div>
        )
      },
      addListP(){
        this.addInfo = true;
      },
      //确认添加父分类
      enterAddP(){
        this.addInfo = false;
      },
      //添加子分类
      addList(index, row){
        this.dialogFormVisible = true;
        this.form.name = row.date
        console.log(row)
      },
       //删除文件
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //确认添加子分类
      enterAdd() {
        this.dialogFormVisible = false;
      },

      //修改父分类
      handleEdit(index, row) {
        this.reviseInfo = true;
        this.reviseForm.name = row.date;
        console.log(index, row);
      },
      //确认修改
      enterRevise() {
         this.reviseInfo = false;
      },
      //删除分类
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
       //修改子分类
      handleEditC(index, row) {
        this.reviseInfo = true;
        this.reviseForm.name = row.date;
        console.log(index, row);
      },
      //删除子分类
      handleDeleteC(index, rows) {
        rows.splice(index, 1);
      }
     
    }
  }
</script>