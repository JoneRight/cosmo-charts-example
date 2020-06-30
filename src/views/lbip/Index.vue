<template>
  <section class="interlBox">
    <!-- 网络安全态势 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" id="interlBox-left">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>网络安全</el-breadcrumb-item>
      </el-breadcrumb>
    <LbipMap class="interlBox_top"></LbipMap>
    <LbipBottom id="nac"></LbipBottom>
  </section>
</template>

<script>
  import LbipMap from '@/components/Lbip/LbipMap.vue'
  import LbipBottom from '@/components/Lbip/LbipBottom.vue'
  export default {
    components:{
      LbipMap,//地图，标题等信息
      LbipBottom,//告警次数等
    }
  }
</script>

<style scoped>
  html, body{
    width: 100%;
    height: 100%;
  }
  #nac{
    width: 83%;
    height: 7rem;
    margin-right: 8%;
    margin-top: 0.3rem;
  }
  #interlBox-left{
    position: absolute;
    left: 1.8rem;
    top: 0.6rem;
    z-index: 88
  }
</style>