<template>
    <div>
        <div class="header">
            <van-row justify="space-between" :class="nav" type="flex">
                <van-col span="20">
                    <van-row >
                        <van-button type="default" size="mini" :round="true" class="item active" >全部</van-button>
                        <van-button type="default" size="mini" :round="true" class="item" @click="getfn('#tag3205')">战神局</van-button>
                        <van-button type="default" size="mini" :round="true" class="item" @click="getfn('#tag3206')">美女</van-button>
                        <van-button type="default" size="mini" :round="true" class="item" @click="getfn('#tag3207')">带粉开黑</van-button>
                        <van-button type="default" size="mini" :round="true" class="item" @click="getfn('#tag3208')">赛事&视频</van-button>
                        <van-button type="default" size="mini" :round="true" class="item" @click="getfn('#tag3205')">决赛圈</van-button>
                        <van-button type="default" size="mini" :round="true" class="item" @click="getfn('#tag3206')">模拟器</van-button>
                        <van-button type="default" size="mini" :round="true" class="item" @click="getfn('#tag3207')">内鬼</van-button>
                    </van-row>
                </van-col>
                <van-col span="auto" class="navR">
                    <van-button type="default" size="mini" :round="true" class="item" @click='downfn'><van-icon :name="navR" /></van-button>
                </van-col>
            </van-row>
        </div>
        <Common :res='res'></Common>
    </div>
</template>

<script>
import axios from 'axios'
import Common from './Common.vue'
export default {
    data(){
        return {
            navR:"arrow-down",
            active:"item ative",
            nav:"navTop",
            res:null
        }
        
    },
    components:{
        Common
    },
    methods:{
        downfn(){
            if(this.navR==='arrow-down'){
                this.navR='arrow-up';
                this.nav='navTops'
            }else{
                this.navR='arrow-down';
                this.nav='navTop'
            }

        },
        getfn(id){
            this.nav='navTop'
            this.navR='arrow-down'
            this.$router.push({name:'heping',params:{id}})
            this.getheping(id);
        },
        async getheping(id){
            id?id:id='';
            const {data}=await axios.get('/api/3203/'+id);
            this.res=data.data;
            
        }
    },
    created(){
        this.getheping();
    }
}
</script>

<style scoped>
    *{
        font-size:12px;
    }
    a{
        color:#000;
    }
    .header{
        height: 34px;
        position:relative;
        z-index:99;
    }
    .navTop{
        height: 34px;
        overflow:hidden;
        padding:0.1rem  0.1rem 0;
    }
    .navTops{
        height: 100vh;
        padding:0.1rem  0.1rem 0;
        background: rgba(255,255,255,0.95);
    }
    .header .item{
        margin:0 10px 10px 0;
        padding:0 12px;
    }
    .navR .item{
        padding:0 8px;
    }
    .header .active{
        border:1px solid #ffa900;
        color:#ffa900;
    }
    
</style>