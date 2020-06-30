<template>
  <div class="dayCharts">
    <div class="dayCharts_tittle">
      <span>节拍：<span>15</span><span class="dayCharts_tittle_color">↑</span></span>
      <span>人均效率：<span>3.2</span><span class="dayCharts_tittle_color">台/人/时</span></span>
    </div>
    <div id="chartdivDays"></div>   
  </div>
</template>

<script>
  export default {
    name:'dayCharts',
    data(){
      return{}
    },
    mounted(){
      this.daychart()
    },
    methods:{
      daychart(){
               var chart = AmCharts.makeChart("chartdivDays", {
        "type": "serial",
        "theme": "light",
        "legend": {
            "align": "center",
            "equalWidths": false,
            "periodValueText": "total: [[value.sum]]",
            "valueAlign": "left",
            "valueWidth": 20,
            "enabled":false
        },
        "dataProvider": [ {
            "year": "05-12",
            "cars": 15.5,
            "motorcycles":4.8
        }, {
            "year": "05-13",
            "cars": 15,
            "motorcycles":5
        }, {
            "year": "05-14",
            "cars": 15.5,
            "motorcycles":4.5
        }, {
            "year": "05-15",
            "cars": 15,
            "motorcycles":5
        } , {
            "year": "05-16",
            "cars": 15,
            "motorcycles":5
        } ],
        "valueAxes": [{
            "gridAlpha": 0.07,
            "position": "left",
            minimum: 0,
            maximum: 20
        }],
        "graphs": [{
            "fillAlphas": 0.5,
            "lineAlpha": 0.5,
            "title": "Cars",
            "valueField": "cars"
        },{
            "fillAlphas": 0.5,
            "lineAlpha": 0.5,
            "title": "Motorcycles",
            "valueField": "motorcycles"
        }],
        "plotAreaBorderAlpha": 0,
        "marginLeft": 0,
        "marginBottom": 0,
        "chartCursor": {
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "year",
        "categoryAxis": {
            "startOnAxis": true,
            "axisColor": "#f10",
            "gridAlpha": 0.07,
            labelsEnabled:false,
            offset: 14
        },
        "export": {
          "enabled": false
         }
    });
      }
    }
  }
</script>

<style lang="scss">
  #chartdivDays {
    width : 7.2rem;
    height  : 5.8rem;
  }
  .dayCharts{
    position: relative;
  }
  .dayCharts_tittle{
    position: absolute;
    left: 0.44rem;
  }
  .dayCharts_tittle_color{
    color: yellow;
    padding: 0.1rem;
  }
  .amcharts-export-menu li:last-child > a{
    display: none;
  }
  .amcharts-chart-div>a{
    display: none !important;
  }
</style>

        // "dataProvider": [{
        //     "year": "05-5",
        //     "cars": 15,
        //     "motorcycles": 14,
        // }, {
        //     "year": "05-6",
        //     "cars": 11,
        //     "motorcycles": 18,
        // }, {
        //     "year": "05-7",
        //     "cars": 12,
        //     "motorcycles": 14,
        // }, {
        //     "year": "05-8",
        //     "cars": 15,
        //     "motorcycles": 14,
        // }, {
        //     "year": "05-9",
        //     "cars": 16,
        //     "motorcycles": 14,
        // } ],