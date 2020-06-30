<template>
  <!-- 首屏-数据运算能力 -->
  <section>
    <div class="operationBox">
      <p>平台可靠性：<span class="blue">{{platform_reliability}}%</span></p>
      <p>平均响应时间：<span class="blue">{{average_response_time}}ms</span></p>
      <p>累计工业数据量：<span class="blue">{{cumulative_industrial_data}}TB</span></p>
      <p>当前并发量：<strong class="red numberRun"></strong></p>
      <div class="cupAndMemory">
        <div>
          <div id='data-cpu'></div>
          <div class="cmFont">
            CPU: {{CPU}}core
          </div>
        </div>
        <div>
          <div id="data-memory"></div>
          <div class="cmFont">
            MEM: {{MEM}}TB
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='less' scoped>
@import "../styles/inline/base.less";
.operationBox {
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
  .cupAndMemory {
    overflow: hidden;
    >div {
      float: left;
      width: 48%;
    }
    >div:nth-child(1) {
      margin-right: 2%;
    }
    .cmFont {
      font-size: 16px;
      color: #333;
      margin-top: -0.5rem;
      text-align: center;
    }
    #data-cpu {
      height: 3.8rem;
    }
    #data-memory {
      height: 3.8rem;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      platform_reliability: 0, // 平台可靠性
      average_response_time: 0, // 平均响应时间
      cumulative_industrial_data: 0, // 累计工业数据量
      current_concurrency: 0, // 当前并发量
      CPU: 0,
      MEM: 0,
      cpuVal: 0,
      memoryVal: 0,
      HDDVal: 0,
      intervalCpu: '',
      intervalMem: '',
      responseTimeInterval: undefined
    }
  },
  methods: {
    generateCpu() {
      const cpuChart = AmCharts.makeChart("data-cpu", {
        "type": "gauge",
        "theme": "light",
        "axes": [ {
          "axisThickness": 1,
          "axisAlpha": 0.2,
          "tickAlpha": 0.2,
          "valueInterval": 20,
          "bands": [ {
            "color": "#ffff",
            "endValue": 0,
            "startValue": 0
          }, {
            "color": "#fdd400",
            "endValue": 80,
            "startValue": 45
          }, {
            "color": "#ddd",
            "endValue": 100,
            "innerRadius": "90%",
            "startValue": 80
          } ],
          "bottomText": "0 %",
          "bottomTextYOffset": -20,
          "endValue": 100
        },{
          "axisColor": "#67b7dc",
          "axisThickness": 3,
          "endValue": 100,
          "gridInside": false,
          "inside": false,
          "radius": "100%",
          "valueInterval": 20,
          "tickColor": "#67b7dc",
           "bands": [ {
            "color": "#f10",
            "endValue": 35,
            "startValue": 0
          }],
        } ],
        "arrows": [ {} ],
        "export": {
          "enabled": false
        }
      });
      this.intervalCpu = setInterval( randomValue, 1000 );
      function randomValue() {
        let arr = [-2 ,-1, -0.5, 0, 0.5, 1, 2];
        let key = Math.round(Math.random() * 6);
        if ( cpuChart ) {
          if ( cpuChart.arrows ) {
            if ( cpuChart.arrows[ 0 ] ) {
              if ( cpuChart.arrows[ 0 ].setValue ) {
                cpuChart.arrows[ 0 ].setValue( 77 + arr[key] );
                cpuChart.axes[ 0 ].setBottomText( 77 + arr[key] + "%" );
              }
            }
          }
        }
      }
    },
    generateMemory() {
      const memoryChart = AmCharts.makeChart("data-memory", {
        "type": "gauge",
        "theme": "light",
        "axes": [ {
          "axisThickness": 1,
          "axisAlpha": 0.2,
          "tickAlpha": 0.2,
          "valueInterval": 20,
          "bands": [ {
            "color": "#ffff",
            "endValue": 0,
            "startValue": 0
          }, {
            "color": "#fdd400",
            "endValue": 80,
            "startValue": 45
          }, {
            "color": "#ddd",
            "endValue": 100,
            "innerRadius": "90%",
            "startValue": 80
          } ],
          "bottomText": "0 %",
          "bottomTextYOffset": -20,
          "endValue": 100
        },{
          "axisColor": "#67b7dc",
          "axisThickness": 3,
          "endValue": 100,
          "gridInside": false,
          "inside": false,
          "radius": "100%",
          "valueInterval": 20,
          "tickColor": "#67b7dc",
           "bands": [ {
            "color": "#f10",
            "endValue": 35,
            "startValue": 0
          }],
        } ],
        "arrows": [ {} ],
        "export": {
          "enabled": false
        }
      });
      this.intervalMem = setInterval( randomValue, 1000 );
      function randomValue() {
        let arr = [-2 ,-1, -0.5, 0, 0.5, 1, 2];
        let key = Math.round(Math.random() * 6);
        if ( memoryChart ) {
          if ( memoryChart.arrows ) {
            if ( memoryChart.arrows[ 0 ] ) {
              if ( memoryChart.arrows[ 0 ].setValue ) {
                memoryChart.arrows[ 0 ].setValue( 83 + arr[key] );
                memoryChart.axes[ 0 ].setBottomText( 83 + arr[key] + "%" );
              }
            }
          }
        }
      }
    },
    changeResponseTime() {
      this.responseTimeInterval = setInterval(() => {
        let temp = Math.max(Math.floor(Math.random() * 10), 5)
        temp = Math.random() > .5 ? (250 + temp) : (250 - temp)
        this.average_response_time = temp
      }, 3000)
    },
    getData() {
      this.$axios({
        url: '/screen/report/list',
        params: {
          level_one: 'platform_resource_management_apability',
          level_two: 'data_operation_management_capability',
          index_en: 'num_managed_computing_power'
        }
      }).then(res => {
        this.platform_reliability = (Number(res.data.list[0].stat_result) * 100).toFixed(3)
        this.average_response_time = Number(res.data.list[1].stat_result)
        this.cumulative_industrial_data = Number(res.data.list[2].stat_result)
        this.current_concurrency = Number(res.data.list[3].stat_result)
        this.CPU = Number(res.data.list[4].stat_result)
        this.MEM = Number(res.data.list[5].stat_result)
      })
    }
  },
  mounted() {
    this.generateCpu()
    this.generateMemory()
    this.changeResponseTime()
    this.getData()

    setTimeout(() => {
      this.cpuVal = 52
      this.memoryVal = 68
      this.HDDVal = 75
    }, 300);

    let count = this.current_concurrency;
    let data = sessionStorage.getItem("data-operation-number-run");
    if (data) {
      data = JSON.parse(data);
      count = parseInt(data["nums"]);
      // console.log("count 1111", count);
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
    clearInterval(this.intervalCpu)
    clearInterval(this.intervalMem)
    this.responseTimeInterval && clearInterval(this.responseTimeInterval)
  },
};
</script>
