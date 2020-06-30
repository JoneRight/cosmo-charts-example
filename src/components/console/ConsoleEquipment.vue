<template>
  <div>
      <!-- 月度累计 -->
    <div id="chartdivbf"></div>
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

      var chart = AmCharts.makeChart("chartdivbf", {
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
                    date: "五月",
                    visits: 3.5
                }, {
                    date: "六月",
                    visits: 4
                }, {
                    date: "七月",
                    visits: 3.2
                }, {
                    date: "八月",
                    visits: 3.3
                }, {
                    date: "九月",
                    visits: 3.6
                }, {
                    date: "十月",
                    visits: 3.9
                }, {
                    date: "十一月",
                    visits: 4
                }, {
                    date: "十二月",
                    visits: 4.1
                }, {
                    date: "一月",
                    visits: 3.9
                }, {
                    date: "二月",
                    visits: 3.5
                }, {
                    date: "三月",
                    visits: 3.4
                }, {
                    date: "四月",
                    visits: 3.7
                }, {
                    date: "五月",
                    visits: 3.7
                }
          ];
          return chartData;
      }

      function zoomChart(){
          chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
      }
      }
    },
  }
</script>

<style scoped>
#chartdivbf {
	width	: 7.5rem;
	height	: 4.5rem;
  margin-top: 0.1rem;
}								
</style>


//  name() {
//       var chart = AmCharts.makeChart("chartdivbf", {
//         "type": "serial",
//         "theme": "light",
//         "marginTop":0,
//         "marginRight": 80,
//         'fontSize':11,
//         "dataProvider": [
    // {
//             "year": "五月",
//             "value": 3.5
//         }, {
//             "year": "六月",
//             "value": 4
//         }, {
//             "year": "七月",
//             "value": 3.2
//         }, {
//             "year": "八月",
//             "value": 3.3
//         }, {
//             "year": "九月",
//             "value": 3.6
//         }, {
//             "year": "十月",
//             "value": 3.9
//         }, {
//             "year": "十一月",
//             "value": 4
//         }, {
//             "year": "十二月",
//             "value": 4.1
//         }, {
//             "year": "一月",
//             "value": 3.9
//         }, {
//             "year": "二月",
//             "value": 3.5
//         }, {
//             "year": "三月",
//             "value": 3.4
//         }, {
//             "year": "四月",
//             "value": 3.7
//         }, {
//             "year": "五月",
//             "value": 3.7
//         }],
//         "valueAxes": [{//y轴的显示的数字
//             "axisAlpha": 0,
//             "position": "left",
//             "totalText":123,
//             "gridAlpha":0.1,//x轴的网格颜色
//             "inside":false
//         }],
//         "graphs": [{//曲线图
//             "id":"g1",
//             "balloonText": "[[category]]<br><b><span style='font-size:.28rem;'>[[value]]</span></b>",
//             "bullet": "round",
//             "bulletSize": 3,//线上圆点大小
//             "lineColor": "#e97c74",
//             "lineThickness": 2,//线条粗细
//             "negativeLineColor": "#00AAFF",//线条的颜色
//             "type": "smoothedLine",
//             "valueField": "value"//点的字段跟value绑定
//         }],
//         "chartScrollbar": {//图上的滚动条
//             "graph":"g1",
//             "gridAlpha":0,
//             "color":"#888888",
//             "scrollbarHeight":55,
//             "backgroundAlpha":0,
//             "selectedBackgroundAlpha":0.1,
//             "selectedBackgroundColor":"#888888",
//             "graphFillAlpha":0,
//             "autoGridCount":false,//是否开启显示文字
//             "selectedGraphFillAlpha":0,
//             "graphLineAlpha":0.2,
//             "graphLineColor":"#c2c2c2",
//             "selectedGraphLineColor":"#888888",
//             "selectedGraphLineAlpha":1,
//             "enabled":false//不启动滚动条
//         },
//         "chartCursor": {//鼠标方上去显示
//             "categoryBalloonDateFormat": "YYYY",//悬浮日期格式
//             "cursorAlpha": 0,
//             "valueLineEnabled":false,
//             "valueLineBalloonEnabled":false,
//             "valueLineAlpha":0.8,
//             "fullWidth":false
//         },
//         "dataDateFormat": "YYYY",
//         "categoryField": "year",//显示名字用的
//         "categoryAxis" :{//调整网格
//           'autoGridCount':false,
//           'gridColor':'#000',
//           "fontSize":10,
//           "axisColor":'#00AAFF',
//         },
//         "export": {
//             "enabled": false
//         }
//     });

// chart.addListener("rendered", zoomChart);
// if(chart.zoomChart){
// 	chart.zoomChart();
// }

// function zoomChart(){
//     chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
// }
//       }