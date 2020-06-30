<template>
  <section>
    <div class="securityBox">
      <div id="InterSecurity"></div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
  #InterSecurity {
    margin-left: -0.4rem;
    height: 5rem;
    font-size: 0.22rem;
  }
  .content .left,.content .right {
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
      font-size: .22rem;
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

      var chart = AmCharts.makeChart("InterSecurity", {
        "type": "serial",
        "theme": "light",
        "addClassNames": true,
        "classNamePrefix": "amcharts",
        "legend": {
          "useGraphSettings": true,
          "enabled":false//激活下标按钮
        },
        "dataProvider": chartData,
        "synchronizeGrid": true,
        "valueAxes": [{
          "id": "v1",
          "axisColor": "#FF6600",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "left",
          "ignoreAxisWidth":false
        }, {
          "id": "v2",
          "axisColor": "#FCD202",
          "axisThickness": 2,
          "axisAlpha": 1,
          "position": "right"
        }],
        "graphs": [{
          "id": "g1",
          "valueAxis": "v1",
          "lineColor": "#FF6600",
          "bullet": "round",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "告警次数",
          "valueField": "hits",
          "fillAlphas": 0
        }],
        "chartScrollbar": {},
        "chartCursor": {
          "cursorPosition": "mouse"
        },
        "dataDateFormat":"JJ:NN",
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": false,
          "axisColor": "#DADADA",
          "minorGridEnabled": true,
          labelsEnabled:false,
            offset: 14
        },
         "chartScrollbar": {//图上的滚动条
            "enabled":false//不启动滚动条
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
          date: '1:00',
          hits: 20,
        },
        {
          date: '2:00',
          hits: 12,
        },
        {
          date: '3:00',
          hits: 6,
        },
        {
          date: '4:00',
          hits: 5,
        },
        {
          date: '5:00',
          hits: 11,
        },
        {
          date: '6:00',
          hits: 10,
        },
        {
          date: '7:00',
          hits: 17,
        },
        {
          date: '8:00',
          hits: 14,
        },
        {
          date: '9:00',
          hits: 13,
        },
        {
          date: '10:00',
          hits: 12,
        },
        {
          date: '11:00',
          hits: 12,
        },
        {
          date: '12:00',
          hits: 8,
        },
        {
          date: '13:00',
          hits: 5,
        },
        {
          date: '14:00',
          hits: 12,
        },
        {
          date: '15:00',
          hits: 9,
        },
        {
          date: '16:00',
          hits: 10,
        },
        {
          date: '17:00',
          hits: 12,
        },
        {
          date: '18:00',
          hits: 14,
        },
        {
          date: '19:00',
          hits: 9,
        },
        {
          date: '20:00',
          hits: 7,
        },
        {
          date: '21:00',
          hits: 10,
        },
        {
          date: '22:00',
          hits: 8,
        },
        {
          date: '23:00',
          hits: 12,
        },
        {
          date: '24:00',
          hits: 16,
        },
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
