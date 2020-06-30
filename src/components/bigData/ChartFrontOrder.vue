<template>
  <div class="chartFrontOrder">
      <div class="cdo_order">
        <h3>当前订单完成率 <br/><span>CURRENT ORDER COMPLETION RATE</span></h3>
        <DayCoders/>
      </div>
      <div class="cdo_order">
        <h3>设备 <span>EQUIPMENT</span></h3>
          <DayModules/>
      </div>
      <div class="cdo_order">
        <h3>效率 <span>EFFICIENCY</span></h3>
          <DayCharts/>
      </div>
  </div>
</template>

<script>
  import DayCoders from './corder/DayCoders.vue'
  import DayModules from './corder/DayModules.vue'
  import DayCharts from './corder/DayCharts.vue'
  export default{
    name:'chartFrontOrder',
    components:{
      DayCoders,
      DayModules,
      DayCharts
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
h3:nth-child(1){
  margin-top: .7rem;
}
</style>