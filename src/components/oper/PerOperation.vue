<template>
  <!-- 首屏-数据运算能力 -->
  <section>
    <div class="operationBox">
      <h4 class="oper_num">当前并发量</h4>
      <strong class="red numberRun"></strong>
      <dl>
        <dt>CPU核数及使用率({{cpuVal}}%)</dt>
        <dd>
          <span :style="'width: ' + cpuVal + '%;'"><label>{{cpuVal}}%</label></span>
        </dd>
        <dt>CPU:45,762core</dt>
      </dl>
      <dl>
        <dt>内存容量及使用率({{memoryVal}}%)</dt>
        <dd>
          <span :style="'width: ' + memoryVal + '%;'"><label>{{memoryVal}}%</label></span>
        </dd>
        <dt>MEM:225TB</dt>
      </dl>
      <dl>
        <dt>硬盘容量及使用率({{HDDVal}}%)</dt>
        <dd>
          <span :style="'width: ' + HDDVal + '%;'"><label>{{HDDVal}}%</label></span>
        </dd>
        <p>DISK:6.4PB</p>
      </dl>
    </div>
  </section>
</template>

<style lang='less' scoped>
  @import "../../styles/inline/base.less";
  .operationBox {
    width: 8rem;
    height: 9rem;
    color: #999;
    span.blue {
      color: @blue;
      font-size: 16px;
    }
    strong.red {
      color: #f52340;
      font-size: 26px;
    }
    p {
      line-height: 30px;
    }
    dl {
      padding: 5px 0;
    dt {
      line-height: 30px;
    }
    dd {
      height: 30px;
      background: #f1f1f1;
      span {
        position: relative;
        color: #fff;
        display: inline-block;
        height: 30px;
        background: #84c4e2;
        .transition(all 1s linear);
        label{
          position: absolute;
          right: 0.1rem;
          line-height: 0.7rem;
        }
      }
    }
  }
}
  .oper_num{
    font-size: 18px;
    color: #00AAFF;
    font-weight: 800;
    height: 1.2rem;
    line-height: 1.2rem;
  }
</style>

<script>
export default {
  data() {
    return {
      cpuVal: 0,
      memoryVal: 0,
      HDDVal: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.cpuVal = 52
      this.memoryVal = 68
      this.HDDVal = 75
    }, 300);
    
    let count = 14111557;
    let data = sessionStorage.getItem("data-operation-number-run");
    if (data) {
      data = JSON.parse(data);
      count = parseInt(data["nums"]);
    }
    this.$nextTick(() => {
      var numRun2 = $(".numberRun").numberAnimate({
        num: count.toString(),
        speed: 2000,
        symbol: ","
      });
      var nums2 = count;
      setInterval(function() {
        var temp = Math.max(Math.floor(Math.random() * 5), 1);
        nums2 += temp;
        numRun2.resetData(nums2);
        let data = {
          nums: nums2
        };
        let str = JSON.stringify(data);
        sessionStorage.setItem('data-operation-number-run', str);
      }, 3800);
    });
  },
  beforeDestroy() {
    console.log('before destory: ', this.nums2)
  },
  methods: {}
};
</script>
