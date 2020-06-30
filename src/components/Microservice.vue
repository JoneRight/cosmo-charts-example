<template>
  <!-- 首屏-微服务 -->
  <section>
    <div id="microservice" class="chartGrayBg"></div>	
  </section>
</template>

<style lang='scss'>
  #microservice {
    width		: 100%;
    height		: 5rem;
    font-size	: 11px;
  }	
  @media screen and (min-width: 3000px) {
    #microservice {
      width		: 100%;
      height		: 4rem;
      font-size	: 11px;
    }
  }
</style>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      var chart = AmCharts.makeChart( "microservice", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [ {
          "name": "建模类工具",
          "number": 87
        }, {
          "name": "仿真分析类工具",
          "number": 94
        }, {
          "name": "可视化展示工具",
          "number": 86
        }, {
          "name": "知识管理类工具",
          "number": 67
        }, {
          "name": "图像语音识别类",
          "number": 88
        }, {
          "name": "设计类",
          "number": 24
        }, {
          "name": "仿真类",
          "number": 87
        }, {
          "name": "生产类",
          "number": 287
        }, {
          "name": "管理类",
          "number": 169
        }, {
          "name": "服务类",
          "number": 254
        }, {
          "name": "其他",
          "number": 70
        }],
        "valueAxes": [ {
          "axisAlpha": 0,
          "gridColor": "#FFFFFF",
          "gridAlpha": 0.2,
          "dashLength": 0
        } ],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [ {
          "id": 'g3',
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "number",
          "fixedColumnWidth": 15
        } ],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "name",
        "categoryAxis": {
          "autoGridCount":false,
           "gridCount":12, 
          "gridPosition": "start",
          "gridAlpha": 0,
          "tickPosition": "start",
          "tickLength": 10,
          "labelRotation": 60
        },
        "export": {
          "enabled": false
        }

      } );
    },
    methods: {
    }
  }
</script>
