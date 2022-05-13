<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>200124-52</span></p>
          <p>上次登录地点：<span>河南</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableDate">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col style="margin-top: 20px" :span="16">
      <div class="num">
        <el-card
          v-for="(item, index) in countData"
          :key="index"
          :body-style="{ display: 'flex', padding: '0px' }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="text">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px"></el-card>
      <div class="graph">
        <el-card style="height: 260px"></el-card>
        <el-card style="height: 260px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "Home",
  data: () => {
    return {
      userImg: require("../../assets/images/1.jpg"),
      tableDate: [
        { name: "0123", todayBuy: 100, monthBuy: 300, totalBuy: 800 },
        { name: "0123", todayBuy: 100, monthBuy: 300, totalBuy: 800 },
        { name: "0123", todayBuy: 100, monthBuy: 300, totalBuy: 800 },
        { name: "0123", todayBuy: 100, monthBuy: 300, totalBuy: 800 },
        { name: "0123", todayBuy: 100, monthBuy: 300, totalBuy: 800 },
        { name: "0123", todayBuy: 100, monthBuy: 300, totalBuy: 800 },
        { name: "0123", todayBuy: 100, monthBuy: 300, totalBuy: 800 },
      ],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
      ],
    };
  },
  mounted() {
    this.$http
      .get("/user?ID=12345")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
