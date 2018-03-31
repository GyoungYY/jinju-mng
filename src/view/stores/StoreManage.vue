<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread-crumb">
        <el-breadcrumb-item :to="{ path: '/storeManage' }">商家管理</el-breadcrumb-item>
        <el-breadcrumb-item>店铺列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="padding-bottom:20px;">
        <el-button type="primary" @click="addStore">新增店铺</el-button>
    </div>

    <el-table
    :data="storeList"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="店铺id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="shopName"
      label="店铺名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="shopLogo"
      label="店铺logo"
      width="180">
    </el-table-column>
    <el-table-column
      prop="shopTypeShow"
      label="店铺类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="userId"
      label="所属用户id"
      width="120">
    </el-table-column>
    <el-table-column
      prop="userId"
      label="所属用户名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="createTimeShow"
      label="创建日期">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="editStore(scope.row)" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="searchParams.pageIndex"
            :page-size="searchParams.pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total" class="pagination">
        </el-pagination>

  <add-store-dialog v-if="addDialogShow" :dialogFormVisible="addDialogShow" @cancel="closeDialog" :storeData="itemData"></add-store-dialog>
  </div>
</template>

<script>
import AddStoreDialog from "./AddStoreDialog.vue";
import StoreInterface from "@/interface/StoreInterface";
import formatTime from "@/common/js/formatTime";

export default {
  components: {
    AddStoreDialog
  },
  data() {
    return {
      addDialogShow: false,
      itemData: {},
      searchParams:{
          pageIndex: 1,
          pageSize: 10,
      },
      storeList: [],
      total: 0,
      shopTypes:{
          1: '图像书籍类',
          2: '服装类',
      }
    };
  },
  mounted(){
      this.getStoreList();
  },
  methods: {

      //获取店铺列表
      getStoreList(){
          StoreInterface.getStoreList(this.searchParams).then(data => {
        this.storeList = data.list.map(item => {
            item.shopTypeShow = this.shopTypes[item.shopType];
          item.createTimeShow = formatTime.getFormatTime(item.createTime);
          return item;
        });
        this.total = data.total;
      });
      },

    //新增店铺
    addStore() {
      this.addDialogShow = true;
      this.itemData = {};
    },

    //关闭弹框
    closeDialog() {
      this.addDialogShow = false;
      this.getStoreList();
    },

    //编辑店铺
    editStore(item) {
      this.addDialogShow = true;
      this.itemData = item;
    },

    handleCurrentChange(page) {}
  }
};
</script>

<style scoped>
.bread-crumb {
  padding: 12px;
  margin-bottom: 20px;
  background-color: #ddd;
}

.pagination {
  text-align: center;
  margin: 20px;
  width: 100%;
}
</style>


