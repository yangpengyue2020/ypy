<template>
  <div class = 'appearance'>
    <div class = 'container'>
      <van-row type="flex" justify="space-between" class = 'nav'>
        <van-button round size="small" class = 'btn' to="/appearance/all/1">全部</van-button>
        <van-button round size="small" class = 'btn' to="/appearance/all/2">热舞</van-button>
        <van-button round size="small" class = 'btn' to="/appearance/all/3">听歌</van-button>
        <van-button round size="small" class = 'btn' to="/appearance/all/4">脱口秀</van-button>
        <van-button round size="small" class = 'btn' to="/appearance/all/5">首推</van-button>
        <van-button round size="small" class = 'btn' v-show = 'this.icon == "arrow-up"'>高清美女</van-button>
      </van-row>
      <van-button round size="small" class = 'btn btn1' @click = 'changeIcon' >
        <van-icon :name="icon" />
      </van-button>
      <van-overlay :show="show" @click="show = false" class-name = 'shade' duration = '0'/>
    </div>
    <van-row >
      <router-view></router-view>
    </van-row>
  </div>
</template>

<script>

export default {
  name: 'AppearanceView',

  data() {
    return {
      icon:"arrow-down",
      show: false,
      arr:null
    };
  },

  mounted() {
    
  },
  methods:{
    changeIcon(){
      if(this.icon == 'arrow-down'){
          this.icon = 'arrow-up'
          this.show = true
      }else{
        this.icon = 'arrow-down'
          this.show = false
      } 
    },
  }

 
};
</script>

<style  scoped>
*{
  padding:0;
  margin:0;
}
.appearance{
  padding:0.1rem;
} 
.container{
  display: flex;
  justify-content:space-between;
}
.appearance .nav{
  margin-bottom:10px;
  margin-right:10px;
  flex:1;
}
.btn1{
  flex-basis:50px;
}
.appearance .btn{
  padding:2px 13px;
  margin-top:15px;
}
.appearance .btn:hover{
  color:orangered;
  border-color:orangered;
}
.shade{
  background:rgba(255,255,255,0.8);
  height:100vh;
  top:28vh;
}
</style>