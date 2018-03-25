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
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="店铺id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="店铺名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="店铺logo"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="店铺类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="所属用户id"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="所属用户名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="创建日期">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="editStore()" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-size="10"
            layout="total, prev, pager, next, jumper"
            :total="0" class="pagination">
        </el-pagination>

  <add-store-dialog v-if="addDialogShow" :dialogFormVisible="addDialogShow" @cancel="closeDialog" :storeData="itemData"></add-store-dialog>
  </div>
</template>

<script>
import AddStoreDialog from "./AddStoreDialog.vue";
export default {
  components: {
    AddStoreDialog
  },
  data() {
    return {
      addDialogShow: false,
      tableData: [
        {
          date: "1",
          name: "金猫书城",
          province: "图书",
          city: "333",
          address: "金段子",
          zip: "2018-04-01"
        },
        {
          date: "1",
          name: "金猫书城",
          province: "图书",
          city: "333",
          address: "金段子",
          zip: "2018-04-01"
        },
        {
          date: "1",
          name: "金猫书城",
          province: "图书",
          city: "333",
          address: "金段子",
          zip: "2018-04-01"
        },
        {
          date: "1",
          name: "金猫书城",
          province: "图书",
          city: "333",
          address: "金段子",
          zip: "2018-04-01"
        }
      ],
      itemData: {}
    };
  },
  methods: {
    //新增店铺
    addStore() {
      this.addDialogShow = true;
      this.itemData = {};
    },

    closeDialog() {
      this.addDialogShow = false;
    },

    //编辑店铺
    editStore() {
      this.addDialogShow = true;
      this.itemData = {};
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


