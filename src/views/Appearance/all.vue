<template>
  <div>
    <ul class="list">
      <li v-for= "(item,index) of arr" :key = 'index'>
        <img :src="item.imgsrc" alt="">
        <p class = "title">{{item.title}}</p>
        <div class = 'user-info'>
          <span>{{item.author}}</span>
          <div class = 'num'>
            <i class = 'icon'></i>
            <span>{{item.num}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import instance from '@/api/index'
export default {
  name: 'WorkspaceJsonAll',

  data() {
    return {
      arr:null
    };
  },
  props:["name"],
  watch:{
    name(){
      this.allData()
    }
  },
  methods: {
    changeIcon(){
      if(this.icon == 'arrow-down'){
         this.icon = 'arrow-up'
         this.show = true
      }else{
        this.icon = 'arrow-down'
         this.show = false
      } 
    },
    async allData(){
      const {data} = await instance.post("/appearance",{name:this.name})
      console.log(data)
      this.arr = data
    }
  },
  created(){
    this.allData()
  }
};
</script>

<style  scoped>
*{
  padding:0;
  margin:0;
}
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size:14px;
  }
  .list li{
    width:49%;
    margin-bottom:10px;
  }
  .list li img{
    width:100%;
    border-radius:5px;
  }
  .list .title{
    margin:6px 0;
  }
  .list .user-info{
    font-size:12px;
    color:#999;
    display: flex;
    justify-content: space-between;
  }
  .list .user-info{
    font-size:12px;
    color:#999;
    display: flex;
    justify-content: space-between;
  }
  .num{
    display: flex;
    align-items: center;
  }
  .num .icon{
    width:12px;
    height:12px;
    margin-right:3px;
    background:url('@/assets/yz/icon.png')
  }
</style>