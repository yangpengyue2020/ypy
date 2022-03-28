<template>
  <div>
    <div class="nav">
      <div>全部</div>
      <div>大神</div>
      <div>美女</div>
      <div>带粉上车</div>
    </div>
    <div class="menu">
      <div class="item" v-for="(item, index) in arrs" :key="index">
        <img :src="item.imgsrc" alt="" />
        <p class="title">{{item.title}}</p>
        <div class="txtBox">
          <div class="author">{{item.author}}</div>
          <div class="author_img">
            <img
              src="https://a.msstatic.com/huya/mobile/img/crowd_2017_97bb042.png"
              alt=""
            />
            <span class="num">{{item.num}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import instance from "../api/index";
  import axios from "axios"
export default {
  name: "HuYa",
  data() {
    return {
      arrs: null,
    };
  },
  methods: {
    async getHomeIndex() {
      let { data } = await axios.get("/wangzhe")
      console.log("拿到的数据", data);
      this.arrs = data;
      console.log("虎牙数据", this.arrs);
    },
  },
  created() {
    this.getHomeIndex();
  },
};
</script>
<style scoped>
.nav {
  width: 95%;
  font-size: 12px;
  color: #666;
  margin: 10px auto 20px;
  display: flex;
}
.nav > div {
  font-size: 12px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  margin-right: 10px;
  padding: 3px 10px;
}

.menu {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.item {
  width: 47%;
  font-size: 14px;
  padding-bottom: 10px;
}
.item > img {
  width: 100%;
  border-radius: 5px;
}

.item .title {
  width: 100%;
  white-space: nowrap;
  font-size:14px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.txtBox {
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.author, .num{
  font-size:12px;
}
.author_img > img {
  width: 11px;
  height: 11px;
  margin-right: 5px;
}
</style>
