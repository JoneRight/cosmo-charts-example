<template>
  <!-- 首屏-门店增长趋势 -->
  <section>
    <div id="storeAmountTrend" class="storeAmountTrendChart"></div>	
  </section>
</template>

<style lang='scss'>
   #storeAmountTrend {
    width		: 100%;
    height		: 4.2rem;
    margin-top: 0.2rem;
    font-size	: 11px;
  }
  @media screen and (min-width: 3000px) {
    #storeAmountTrend {
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

      var chart = AmCharts.makeChart("storeAmountTrend", {
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
          "axisColor": "#45c0f1",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "left"
        }],
        "graphs": [{
          "lineColor": "#45c0f1",
          "bullet": "round",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "当前门店总量",
          "valueField": "visits",
          "fillAlphas": 0}],
        "chartScrollbar": {},
        "chartCursor": {
          "cursorPosition": "mouse"
        },
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": true,
          "axisColor": "#45c0f1",
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
            date: '2018-02-01',
            hits: 70,
            visits: 10},
            {
            date: '2018-02-02',
            hits: 70,
            visits: 110},
            {
            date: '2018-02-03',
            hits: 72,
            visits: 110},
            {
            date: '2018-02-04',
            hits: 74,
            visits: 110},
            {
            date: '2018-02-05',
            hits: 78,
            visits: 210},
            {
            date: '2018-02-06',
            hits: 77,
            visits: 210},
            {
            date: '2018-02-07',
            hits: 80,
            visits: 210},
            {
            date: '2018-02-08',
            hits: 84,
            visits: 210},
            {
            date: '2018-02-09',
            hits: 88,
            visits: 510},
            {
            date: '2018-02-10',
            hits: 76,
            visits: 510},
            {
            date: '2018-02-11',
            hits: 72,
            visits: 510},
            {
            date: '2018-02-12',
            hits: 64,
            visits: 510},
            {
            date: '2018-02-13',
            hits: 55,
            visits: 610},
            {
            date: '2018-02-14',
            hits: 40,
            visits: 710},
            {
            date: '2018-02-15',
            hits: 28,
            visits: 710},
            {
            date: '2018-02-16',
            hits: 29,
            visits: 810},
            {
            date: '2018-02-17',
            hits: 28,
            visits: 810},
            {
            date: '2018-02-18',
            hits: 26,
            visits: 810},
            {
            date: '2018-02-19',
            hits: 23,
            visits: 810},
            {
            date: '2018-02-20',
            hits: 24,
            visits: 910},
            {
            date: '2018-02-21',
            hits: 23,
            visits: 910},
            {
            date: '2018-02-22',
            hits: 26,
            visits: 910},
            {
            date: '2018-02-23',
            hits: 22,
            visits: 1010},
            {
            date: '2018-02-24',
            hits: 20,
            visits: 1010},
            {
            date: '2018-02-25',
            hits: 22,
            visits: 1110},
            {
            date: '2018-02-26',
            hits: 21,
            visits: 1310},
            {
            date: '2018-02-27',
            hits: 23,
            visits: 1310},
            {
            date: '2018-02-28',
            hits: 20,
            visits: 1310},
            {
            date: '2018-03-01',
            hits: 45,
            visits: 1310},
            {
            date: '2018-03-02',
            hits: 66,
            visits: 1310},
            {
            date: '2018-03-03',
            hits: 78,
            visits: 1310},
            {
            date: '2018-03-04',
            hits: 90,
            visits: 1310},
            {
            date: '2018-03-05',
            hits: 84,
            visits: 1310},
            {
            date: '2018-03-06',
            hits: 80,
            visits: 1310},
            {
            date: '2018-03-07',
            hits: 76,
            visits: 1310},
            {
            date: '2018-03-08',
            hits: 60,
            visits: 1310},
            {
            date: '2018-03-09',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-10',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-11',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-12',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-13',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-14',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-15',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-16',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-17',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-18',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-19',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-20',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-21',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-22',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-23',
            hits: 50,
            visits: 1310},
            {
            date: '2018-03-24',
            hits: 50,
            visits: 1610},
            {
            date: '2018-03-25',
            hits: 50,
            visits: 1610},
            {
            date: '2018-03-26',
            hits: 50,
            visits: 1710},
            {
            date: '2018-03-27',
            hits: 50,
            visits: 1810},
            {
            date: '2018-03-28',
            hits: 50,
            visits: 2010},
            {
            date: '2018-03-29',
            hits: 50,
            visits: 2010},
            {
            date: '2018-03-30',
            hits: 50,
            visits: 2010},
            {
            date: '2018-03-31',
            hits: 50,
            visits: 2010},
            {
            date: '2018-04-01',
            hits: 70,
            visits: 2010},
            {
            date: '2018-04-02',
            hits: 70,
            visits: 2210},
            {
            date: '2018-04-03',
            hits: 72,
            visits: 2410},
            {
            date: '2018-04-04',
            hits: 74,
            visits: 2510},
            {
            date: '2018-04-05',
            hits: 78,
            visits: 2510},
            {
            date: '2018-04-06',
            hits: 77,
            visits: 2710},
            {
            date: '2018-04-07',
            hits: 80,
            visits: 2910},
            {
            date: '2018-04-08',
            hits: 84,
            visits: 3010},
            {
            date: '2018-04-09',
            hits: 88,
            visits: 3410},
            {
            date: '2018-04-10',
            hits: 76,
            visits: 3910},
            {
            date: '2018-04-11',
            hits: 72,
            visits: 4010},
            {
            date: '2018-04-12',
            hits: 64,
            visits: 4010},
            {
            date: '2018-04-13',
            hits: 55,
            visits: 4010},
            {
            date: '2018-04-14',
            hits: 40,
            visits: 4210},
            {
            date: '2018-04-15',
            hits: 28,
            visits: 4310},
            {
            date: '2018-04-16',
            hits: 29,
            visits: 4610},
            {
            date: '2018-04-17',
            hits: 28,
            visits: 4810},
            {
            date: '2018-04-18',
            hits: 26,
            visits: 4910},
            {
            date: '2018-04-19',
            hits: 23,
            visits: 5010},
            {
            date: '2018-04-20',
            hits: 24,
            visits: 5210},
            {
            date: '2018-04-21',
            hits: 23,
            visits: 5510},
            {
            date: '2018-04-22',
            hits: 26,
            visits: 5510},
            {
            date: '2018-04-23',
            hits: 22,
            visits: 5510},
            {
            date: '2018-04-24',
            hits: 20,
            visits: 5510},
            {
            date: '2018-04-25',
            hits: 22,
            visits: 5510},
            {
            date: '2018-04-26',
            hits: 21,
            visits: 6010},
            {
            date: '2018-04-27',
            hits: 23,
            visits: 6010},
            {
            date: '2018-04-28',
            hits: 20,
            visits: 6110},
            {
            date: '2018-04-29',
            hits: 28,
            visits: 6310},
            {
            date: '2018-04-30',
            hits: 36,
            visits: 6610},
            {
            date: '2018-05-01',
            hits: 70,
            visits: 7010},
            {
            date: '2018-05-02',
            hits: 70,
            visits: 7210},
            {
            date: '2018-05-03',
            hits: 72,
            visits: 7310},
            {
            date: '2018-05-04',
            hits: 74,
            visits: 8010},
            {
            date: '2018-05-05',
            hits: 78,
            visits: 8110},
            {
            date: '2018-05-06',
            hits: 77,
            visits: 8210},
            {
            date: '2018-05-07',
            hits: 80,
            visits: 8910},{
            date: '2018-05-08',
            hits: 80,
            visits: 9210},{
            date: '2018-05-09',
            hits: 80,
            visits: 9610},{
            date: '2018-05-09',
            hits: 80,
            visits: 10110},{
            date: '2018-05-10',
            hits: 80,
            visits: 10861}
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
