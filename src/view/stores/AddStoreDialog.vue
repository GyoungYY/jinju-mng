<template>
  <div>
    <el-dialog title="新增/修改店铺" :visible.sync="dialogFormVisible" :before-close="onCancel" width="60%">
  <el-form :model="form">
    <el-form-item label="店铺名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="店铺类型" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择店铺类型">
        <el-option label="类型一" value="shanghai"></el-option>
        <el-option label="类型二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="店铺logo" :label-width="formLabelWidth">
                        <el-upload
                            class="avatar-uploader"
                            action="http://upload-z0.qiniup.com"
                            :show-file-list="false"
                            :data="postData"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="storeData.imageUrl" :src="storeData.imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
    </el-form-item>
    <el-form-item label="所属用户ID" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="onCancel()">取 消</el-button>
    <el-button type="primary" @click="onCancel()">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import QiniuInterface from "@/interface/QiniuInterface";
import StoreInterface from "@/interface/StoreInterface";

export default {
  props: ["dialogFormVisible", "storeData"],
  data() {
    return {
      formLabelWidth: "120px",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      postData: {
        token:
          "aI9GR6VbK_5gu3kwDj-eTFny-1Hi4sucXf5mQkeg:28x3c--LOhWr6E_R2qP9k_njr9I=:eyJzY29wZSI6Imppbmp1bWFvIiwiZGVhZGxpbmUiOjE1MTU4NTc3NTJ9"
      }
    };
  },
  methods: {
    onCancel: function() {
      this.$emit("cancel");
    },

    //获取upload token
    getUploadToken() {
      QiniuInterface.getUploadToken("2")
        .then(data => {
          this.postData.token = data;
        })
        .catch(reason => {
          this.$message.error(reason);
        });
    },

    //头像上传成功回调
    handleAvatarSuccess(res, file) {
      this.storeData.imageUrl = URL.createObjectURL(file.raw);
      this.storeData.coverImgUrl = res.key;
    },

    beforeAvatarUpload(file) {
      const isJPG =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("封面只能上传图片!");
      }
      if (!isLt2M) {
        this.$message.error("封面图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.el-input {
  width: 80%;
}
</style>


