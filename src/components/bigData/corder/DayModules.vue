<template>
  <div class="dayModules">
    <ul>
    	<li>
    	  <div>互联设备:</div>
        <p><coun-to :starVal='0' :endVal='interconnection' :duration='3000'/><span>台</span></p>
    	</li>
    	<li>
    	  <div>运行设备:</div>
        <p><coun-to :starVal='0' :endVal='operating' :duration='3000'/><span>台</span></p>
    	</li>
    	<li>
    	  <div>设备OEE:</div>
        <p>{{oee}}<span>%</span></p>
    	</li>
    	<li>
    	  <div>待机设备:</div>
        <p><coun-to :starVal='0' :endVal='standby' :duration='3000'/><span>台</span></p>
    	</li>
    </ul>
  </div>
</template>

<script>
  import counTo from 'vue-count-to'
  export default {
    name:'dayModules',
    components:{
      counTo
    },
    data(){
      return{
        interconnection:2578,//互联设备
        operating:2391,//运行设备
        oee:81,//设备OEE
        standby:187,//待机设备
      }
    }
  }
</script>
<style lang="scss" scoped>
    .dayModules{
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