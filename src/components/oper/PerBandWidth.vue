<template>
  <!-- 二级页-网络安全 -->
  <section>
    <div class="securityBoxs">
        <div id="chartdiv2"></div>
    </div>
    <p class="seb_nubs">总带宽<span>26,250MB/S</span></p>
  </section>
</template>

<style lang='scss' scope>
  .securityBoxs{
    width: 100%;
    height: 3rem;
    margin-bottom: 3.2rem
  }
  #chartdiv2{
    width:27.4rem;
  	height: 6rem;
  	margin: 0.2rem 0 0 .3rem;
  }
  .seb_nubs{
    position: absolute;
    right: 4rem;
    bottom: .7rem;
    font-size: 12px;
  }
</style>

<script>
  export default {
    data() {
      return {
        chartData: []
          
      }
    },
    mounted() {
      this.showHa()
    },
    methods: {
      showHa(){
        // var chartData = generateChartData();

        var chart = AmCharts.makeChart("chartdiv2", {
            "type": "serial",
            "theme": "light",
            "marginRight": 80,
            "dataProvider": [],
            marginBottom: 100,
            "legend": {
                "useGraphSettings": true
            },
            "valueAxes": [{
                "position": "left"
            }],
            "graphs": [{
                "id": "g1",
                "fillAlphas": 0.4,
                "valueField": "visits",
                    "balloonText": "<div style='margin:5px; font-size:19px;'>网络带宽:<b>[[value]]</b>MB/S</div>",
                "hidden": false,
                "title": "网络带宽(MB/S)",
                "bullet": "custom",
            }],
            "chartScrollbar": {
                "graph": "g1",
                "scrollbarHeight": 30,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "yellow",
                "graphFillAlpha": 0.5,
                "graphLineAlpha": 1,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color": "#AAAAAA",
                "enabled":false//不启动滚动条
            },
            "chartCursor": {
                "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
                "cursorPosition": "mouse"
            },
            "categoryField": "date",
            "categoryAxis": {
                "minPeriod": "mm",
                "parseDates": false,//影响
                labelsEnabled:false,
                offset: 14
            },

            "export": {
                "enabled": false,
            }
        });

        // chart.addListener("dataUpdated", zoomChart);
        // zoomChart();
        // function zoomChart() {
        //     // chart.zoomToIndexes(this.chartData.length - 25, this.chartData.length - 10);
        // }

        setInterval(() => {
            let val = Math.random()
            chart.dataProvider = [...chart.dataProvider, {
                date: this.getDate(),
                visits: val < 0.5 ? parseInt((val + 0.5) * 500) : parseInt(val * 500) 
            }]
            chart.validateData();  // 更新数据
            if (chart.dataProvider.length > 25) {
                chart.dataProvider.splice(0, 1);
              }
        }, 1000)
      },
      getDate() {
        let date = new Date();
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let min = date.getMinutes();
        min = min < 10 ? ('0' + min) : min;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return `${h}:${min}:${s}`;
        }
    }
  }
</script>
