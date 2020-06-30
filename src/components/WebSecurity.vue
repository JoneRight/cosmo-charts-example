<template>
  <!-- 首屏-网络安全 -->
  <section>
    <div class="securityBox">
      <div id="security"></div>
      <div class="title" style='margin-top: 0.1rem;font-size: 0.28rem;color: #999;'>
        <h2>阻断次数：<span style='font-size: 0.52rem;color: #f52340;' class="zuduanNumber"></span></h2>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
  #security {
    width: 8.2rem;
    margin-left: -0.4rem;
    height: 7rem;
    font-size: 0.22rem;
  }

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

      let nums = 185803;  // 如果storage里没有就用这个数字
      let data = sessionStorage.getItem('web-security')
      if (data) {
        data = JSON.parse(data)
        nums = parseInt(data['nums'])
      }

      var numRun = $(".zuduanNumber").numberAnimate({ num: nums.toString(), speed: 2000, symbol: "," });
      
      setInterval(function () {
        var temp = Math.max(Math.floor(Math.random() * 10), 1)
        nums += temp;
        numRun.resetData(nums);

        let data = {
          nums: nums
        }
        data = JSON.stringify(data)
        sessionStorage.setItem('web-security', data)

      }, 3000);

      var chartData = generateChartData();

      var chart = AmCharts.makeChart("security", {
        "type": "serial",
        "theme": "light",
        "addClassNames": true,
        "classNamePrefix": "amcharts",
        "legend": {
          "useGraphSettings": true,
          "width": '426',
        },
        "dataProvider": chartData,
        "synchronizeGrid": true,
        "valueAxes": [{
          "id": "v1",
          "axisColor": "#FCD202",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "left",
          "title": "单位-百万"
        }, {
          "id": "v2",
          "axisColor": "#FF6600",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "right",
          "title": "单位-次"
        }],
        "graphs": [{
          "id": 'g1',
          "valueAxis": "v2",
          "lineColor": "#FCD202",
          "bullet": "square",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "访问次数",
          "valueField": "hits",
          "fillAlphas": 0
        },
        {
          "id": "g2",
          "valueAxis": "v1",
          "lineColor": "#FF6600",
          "bullet": "round",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "告警次数",
          "valueField": "visits",
          "fillAlphas": 0
        }],
        "chartScrollbar": {
          "enabled":false//不启动滚动条
        },
        "chartCursor": {
          "cursorPosition": "mouse"
        },
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": true,
          "axisColor": "#DADADA",
          "minorGridEnabled": true,
          // "labelsEnabled": false,
        },
        "export": {
          "enabled": false,
          "position": "bottom-right"
        }
      });

      chart.addListener("dataUpdated", zoomChart);
      zoomChart();


      // generate some random data, quite different range
      function generateChartData() {
        var chartData = [
        // {
        //   date: '2017-04-02',
        //   hits: 70,
        //   visits: 2585
        // },
        // {
        //   date: '2017-04-03',
        //   hits: 72,
        //   visits: 300
        // },
        // {
        //   date: '2017-04-04',
        //   hits: 74,
        //   visits: 3000
        // },
        // {
        //   date: '2017-04-05',
        //   hits: 78,
        //   visits: 4000
        // },
        // {
        //   date: '2017-04-06',
        //   hits: 77,
        //   visits: 5000
        // },
        // {
        //   date: '2017-04-07',
        //   hits: 80,
        //   visits: 8000
        // },
        // {
        //   date: '2017-04-08',
        //   hits: 84,
        //   visits: 5000
        // },
        // {
        //   date: '2017-04-09',
        //   hits: 88,
        //   visits: 3000
        // },
        // {
        //   date: '2017-04-10',
        //   hits: 76,
        //   visits: 1000
        // },
        // {
        //   date: '2017-04-11',
        //   hits: 72,
        //   visits: 800
        // },
        // {
        //   date: '2017-04-12',
        //   hits: 64,
        //   visits: 1230
        // },
        // {
        //   date: '2017-04-13',
        //   hits: 55,
        //   visits: 3200
        // },
        // {
        //   date: '2017-04-14',
        //   hits: 40,
        //   visits: 1200
        // },
        // {
        //   date: '2017-04-15',
        //   hits: 28,
        //   visits: 1100
        // },
        // {
        //   date: '2017-04-16',
        //   hits: 29,
        //   visits: 2100
        // },
        // {
        //   date: '2017-04-17',
        //   hits: 28,
        //   visits: 1000
        // },
        // {
        //   date: '2017-04-18',
        //   hits: 26,
        //   visits: 1320
        // },
        // {
        //   date: '2017-04-19',
        //   hits: 23,
        //   visits: 4000
        // },
        // {
        //   date: '2017-04-20',
        //   hits: 24,
        //   visits: 2000
        // },
        // {
        //   date: '2017-04-21',
        //   hits: 23,
        //   visits: 2100
        // },
        // {
        //   date: '2017-04-22',
        //   hits: 26,
        //   visits: 3000
        // },
        // {
        //   date: '2017-04-23',
        //   hits: 22,
        //   visits: 1200
        // },
        // {
        //   date: '2017-04-24',
        //   hits: 20,
        //   visits: 2530
        // },
        // {
        //   date: '2017-04-25',
        //   hits: 22,
        //   visits: 1200
        // },
        // {
        //   date: '2017-04-26',
        //   hits: 21,
        //   visits: 3450
        // },
        // {
        //   date: '2017-04-27',
        //   hits: 23,
        //   visits: 900
        // },
        // {
        //   date: '2017-04-28',
        //   hits: 20,
        //   visits: 800
        // },
        // {
        //   date: '2017-04-29',
        //   hits: 28,
        //   visits: 1500
        // },
        // {
        //   date: '2017-04-30',
        //   hits: 36,
        //   visits: 2000
        // },
        // {
        //   date: '2017-05-01',
        //   hits: 45,
        //   visits: 1100
        // },
        // {
        //   date: '2017-05-02',
        //   hits: 66,
        //   visits: 2560
        // },
        // {
        //   date: '2017-05-03',
        //   hits: 78,
        //   visits: 1100
        // },
        // {
        //   date: '2017-05-04',
        //   hits: 90,
        //   visits: 900
        // },
        // {
        //   date: '2017-05-05',
        //   hits: 84,
        //   visits: 2100
        // },
        // {
        //   date: '2017-05-06',
        //   hits: 80,
        //   visits: 3120
        // },
        // {
        //   date: '2017-05-07',
        //   hits: 76,
        //   visits: 900
        // },
        // {
        //   date: '2017-05-08',
        //   hits: 60,
        //   visits: 2356
        // },
        // {
        //   date: '2017-05-09',
        //   hits: 50,
        //   visits: 1246
        // }
        ];
        var firstDate = new Date();
        firstDate.setDate(firstDate.getDate() - 22);

            var hits = 3000;
            var visits = 200;
            var views = 8700;
        // chartData.push({
        //   date: firstDate,
        //   visits: 0,
        //   hits: 0
        // });

        var visitsList = [
          0, 10, 50, 100, 120, 120, 130, 125, 130, 135, 124, 110, 100, 90, 87, 70, 60, 80, 89, 130,150, 149
        ]

        var hitsList = [
          0, 1000,   500,  1200, 1200, 200, 1500,  1250, 1300, 1350, 1240, 1300, 1100, 1000, 900, 870, 500, 1000,  500, 890, 1300, 2000
        ]

        for (var i = 0; i < 22; i++) {
            // we create date objects here. In your data, you can have date strings
            // and then set format of your dates using chart.dataDateFormat property,
            // however when possible, use date objects, as this will speed up chart rendering.
            var newDate = new Date(firstDate);
            newDate.setDate(newDate.getDate() + i);

            // visits -= Math.round((Math.random()<0.5?2:-2)*Math.random()*10);
            visits = visitsList[i]
            hits = hitsList[22 - i]
            // hits -= Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
            // views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

            chartData.push({
              date: newDate,
              visits: visits,
              hits: hits,
              views: views
            });
        }
        return chartData;
      }

      function zoomChart() {
        chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
      }
    },
    methods: {}
  }
</script>
