<template>
  <!-- 首屏-设备销量趋势 -->
  <section>
    <div id="smartPruductsSalesTrend" class="smartPruductsSalesTrendChart"></div>	
  </section>
</template>

<style lang='scss'>
   #smartPruductsSalesTrend {
    width		: 100%;
    height		: 4.2rem;
    margin-top: 0.2rem;
    font-size	: 11px;
  }
  @media screen and (min-width: 3000px) {
    #smartPruductsSalesTrend {
      width: 100%;
      height: 4rem;
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

      var chartData = generateChartData();

      var chart = AmCharts.makeChart("smartPruductsSalesTrend", {
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
          "axisColor": "#9fe6b8",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "left"
        }],
        "graphs": [{
          "lineColor": "#9fe6b8",
          "bullet": "round",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "当前智能设备销量",
          "valueField": "visits",
          "fillAlphas": 0
        }],
        "chartScrollbar": {},
        "chartCursor": {
          "cursorPosition": "mouse"
        },
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": true,
          "axisColor": "#9fe6b8",
          "minorGridEnabled": true
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
            {
            date: '2018-03-01',
            hits: 45,
            visits: 20222
            },
            {
            date: '2018-03-02',
            hits: 66,
            visits: 20531
            },
            {
            date: '2018-03-03',
            hits: 78,
            visits: 20622
            },
            {
            date: '2018-03-04',
            hits: 90,
            visits: 20699
            },
            {
            date: '2018-03-05',
            hits: 84,
            visits: 20711
            },
            {
            date: '2018-03-06',
            hits: 80,
            visits: 20900
            },
            {
            date: '2018-03-07',
            hits: 76,
            visits: 20953
            },
            {
            date: '2018-03-08',
            hits: 60,
            visits: 20999
            },
            {
            date: '2018-03-09',
            hits: 50,
            visits: 30112
            },
            {
            date: '2018-03-10',
            hits: 50,
            visits: 30258
            },
            {
            date: '2018-03-11',
            hits: 50,
            visits: 30600
            },
            {
            date: '2018-03-12',
            hits: 50,
            visits: 30688
            },
            {
            date: '2018-03-13',
            hits: 50,
            visits: 30899
            },
            {
            date: '2018-03-14',
            hits: 50,
            visits: 99135
            },
            {
            date: '2018-03-15',
            hits: 50,
            visits: 99356
            },
            {
            date: '2018-03-16',
            hits: 50,
            visits: 99444
            },
            {
            date: '2018-03-17',
            hits: 50,
            visits: 99687
            },
            {
            date: '2018-03-18',
            hits: 50,
            visits: 99888
            },
            {
            date: '2018-03-19',
            hits: 50,
            visits: 150032
            },
            {
            date: '2018-03-20',
            hits: 50,
            visits: 162520
            },
            {
            date: '2018-03-21',
            hits: 50,
            visits: 190868
            },
            {
            date: '2018-03-22',
            hits: 50,
            visits: 199999
            },
            {
            date: '2018-03-23',
            hits: 50,
            visits: 205686
            },
            {
            date: '2018-03-24',
            hits: 50,
            visits: 315685
            },
            {
            date: '2018-03-25',
            hits: 50,
            visits: 321035
            },
            {
            date: '2018-03-26',
            hits: 50,
            visits: 330561
            },
            {
            date: '2018-03-27',
            hits: 50,
            visits: 344598
            },
            {
            date: '2018-03-28',
            hits: 50,
            visits: 351268
            },
            {
            date: '2018-03-29',
            hits: 50,
            visits: 359835
            },
            {
            date: '2018-03-30',
            hits: 50,
            visits: 365861
            },
            {
            date: '2018-03-31',
            hits: 50,
            visits: 375683
            },
            {
            date: '2018-04-01',
            hits: 70,
            visits: 405963
            },
            {
            date: '2018-04-02',
            hits: 70,
            visits: 413564
            },
            {
            date: '2018-04-03',
            hits: 72,
            visits: 425384
            },
            {
            date: '2018-04-04',
            hits: 74,
            visits: 442682
            },
            {
            date: '2018-04-05',
            hits: 78,
            visits: 485351
            },
            {
            date: '2018-04-06',
            hits: 77,
            visits: 495254
            },
            {
            date: '2018-04-07',
            hits: 80,
            visits: 495268
            },
            {
            date: '2018-04-08',
            hits: 84,
            visits: 512354
            },
            {
            date: '2018-04-09',
            hits: 88,
            visits: 519654
            },
            {
            date: '2018-04-10',
            hits: 76,
            visits: 521652
            },
            {
            date: '2018-04-11',
            hits: 72,
            visits: 526835
            },
            {
            date: '2018-04-12',
            hits: 64,
            visits: 531648
            },
            {
            date: '2018-04-13',
            hits: 55,
            visits: 555555
            },
            {
            date: '2018-04-14',
            hits: 40,
            visits: 568315
            },
            {
            date: '2018-04-15',
            hits: 28,
            visits: 581652
            },
            {
            date: '2018-04-16',
            hits: 29,
            visits: 602351
            },
            {
            date: '2018-04-17',
            hits: 28,
            visits: 635213
            },
            {
            date: '2018-04-18',
            hits: 26,
            visits: 642338
            },
            {
            date: '2018-04-19',
            hits: 23,
            visits: 666882
            },
            {
            date: '2018-04-20',
            hits: 24,
            visits: 671212
            },
            {
            date: '2018-04-21',
            hits: 23,
            visits: 679999
            },
            {
            date: '2018-04-22',
            hits: 26,
            visits: 715362
            },
            {
            date: '2018-04-23',
            hits: 22,
            visits: 723564
            },
            {
            date: '2018-04-24',
            hits: 20,
            visits: 769234
            },
            {
            date: '2018-04-25',
            hits: 22,
            visits: 779923
            },
            {
            date: '2018-04-26',
            hits: 21,
            visits: 815364
            },
            {
            date: '2018-04-27',
            hits: 23,
            visits: 853156
            },
            {
            date: '2018-04-28',
            hits: 20,
            visits: 861534
            },
            {
            date: '2018-04-29',
            hits: 28,
            visits: 883516
            },
            {
            date: '2018-04-30',
            hits: 36,
            visits: 925364
            },
            {
            date: '2018-05-01',
            hits: 70,
            visits: 953416
            },
            {
            date: '2018-05-02',
            hits: 70,
            visits: 1013523
            },
            {
            date: '2018-05-03',
            hits: 70,
            visits: 1085353
            },
            {
            date: '2018-05-04',
            hits: 70,
            visits: 1105215
            },
            {
            date: '2018-05-05',
            hits: 70,
            visits: 1135682
            },
            {
            date: '2018-05-06',
            hits: 70,
            visits: 1153561
            }
          ];
        
        return chartData;
      }

      function zoomChart() {
        chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
      }
    },
    methods: {}
  }
</script>
