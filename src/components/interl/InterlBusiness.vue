<template>
  <!--物联网运营中心left -->
  <section>
    <div id="businesss" class="chartGrayBgs"></div>
  </section>
</template>

<style lang='scss'>
  #businesss {
    width: 100%;
    height		: 4.2rem;
    margin-top: 0.2rem;
    font-size: .22rem;
  }
  @media screen and (min-width: 3000px) {
    #businesss {
      width		: 100%;
      height		: 4rem;
      font-size	: .22rem;
    }
  }
</style>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      var chart = AmCharts.makeChart("businesss", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "name": "商用空调",
          "number": 1223
        }, {
          "name": "商用冷柜",
          "number": 981
        }, {
          "name": "其他",
          "number": 710
        }],
        "valueAxes": [{
          "axisAlpha": 0,
          "gridColor": "#FFFFFF",
          "gridAlpha": 0.2,
          "dashLength": 0,
          "position": "left"
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "number",
          "fixedColumnWidth": 25
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "name",
        "categoryAxis": {
          "autoGridCount": false,
          "gridPosition": "start",
          "gridAlpha": 0,
          "tickPosition": "start",
          "tickLength": 10,
          "labelRotation": 50
        },
        "export": {
          "enabled": false
        }

      });
    },
    methods: {}
  }
</script>
