<template>
  <section class="interlBox">
    <!-- 数据运营中心 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" id="interlBox-left">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据运营中心</el-breadcrumb-item>
      </el-breadcrumb>
    <div class="interl_top">
        <div>COSMOPlat数据运营中心</div>
    </div>
    <div class="cdo_top">
      <div class="special-border"></div>
      <PerOperation/>
    </div>
    <div class="op_cdo_right">
      <PerMap/>
    </div>
      
    <div class="op_cdo_leftBot">
      <PerChart/>
    </div>
  </section>
</template>

<script>
  import PerOperation from '../../components/oper/PerOperation.vue'
  import PerMap from '../../components/oper/PerMap.vue'
  import PerChart from '../../components/oper/PerChart.vue'
  export default {
    name:'interlBox',
    components:{
      PerOperation,//当前并发量
      PerMap,//右侧地图
      PerChart,//数据库分类
    }
  }
</script>

<style scoped lang="scss">
  html,body{
    width: 100%;
    height: 100%;
  }
  #interlBox-left{
    position: absolute;
    left: 1.8rem;
    top: 0.6rem;
  }
 .interl_top{
    position: absolute;
    left: 50%;
    top: 0.34rem;
    width:15rem;
    margin-left: -7.1rem;
  }
  .interl_top>div{
    font-size: 44px;
    color: #0191e1;
    font-weight: 900;
    display: inline-block;
    height: 1.2rem;
    line-height: 1.2rem;
    vertical-align: top;
  }
  .cdo_top{
    position: relative;
    width: 9rem;
    padding: 0 1rem 0.2rem 1rem;
    margin-top:1rem;
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
    left: 0.8rem;
    top: 1rem;
    width: 0.32rem;
    height: 0.2rem;
    background-color: #d8d9da;
  }
  .cdo_top_border_right{
    position: absolute;
    right: 0.8rem;
    top: 1rem;
    width: 0.32rem;
    height: 0.2rem;
    background-color: #d8d9da;
  }
  .op_cdo_right{
    position: absolute;
    right: 0.3rem;
    top: 3rem;
    width: 72%;
  }
  .op_cdo_ri{
    position: absolute;
    left: 10rem;
    width: 20rem;
    bottom: 0.5rem;
  }
  .op_cdo_leftBot{
    width: 4rem;
    padding: 0 1rem;
  }
  .special-border {
    margin-top: 3rem;
    width: 100%;
    height: 2px;
    background-color: #d8d9da;
    position: relative;
    &::before, &::after {
      content: '';
      height: 10px;
      width: 16px;
      background-color: #d8d9da;
      position: absolute;
      z-index: 1;
      top: -4px;
    }
    &::after {
      right: 0;
    }
    &::before {
      left: 0;
    }
  }
</style>