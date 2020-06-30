<template>
  <div>
      <!-- 每小时在线网器数量趋势图 -->
    <div id="chartdivb"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted(){
      this.name()
    },
    methods: {
      name() {
     var chartData = generateChartData();

      var chart = AmCharts.makeChart("chartdivb", {
          "type": "serial",
          "theme": "light",
          "dataProvider": chartData,
          "synchronizeGrid":true,
          "valueAxes": [{
              "id":"v1",
              "axisColor": "#0091e1",
              "axisThickness": 0.1,
              "axisAlpha": 0.2,
              "position": "left",
                "totalText":123,
                "gridAlpha":0.1,//x轴的网格颜色
                "inside":false
          }],
          "graphs": [{
              "valueField": "visits",
          }],
          "categoryAxis": {
            labelsEnabled:false,
            offset: 14
          },
          "chartCursor": {
              "cursorPosition": "mouse"
          },
          "chartScrollbar": {//图上的滚动条
            "enabled":false//不启动滚动条
          },
          "categoryField": "date",
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
            {
                date: "23:00",
                visits: 2
            }, {
                date: "1:00",
                visits: 1.8
            }, {
                date: "3:00",
                visits: 1.7
            }, {
                date: "5:00",
                visits: 1.9
            }, {
                date: "7:00",
                visits: 2.1
            }, {
                date: "9:00",
                visits: 3.2
            }, {
                date: "11:00",
                visits: 4
            }
          ];
          return chartData;
      }

      function zoomChart(){
          chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
      }
      setInterval(() => {
            let value = Math.random()
            let data = {
            date: this.getDate(),
            visits: parseInt((value < 0.2 ? value + 0.8 : value) * 10)
            }
            chart.dataProvider = [...chart.dataProvider, data]
            // 限制10调数据
            if (chart.dataProvider.length > 10) {
                chart.dataProvider.splice(0, 1);
            }
            chart.validateData()//刷新数据
        }, 60000)
      },
      getDate() {
        let date = new Date();
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let min = date.getMinutes();
        min = min < 10 ? ('0' + min) : min;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return `${h}:${min}:${s}`;
        }
    },
  }
</script>

<style scoped>
#chartdivb{
	width	: 7.5rem;
	height	: 4rem;
  margin-top: 0.1rem;
}								
</style>

    //     "valueAxes": [{//y轴的显示的数字
    //         "axisAlpha": 0,
    //         "position": "left",
    //         "totalText":123,
    //         "gridAlpha":0.1,//x轴的网格颜色
    //         "inside":false
    //     }],
    //     "graphs": [{//曲线图
    //         "id":"g1",
    //         "balloonText": "[[category]]<br><b><span style='font-size:.28rem;'>[[value]]</span></b>",
    //         "bullet": "round",
    //         "bulletSize": 3,//线上圆点大小
    //         "lineColor": "#e97c74",
    //         "lineThickness": 2,//线条粗细
    //         "negativeLineColor": "#00AAFF",//线条的颜色
    //         "type": "smoothedLine",
    //         "valueField": "value"//点的字段跟value绑定
    //     }],
    //     "chartScrollbar": {//图上的滚动条
    //         "graph":"g1",
    //         "gridAlpha":0,
    //         "color":"#888888",
    //         "scrollbarHeight":55,
    //         "backgroundAlpha":0,
    //         "selectedBackgroundAlpha":0.1,
    //         "selectedBackgroundColor":"#888888",
    //         "graphFillAlpha":0,
    //         "autoGridCount":false,//是否开启显示文字
    //         "selectedGraphFillAlpha":0,
    //         "graphLineAlpha":0.2,
    //         "graphLineColor":"#c2c2c2",
    //         "selectedGraphLineColor":"#888888",
    //         "selectedGraphLineAlpha":1,
    //         "enabled":false//不启动滚动条
    //     },
    //     "chartCursor": {//鼠标方上去显示
    //         "categoryBalloonDateFormat": "YYYY",//悬浮日期格式
    //         "cursorAlpha": 0,
    //         "valueLineEnabled":false,
    //         "valueLineBalloonEnabled":false,
    //         "valueLineAlpha":0.8,
    //         "fullWidth":false,
    //         "valueZoomable":false,//显示show All
    //     },
    //     "dataDateFormat": "YYYY",
    //     "categoryField": "year",//显示名字用的
    //     "categoryAxis" :{//调整网格
    //       'autoGridCount':false,
    //       'gridColor':'#000',
    //       "fontSize":10,
    //       "axisColor":'#00AAFF',
    //     },
    //     "export": {
    //         "enabled": false
    //     }
    // });