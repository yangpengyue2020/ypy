<template>
  <div id="app">
    <div class="top">
      <img src="./assets/logo.png" alt="" class="img1" />
      <div class="ri"><img src="./assets/sousuo.png" alt="" /></div>
    </div>
    <div class="dk">
      <div class="nav-links">
        <router-link to="/" class="active"><span>首页</span></router-link>
        <router-link to=""><span>王者荣耀</span></router-link>
        <router-link to=""><span>绝地求生</span></router-link>
        <router-link to=""><span>英雄联盟</span></router-link>
        <router-link to=""><span>星秀</span></router-link>
        <router-link to=""><span>吃喝玩乐</span></router-link>
        <router-link to=""><span>主机游戏</span></router-link>
        <router-link to="/3203:#"><span>和平精英</span></router-link>
        <router-link to="/3204:#"><span>穿越火线</span></router-link>
        <router-link to="/appearance"><span>颜值</span></router-link>
        <router-link to="/quadraticElement"><span>二次元</span></router-link>

      </div>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
}
.app {
  width: 100%;
}
.top {
  width: 100%;
  height: 0.8rem;
  /* background: red; */
  display: flex;
  justify-content: space-between;
  /* padding: 0.13rem 0.08rem; */
  border-bottom: 1px solid #ccc;
}
.img1 {
  width: 1.66rem;
  height: 0.5rem;
  margin-left: 0.08rem;
  margin-top: 0.13rem;
}
.ri {
  width: 0.72rem;
  height: 0.48rem;
  background: #f4f4f4;
  margin-right: 0.11rem;
  margin-top: 0.17rem;
  border-radius: 41%;
  text-align: center;
  line-height: 0.38rem;
}
.ri img {
  margin-top: 0.1rem;
}
.nav-links {
  width: 13.98rem;
  /* white-space: nowrap; */
  /* display: flex; */
  height: 0.5rem;
}
.nav-links a {
  float: left;
  margin-right: 0.4rem;
  text-decoration: none;
  color: #151515;

  font-size: 0.12rem;
}
.nav-links .active {
  margin-left: 0.1rem;
  color: #ffa200;
  border-bottom: 2px solid;
}
.dk {
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
}


</style>
