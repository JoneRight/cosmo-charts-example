<template>
  <!-- 首屏-用户增长趋势 -->
  <section>
    <div id="userAmountTrend" class="userAmountTrendChart"></div>	
  </section>
</template>

<style lang='scss'>
   #userAmountTrend {
    width		: 100%;
    height		: 4.2rem;
    margin-top: 0.2rem;
    font-size	: 11px;
  }
  @media screen and (min-width: 3000px) {
    #userAmountTrend {
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

      var chart = AmCharts.makeChart("userAmountTrend", {
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
          "axisColor": "#fbe639",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "left"
        }],
        "graphs": [{
          "lineColor": "#fbe639",
          "bullet": "round",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "当前用户量",
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
          "axisColor": "#fbe639",
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
            },
            {
            date: '2018-03-02',
            hits: 66,
            visits: 1002
            },
            {
            date: '2018-03-03',
            hits: 78,
            visits: 1009
            },
            {
            date: '2018-03-04',
            hits: 90,
            visits: 1095
            },
            {
            date: '2018-03-05',
            hits: 84,
            visits: 1953
            },
            {
            date: '2018-03-06',
            hits: 80,
            visits: 2331
            },
            {
            date: '2018-03-07',
            hits: 76,
            visits: 3332
            },
            {
            date: '2018-03-08',
            hits: 60,
            visits: 5333
            },
            {
            date: '2018-03-09',
            hits: 50,
            visits: 10332
            },
            {
            date: '2018-03-10',
            hits: 50,
            visits: 11411
            },
            {
            date: '2018-03-11',
            hits: 50,
            visits: 11588
            },
            {
            date: '2018-03-12',
            hits: 50,
            visits: 12623
            },
            {
            date: '2018-03-13',
            hits: 50,
            visits: 15723
            },
            {
            date: '2018-03-14',
            hits: 50,
            visits: 16900
            },
            {
            date: '2018-03-15',
            hits: 50,
            visits: 16919
            },
            {
            date: '2018-03-16',
            hits: 50,
            visits: 18949
            },
            {
            date: '2018-03-17',
            hits: 50,
            visits: 21056
            },
            {
            date: '2018-03-18',
            hits: 50,
            visits: 25168
            },
            {
            date: '2018-03-19',
            hits: 50,
            visits: 26376
            },
            {
            date: '2018-03-20',
            hits: 50,
            visits: 26436
            },
            {
            date: '2018-03-21',
            hits: 50,
            visits: 26685
            },
            {
            date: '2018-03-22',
            hits: 50,
            visits: 27764
            },
            {
            date: '2018-03-23',
            hits: 50,
            visits: 29077
            },
            {
            date: '2018-03-24',
            hits: 50,
            visits: 31125
            },
            {
            date: '2018-03-25',
            hits: 50,
            visits: 33333
            },
            {
            date: '2018-03-26',
            hits: 50,
            visits: 39542
            },
            {
            date: '2018-03-27',
            hits: 50,
            visits: 40555
            },
            {
            date: '2018-03-28',
            hits: 50,
            visits: 49838
            },
            {
            date: '2018-03-29',
            hits: 50,
            visits: 51522
            },
            {
            date: '2018-03-30',
            hits: 50,
            visits: 55756
            },
            {
            date: '2018-03-31',
            hits: 50,
            visits: 64999
            },
            {
            date: '2018-04-01',
            hits: 70,
            visits: 75132
            },
            {
            date: '2018-04-02',
            hits: 70,
            visits: 75555
            },
            {
            date: '2018-04-03',
            hits: 72,
            visits: 85858
            },
            {
            date: '2018-04-04',
            hits: 74,
            visits: 95999
            },
            {
            date: '2018-04-05',
            hits: 78,
            visits: 116254
            },
            {
            date: '2018-04-06',
            hits: 77,
            visits: 136465
            },
            {
            date: '2018-04-07',
            hits: 80,
            visits: 166666
            },
            {
            date: '2018-04-08',
            hits: 84,
            visits: 186868
            },
            {
            date: '2018-04-09',
            hits: 88,
            visits: 227010
            },
            {
            date: '2018-04-10',
            hits: 76,
            visits: 276356
            },
            {
            date: '2018-04-11',
            hits: 72,
            visits: 294650
            },
            {
            date: '2018-04-12',
            hits: 64,
            visits: 325351
            },
            {
            date: '2018-04-13',
            hits: 55,
            visits: 376894
            },
            {
            date: '2018-04-14',
            hits: 40,
            visits: 397777
            },
            {
            date: '2018-04-15',
            hits: 28,
            visits: 405523
            },
            {
            date: '2018-04-16',
            hits: 29,
            visits: 425682
            },
            {
            date: '2018-04-17',
            hits: 28,
            visits: 438888
            },
            {
            date: '2018-04-18',
            hits: 26,
            visits: 458999
            },
            {
            date: '2018-04-19',
            hits: 23,
            visits: 469243
            },
            {
            date: '2018-04-20',
            hits: 24,
            visits: 469689
            },
            {
            date: '2018-04-21',
            hits: 23,
            visits: 469999
            },
            {
            date: '2018-04-22',
            hits: 26,
            visits: 470111
            },
            {
            date: '2018-04-23',
            hits: 22,
            visits: 481111
            },
            {
            date: '2018-04-24',
            hits: 20,
            visits: 491980
            },
            {
            date: '2018-04-25',
            hits: 22,
            visits: 502560
            },
            {
            date: '2018-04-26',
            hits: 21,
            visits: 512955
            },
            {
            date: '2018-04-27',
            hits: 23,
            visits: 513111
            },
            {
            date: '2018-04-28',
            hits: 20,
            visits: 513535
            },
            {
            date: '2018-04-29',
            hits: 28,
            visits: 513999
            },
            {
            date: '2018-04-30',
            hits: 36,
            visits: 524000
            },
            {
            date: '2018-05-01',
            hits: 70,
            visits: 534111
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
