<template>
    <div v-if='ress'>
        <van-row class="zhibo" type="flex" >
            <van-col class="item" v-for="(item,index) in ress" :key="index">
                <img :src="item.imgUrl">
                <h3>{{item.title}}</h3>
                <div class="list">
                    <span class="nick">{{item.nick}}</span>
                    <div>
                        <van-icon name="contact" />
                        <span>{{item.count}}</span>
                    </div>
                </div>
            </van-col>
            
        </van-row>
    </div>
</template>

<script>
export default {
    name:"Common",
    data(){
        return{
            ress:null
        }
    },
    props:['res'],
    watch:{
        res(){
            this.ress=this.res;
        }
    }
}
</script>

<style scoped>
    *{
        font-size:12px;
    }
    .zhibo{
        box-sizing: border-box;
        margin-top:10px;
    }
    .zhibo .item{
        width: 47%;
        margin-left:2%;
        margin-bottom:10px;
    }
    .zhibo img{
        width: 100%;
    }
    .zhibo .list{
        display:flex;
        justify-content: space-between;
        padding:3px;
        color:#999;

    }
    .zhibo .list .nick{
        width: 68px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow:hidden;
    }
</style>