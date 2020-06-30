<template>
  <div class="dayCoders">
  <div id="chartdivss"></div>
  </div>
</template>

<script>

  export default {
    name:'dayCoders',
    data(){
      return {
      }
    },
    mounted(){
      this.haha()
    },
    methods:{
      haha(){
        var gaugeChart = AmCharts.makeChart( "chartdivss", {
        "type": "gauge",
        "theme": "light",
        "axes": [ {
          "axisThickness": 1,
          "axisAlpha": 0.2,
          "tickAlpha": 0.2,
          "valueInterval": 20,
          "bands": [ {
            "color": "#ffff",
            "endValue": 0,
            "startValue": 0
          }, {
            "color": "#fdd400",
            "endValue": 80,
            "startValue": 45
          }, {
            "color": "#ddd",
            "endValue": 100,
            "innerRadius": "90%",
            "startValue": 80
          } ],
          "bottomText": "0 %",
          "bottomTextYOffset": -20,
          "endValue": 100
        },{
          "axisColor": "#67b7dc",
          "axisThickness": 3,
          "endValue": 100,
          "gridInside": false,
          "inside": false,
          "radius": "100%",
          "valueInterval": 20,
          "tickColor": "#67b7dc",
           "bands": [ {
            "color": "#f10",
            "endValue": 35,
            "startValue": 0
          }],
        } ],
        "arrows": [ {} ],
        "export": {
          "enabled": false
        }
      });
    setInterval( randomValue, 2000 );
    // set random value
    function randomValue() {
      var value = Math.round( Math.random() * 1 +90 );
      if ( gaugeChart ) {
        if ( gaugeChart.arrows ) {
          if ( gaugeChart.arrows[ 0 ] ) {
            if ( gaugeChart.arrows[ 0 ].setValue ) {
              gaugeChart.arrows[ 0 ].setValue( value );
              gaugeChart.axes[ 0 ].setBottomText( value + "%" );
            }
          }
        }
      }
    }
   }
  }
}
    
</script>

<style lang="scss" scoped>
#chartdivss {
  width: 6.6rem;
  height: 4rem;
}

</style>