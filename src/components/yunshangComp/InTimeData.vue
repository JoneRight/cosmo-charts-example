<template>
  <!-- 首屏-智能产品实时销量 -->
  <section>
    <div class="securityBox">
      <div class="title" style='margin-top: 0.1rem;font-size: 0.28rem;color: #999;'>
        <h2>当前智能设备销量：<span style='font-size: 0.52rem;color: #f52340;' class="smartProNum"></span></h2>
      </div>
    </div>
  </section>
</template>

<style lang='scss'>
  .content .left,
  .content .right {
    width: 100%;
    height: 3rem;
    background: rgb(250, 250, 250)
  }

  .content h3 {
    line-height: 0.8rem;
    font-size: 0.28rem;
    font-weight: bold;
    color: #666;
    height: 0.8rem;
  }
  .content h3 span{
    margin-left: 0.3rem;
  }
  .content .ml{
    margin-left: 4rem
  }

  .content li {
    list-style: none;
    padding-left: 0.3rem;
  }
  .content li span{
    float: right;
    padding-right: 0.36rem;
  }

  .amcharts-graph-g1 .amcharts-graph-line {
    -webkit-animation: am-pulsate-line 1s linear infinite;
    animation: am-pulsate-line 1s linear infinite;
  }

  .amcharts-graph-g2 .amcharts-graph-line {
    -webkit-animation: am-pulsate-line 1s linear infinite;
    animation: am-pulsate-line 1s linear infinite;
  }

  @media screen and (min-width: 3000px) {
    #security {
      width: 100%;
      height: 7.5rem;
      font-size: 11px;
    }
  }
</style>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {

      let nums = 1162213; 
      let data = sessionStorage.getItem('smart-product')
      if (data) {
        data = JSON.parse(data)
        nums = parseInt(data['nums'])
      }

      var numRun = $(".smartProNum").numberAnimate({ num: nums.toString(), speed: 2000, symbol: "," });
      
      setInterval(function () {
        var temp = Math.max(Math.floor(Math.random() * 10), 1)
        nums += temp;
        numRun.resetData(nums);

        let data = {
          nums: nums
        }
        data = JSON.stringify(data)
        sessionStorage.setItem('smart-product', data)

      }, 4000);

    },
    methods: {}
  }
</script>
