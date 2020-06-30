<template>
  <div class="dayChart">
    <h4 class="oper_nums">数据库分类</h4>
    <div id="chartdivDay"></div>   
  </div>
</template>

<script>
  export default {
    name:'dayChart',
    data(){
      return{}
    },
    mounted(){
      this.daychart()
    },
    methods:{
      daychart(){
    var chart = AmCharts.makeChart( "chartdivDay", {
      "type": "serial",
      "theme": "light",
      "dataProvider": [ {
        "country": "Oracle",
        "visits": 26.8
      }, {
        "country": "MySQL",
        "visits": 25.9
      }, {
        "country": "Redis",
        "visits": 17.7
      }, {
        "country": "Postgresql",
        "visits": 5.7
      }, {
        "country": "Mongo",
        "visits": 4.1
      }, {
        "country": "Hbase",
        "visits": 0.6
      }],
      "valueAxes": [ {
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      } ],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [ {
        "fillAlphas": 0.8,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "visits"
      } ],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 0
      },
      "rotate": true,//排列方式
      "export": {
        "enabled": false
      }
    });
    }
    }
  }
</script>

<style lang="scss" scoped>
  #chartdivDay {
  width : 8.2rem;
  height  : 5.4rem;
  }   
  .amcharts-export-menu li:last-child > a{
    display: none;
  }
  .amcharts-chart-div>a{
    display: none !important;
  }
  .oper_nums{
    font-size: 18px;
    color: #00AAFF;
    font-weight: 800;
    height: 1.4rem;
    line-height: 1.4rem;
  }
</style>