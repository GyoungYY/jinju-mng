<template>
  <div>
      <div class="header">
          jinjumao管理后台
      </div>
      <div class="bar-content">
            <div class="left-bar">
                <el-menu
      default-active="toAuditJinju"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="itemSelect">

       <el-submenu index="jinju">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>金句管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="toAuditJinju">待审核</el-menu-item>
          <el-menu-item index="passJinju">已通过</el-menu-item>
          <el-menu-item index="rejectJinju">已驳回</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
    </div>
            <div class="right-content">
                <router-view/>
            </div>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    itemSelect(index) {
      console.log(index);
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #000;
  color: #fff;
  font-size: 30px;
  padding: 10px 20px;
}
.bar-content {
  position: relative;
}
.left-bar {
  width: 200px;
  height: 100%;
  min-height: 600px;
  background-color: rgb(84, 92, 100);
  position: absolute;
  left: 0;
  top: 0;
}

.right-content {
  margin-left: 200px;
  padding: 10px;
}
</style>


