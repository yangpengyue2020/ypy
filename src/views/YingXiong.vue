<template>
  <div>
    <div class="tops">
      <div class="left">
        <div>全部</div>
        <div>大象杯</div>
        <div>绝活&职业</div>
      </div>
      <div class="right">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <div class="btm">
      <div class="list" v-for="(item, index) in arrs" :key="index">
        <div class="img">
          <img :src="item.img" alt="" />
        </div>
        <div class="text">
          <h4 class="title">{{ item.title }}</h4>
          <div class="txt">
            <p class="name" style="font-size: 10px">{{ item.name }}</p>
            <div>
              <i class="el-icon-user-solid"></i>
              <span style="font-size: 10px">{{ item.people }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "YingXiong",
  data() {
    return {
      arrs: null,
    };
  },
  methods: {
    async getList() {
      console.log(1111);
      let { data } = await axios.get("/ynigXiong");
      this.arrs = data;
      console.log(this.arrs);
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style scoped>
.tops {
  box-sizing: border-box;
  width: 100vw;
  /* height: 0.34rem; */
  padding: 0.1rem 0.1rem 0 0.1rem;
  display: flex;
}
.tops .left {
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.tops .left div {
  border: 1px solid#ffa900;
  height: 0.36rem;
  padding: 0 0.18rem;
  color: #666;
  font-size: 0.14rem;
  line-height: 0.36rem;
  border-radius: 0.18rem;
  margin-right: 0.15rem;
}
.tops .right {
  width: 0.5rem;
  height: 24px;
  display: flex;
  justify-content: center;
  padding: 0 8px;
  border-radius: 20px;
  background: #fff;
  align-items: center;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
}
.btm {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.1rem 5px 0;
}
.btm .list {
  width: 49%;
}
.btm .list .img {
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: 1.63rem;
}
.btm .list .img img {
  width: 100%;
  height: 100%;
}
.btm .list .text .title {
  padding: 0.1rem 3px 0 3px;
  font-size: 14px;
  line-height: 0.3rem;
  color: #000;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: normal;
}
.btm .list .text .name {
  width: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: normal;
}
.btm .list .text .txt {
  display: flex;
  justify-content: space-between;
  color: #999;
  padding: 3px;
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.1rem;
}
</style>