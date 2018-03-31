<template>
  <div>
      <div class="header">
          jinjumao管理后台
          <span style="font-size:16px;float:right;padding-top:10px;">{{userInfo.username}}</span>
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

    <el-menu-item index="toAuditJinju">
        <i class="el-icon-menu"></i>
        <span slot="title">金句管理</span>
      </el-menu-item>
      <el-menu-item index="store">
        <i class="el-icon-setting"></i>
        <span slot="title">商家管理</span>
      </el-menu-item>
      <el-menu-item index="goods">
        <i class="el-icon-printer"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>

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
    return {
        userInfo: JSON.parse(sessionStorage.getItem("userInfo")),
    };
  },
  methods: {
    itemSelect(index) {
      if (index === "toAuditJinju") {
        this.$router.push({ path: "/jinjuList" });
      } else if (index === "store") {
        this.$router.push({ path: "/storeManage" });
      } else if (index === "goods") {
        this.$router.push({ path: "/goodsList" });
      }
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


