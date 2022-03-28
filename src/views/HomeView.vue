<template>
  <div class="about">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item id="op">&nbsp</van-swipe-item>
      <van-swipe-item id="op1">&nbsp</van-swipe-item>
      <van-swipe-item id="op2">&nbsp</van-swipe-item>
      <van-swipe-item id="op3">&nbsp</van-swipe-item>
      <van-swipe-item id="op4">&nbsp</van-swipe-item>
      <van-swipe-item id="op5">&nbsp</van-swipe-item>
    </van-swipe>
    <div class="box" v-for="(item, index) in arrs" :key="index">
      <ul class="top">
        <img src="../assets/huo.png" alt="" />
        <li>
          <h3>{{ item.biaoti }}</h3>
        </li>
        <li>
          <span>{{ item.more }}</span>
        </li>
      </ul>
      <ul class="cont">
        <li v-for="(liItem, index) in item.data" :key="index">
          <img :src="liItem.imgsrc" alt="" />
          <p>{{ liItem.title }}</p>
          <span class="fl">{{ liItem.info }}</span>

          <span class="fr"
            ><van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />{{
              liItem.number
            }}</span
          >
        </li>
      </ul>
    </div>
    <br />

    <div class="button"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Yule",
  data() {
    return {
      arrs: null,
    };
  },
  components: {},
  methods: {
    async getHome() {
      let { data } = await axios.get("/api/shouye");
      this.arrs = data;
      // console.log(this.arrs)
    },
  },
  created() {
    this.getHome();
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cont {
  /* margin-left:8px; */
  /* width:100%; */
  display: flex;
  flex-wrap: wrap;
  padding-left: 8px;
}
.cont li {
  width: 176px;
  margin-top: 10px;
  margin-left: 5px;
}
.cont p {
  font-size: 14px;
}
.fl {
  float: left;
  font-size: 12px;
  color: #999;
}
.fr {
  float: right;
  font-size: 12px;
  color: #999;
}
.box {
  width: 100%;
}
.top {
  height: 53px;
  /* background: red; */
  list-style: none;
  border: none;
}
.top li h3 {
  display: inline-block;
  margin-left: 5px;
}
.top img {
  margin-top: 1px;
  float: left;
  margin-left: 5px;
}
.top li {
  height: 100%;
  line-height: 53px;
}
.top li:nth-child(2) {
  float: left;
}
.top li:nth-child(3) {
  float: right;
  margin-right: 10px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
#op {
  background: url("https://livewebbs2.msstatic.com/home_recommend_live_app_1648181940.jpg?ips_thumbnail/0/w/700");
  background-size: 100% 100%;
}
#op1 {
  background: url("https://livewebbs2.msstatic.com/home_recommend_live_app_1477039176.jpg?ips_thumbnail/0/w/700/");
  background-size: 100% 100%;
}
#op2 {
  background: url("https://livewebbs2.msstatic.com/home_recommend_live_app_1646589994.jpg?ips_thumbnail/0/w/700/");
  background-size: 100% 100%;
}
#op3 {
  background: url("https://livewebbs2.msstatic.com/home_recommend_live_app_1600065226.jpg?ips_thumbnail/0/w/700/");
  background-size: 100% 100%;
}
#op4 {
  background: url("https://livewebbs2.msstatic.com/home_recommend_live_app_1575007941.jpg?ips_thumbnail/0/w/700/");
  background-size: 100% 100%;
}
#op5 {
  background: url("https://livewebbs2.msstatic.com/home_recommend_live_app_1648018513.jpg?ips_thumbnail/0/w/700/");
  background-size: 100% 100%;
}
.button {
  width: 100%;
  height: 100px;
  background: url("../assets/button.png");
  background-size: 100% 100%;
}
/* ::v-deep .van-swipe__indicators{
   left:87%;
  } */
</style>
