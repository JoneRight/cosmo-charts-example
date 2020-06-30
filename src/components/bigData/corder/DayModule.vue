<template>
  <div class="dayModule">
    <ul>
    	<li>
    	  <div>需求数:</div>
    	  <p><coun-to :starVal='0' :endVal='demand' :duration='3000'/></p>
    	</li>
    	<li>
    	  <div>齐套数:</div>
        <p><coun-to :starVal='0' :endVal='qiNumber' :duration='3000'/></p>
    	</li>
    	<li>
    	  <div>齐套率:</div>
        <p>{{qiRate}}<span>%</span></p>
    	</li>
    	<li>
    	  <div>差异数:</div>
        <p>{{difference}}</p>
    	</li>
    </ul>
  </div>
</template>

<script>
import counTo from 'vue-count-to'
  export default {
    name:'dayModule',
    components:{
      counTo
    },
    data(){
      return{
        demand:100137,//需求数
        qiNumber:100131,//齐套数
        qiRate:100,//齐套率
        difference:0,//差异数
      }
    }
  }
</script>
<style lang="scss" scoped>
    .dayModule{
      width: 7.2rem;
      height: 2.8rem;
      background-color: rgba(80,95,150,0.5);
      ul li{
        width: 3.55rem;
        height: 1.36rem;
        float: left;
        border: 0.02rem solid #ddd;
        div{
          font-size: 0.24rem;
          color: #fff;
          margin-left: 0.3rem;
          margin-top: 0.25rem;
        }
        p{
          color: #fff;
          margin-left: 0.3rem;
          span{
            color:#fff;
            margin-left: 0.04rem;
          }
        }
      }
    }
</style>