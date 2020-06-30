<template>
  <div class="dayChart">
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
                  var chart = AmCharts.makeChart("chartdivDay", {
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
            "cars": 2.5,
            "motorcycles":2
        }, {
            "year": "05-13",
            "cars": 2.6,
            "motorcycles":2
        }, {
            "year": "05-14",
            "cars": 2.7,
            "motorcycles":2
        }, {
            "year": "05-15",
            "cars": 2.6,
            "motorcycles":2
        } , {
            "year": "05-16",
            "cars": 2.4,
            "motorcycles":2
        } ],
        "valueAxes": [{
            "gridAlpha": 0.07,
            "position": "left",
            minimum: 0,
            maximum: 5
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
  #chartdivDay {
  width : 7.2rem;
  height  : 6.8rem;
}   
.amcharts-export-menu li:last-child > a{
  display: none;
}
.amcharts-chart-div>a{
  display: none !important;
}
</style>



