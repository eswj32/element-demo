<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <Common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      ></Common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
      <Common-form
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList">搜索</el-button>
      </Common-form>
    </div>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList"
      @edit="editUser"
      @del="delUser"
    ></common-table>
  </div>
</template>
<script>
import CommonForm from "@/components/CommonForm.vue";
import CommonTable from "@/components/CommonTable.vue";
export default {
  name: "User",
  components: {
    CommonForm,
    CommonTable,
  },
  data: () => {
    return {
      operateType: "add",
      isShow: false,
      operateFormLabel: [
        { model: "name", label: "姓名", type: "input" },
        { model: "age", label: "年龄", type: "input" },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            { label: "男", value: 1 },
            { label: "女", value: 0 },
          ],
        },
        { model: "birth", label: "出生年月", type: "date" },
        { model: "addr", label: "地址", type: "input" },
      ],
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchForm: { keyword: "" },
      tableData: [],
      tableLabel: [
        { prop: "name", label: "姓名" },
        { prop: "age", label: "年龄" },
        { prop: "sexLabel", label: "性别" },
        { prop: "birth", label: "出生日期", width: 200 },
        { prop: "addr", label: "地址", width: 320 },
      ],
      config:{
        page:1,
        total:30
      }
    };
  },
  methods: {
    confirm() {
      if (this.operateType === "edit") {
        this.$http.post();
      }
    },
    addUser() {
      this.isShow = true;
      this.operateType = "add";
      this.operateForm = { name: "", addr: "", age: "", birth: "", sex: "" };
    },
    getList() {
      return [
        {name:13,age:123,sexLabel:123,birth:123,addr:132}
      ]
    },
    editUser(row) {
      console.log(row)
    },
    delUser() {}
  },
};
</script>
<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
