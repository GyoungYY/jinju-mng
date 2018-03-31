<template>
  <div>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread-crumb">
        <el-breadcrumb-item :to="{ path: '/jinjuList' }">金句管理</el-breadcrumb-item>
        <el-breadcrumb-item>审核</el-breadcrumb-item>
    </el-breadcrumb>
     
     <el-card class="box-card" v-for="(item,index) in jinjuList" :key="item.index">
            <div slot="header">
                <el-select v-model="item.type" placeholder="请选择" style="width:120px;">
                    <el-option label="搞笑" :value="1"></el-option>
                    <el-option label="情感" :value="2"></el-option>
                    <el-option label="热点" :value="3"></el-option>
                </el-select>
                <span style="padding-left:20px;color:#999;">来源于：{{item.source}}</span>
                <span style="padding-left:20px;color:#999;">{{item.createTimeShow}}</span>
                <div style="float:right;">
                    <el-button type="primary" size="small" @click="passJinju(item)">通过</el-button>
                    <el-button type="danger" size="small" @click="rejectJinju(item)">驳回</el-button>
                </div>
            </div>
            <div class="item-content">
                {{item.content}}
            </div>
        </el-card>

        <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="searchParams.pageIndex"
            :page-size="searchParams.pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total" class="pagination">
        </el-pagination>
  </div>
</template>

<script>
import JinjuInterface from "@/interface/JinjuInterface";
import scrollFunc from "@/common/js/scrollFunc";
import formatTime from "@/common/js/formatTime";

let timer = null;

export default {
  data() {
    return {
      searchParams: {
        pageIndex: 1,
        pageSize: 15
      },
      isLoading: false,
      jinjuList: [],
      total: 0,
      typeEnum: {
        1: "搞笑",
        2: "情感",
        3: "热点"
      },
      tagClass: {
        1: "",
        2: "success",
        3: "danger"
      }
    };
  },
  mounted() {
    this.getJinjuList(1);
  },
  methods: {
    //获取金句列表
    getJinjuList(page) {
      this.searchParams.pageIndex = page;
      this.isLoading = true;
      JinjuInterface.getJinjuList(this.searchParams).then(data => {
        this.isLoading = false;
        this.jinjuList = data.list.map(item => {
          item.createTimeShow = formatTime.getFormatTime(item.createTime);
          item.type = 1;
          return item;
        });
        this.total = data.total;
      });
    },

    //切换页数
    handleCurrentChange(page) {
      this.getJinjuList(page);
      scrollFunc.gotoTop();
    },

    //通过
    passJinju(item) {
      let params = {
        id: item.id,
        type: item.type
      };
      JinjuInterface.passJinju(params).then(data => {
        this.$message.success("操作成功");
        this.getJinjuList(this.searchParams.pageIndex);
      });
    },

    //驳回
    rejectJinju(item) {
      JinjuInterface.rejectJinju({ id: item.id }).then(data => {
        this.$message.success("操作成功");
        this.getJinjuList(this.searchParams.pageIndex);
      });
    }
  }
};
</script>

<style scoped>
.bread-crumb {
  padding: 12px;
  margin-bottom: 20px;
  background-color: #ddd;
}

.box-card {
  margin-bottom: 20px;
}

.item-username {
  font-size: 16px;
  font-weight: bold;
  color: #f90;
}

.item-content {
  margin-bottom: 18px;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}

.item-tag {
  padding: 0 15px;
  line-height: 26px;
  height: 28px;
}

.pagination {
  text-align: center;
  margin: 20px;
  width: 100%;
}

.clicked {
  color: #fa5555;
}
</style>


