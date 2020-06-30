<template>
  <div class="chartDayOrder">
    <div class="cdo_order">
      <h3>当日订单完成率 <br/><span>ORDER COMPLETION RATEONTHEDAY</span></h3>
      <DayCoder/>
    </div>
    <div class="cdo_order">
      <h3>模块 <span>MODULAR</span></h3>
      <DayModule/>
    </div>
    <div class="cdo_order">
      <h3>不良<span>UNHEALTHY</span></h3>
      <DayChart/>
    </div>
  </div>
</template>

<script>
  import DayCoder from './corder/DayCoder.vue';
  import DayModule from './corder/DayModule.vue';
  import DayChart from './corder/DayChart.vue';
  export default{
    name:'chartFrontOrder',
    components:{
      DayCoder,
      DayModule,
      DayChart
    },
    data(){
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.chartDayOrder{
  width: 8.4rem;
  margin-top: 0.6rem;
}
.cdo_top_border{
  margin-top: 0.12rem;
  width: 100%;
  height: 0.04rem;
  background-color: #d8d9da;
  position: relative;
}
.cdo_top_border_left{
  position: absolute;
  left: 0;
  top: 0.02rem;
  width: 0.32rem;
  height: 0.2rem;
  background-color: #d8d9da;
}
.cdo_top_border_right{
  position: absolute;
  right: 0;
  top: 0.02rem;
  width: 0.32rem;
  height: 0.2rem;
  background-color: #d8d9da;
}
.cdo_order{
  margin: 0.2rem 0 0 0.4rem;
  h3{
    font-size: 0.32rem;
    height: 0.6rem;
    line-height: 0.4rem;
    font-weight: bold;
    color: #0091e1;
  }
  span{
    font-size: 0.24rem;
  }
}
</style>