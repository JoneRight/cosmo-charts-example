<template>
  <!-- 二级页面-网络安全 -->
  <section>
    <div class="securityBox">
      
      
      <div class="content contentBoxs" style='width: 100%; height: 2.96rem;position: relative;overflow: visible;'>
        <div class="left" style='left:0;'>
          <h3>攻击来源TOP5<span class="left_top_sec">攻击数</span></h3>
          <ul>
            <li>1.qingdao<span class="left_top_sec_s">128,107</span></li>
            <li>2.内网<span class="left_top_sec_s">13,662</span></li>
            <li>3.beijing<span class="left_top_sec_s">10,512</span></li>
            <li>4.jinan<span class="left_top_sec_s">7,877</span></li>
            <li>5.nanjing<span class="left_top_sec_s">5,840</span></li>
          </ul>
        </div>
        <div id="chartdiv23"></div>
        <div class="right"  style='right:0;'>
          <h3>攻击目标TOP5<span class="right_top_secb">攻击数</span></h3>
          <ul>
            <li>1.集团系统<span class="left_top_sec_se">128,557</span></li>
            <li>2.HOP开发平台<span class="left_top_sec_se">17,247</span></li>
            <li>3.HOP分布式数据中心<span class="left_top_sec_se">12,703</span></li>
            <li>4.人力资源信息网<span class="left_top_sec_se">4,824</span></li>
            <li>5.电脑CMS系统<span class="left_top_sec_se">4,463</span></li>
          </ul>
        </div>
      </div>
      
      
    </div>
  </section>
</template>

<style lang='scss' scoped>
  .securityBox{
    width: 100%;
    display: flex
  }
#chartdiv23{
  flex: 1;
  display: inline-block;
  width	: 19.2rem;
	height: 6rem;
}
.content .left{
  float: left;
  width: 5.6rem; 
  height: 5.2rem;
  background: rgba(250, 250, 250,0.5)
}
.left_top_sec{
  margin-left: 1rem;
}
.right_top_secb{
  margin-left: 1.76rem;
}
.content .right{
  float: right;;
  width: 6.4rem; 
  height: 5.2rem;
  background: rgba(250, 250, 250,0.5)
}
.content h3 {
  line-height: 0.8rem;
  font-size: 0.28rem;
  font-weight: bold;
  color: #666;
  height: 0.8rem;
  margin-left: 0.6rem;
}
.content li{
  list-style: none;
  padding-left: 0.4rem;
  line-height: 0.8rem;
}
.left_top_sec_s{
  float: right;
  display: inline-block;
  width: 3.2rem;
  text-align: center;
  padding-right: 0.16rem;
}
.left_top_sec_se{
  float: right;
  display: inline-block;
  width: 2rem;
  text-align: center;
  padding-right: 0.56rem;
}
</style>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      this.timeList()
    },
    methods: {
        timeList(){
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

      var chart = AmCharts.makeChart("chartdiv23", {
        "type": "serial",
        "theme": "light",
        "addClassNames": true,
        "classNamePrefix": "amcharts",
        "legend": {
          "useGraphSettings": true
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

    }
  }
</script>
