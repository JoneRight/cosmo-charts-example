<template>
<!-- 首页左侧表格 服装品牌衣物供应量和智能衣物占比  -->
  <section class="smarty-ratio-container">
    <div class="smarty-ratio-div" id="smarty-ratio-chart"></div>
  </section>
</template>

<style lang='scss'>
.smarty-ratio-container {
  .smarty-ratio-div{
    margin-top: 0rem;
    overflow: inherit !important;
  }
  .amChartsLegend{
    margin-top: -0.8rem;
  }
  .smarty-ratio-div {
    height: 8rem;
    overflow: inherit !important;
  }
  @media screen and (min-width: 3000px) {
    .smarty-ratio-div {
      height: 7.5rem;
      overflow: inherit !important;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.makeChart();
    });
  },
  methods: {
    makeChart() {
      var chart = AmCharts.makeChart("smarty-ratio-chart", {
        theme: "light",
        type: "serial",
        dataProvider: [
            {
                "country": "报喜鸟",
                "amount": 8365,
                "smarty": 3667
            },  {
                "country": "英氏",
                "amount": 6752,
                "smarty": 3011
            }, {
                "country": "博洋",
                "amount": 5547,
                "smarty": 2251
            },
            {
                "country": "孚日",
                "amount": 3998,
                "smarty": 1113
            },
            {
                "country": "探路者",
                "amount": 2256,
                "smarty": 998
            },
            {
                "country": "万事利",
                "amount": 7769,
                "smarty": 4966
            },
            {
                "country": "其他",
                "amount": 6325,
                "smarty": 2210
            }
        ],
        valueAxes: [{
            "stackType": "3d",
            "position": "left",
            "title": "服装在售量和智能衣物占有量",
        }],
        startDuration: 1,
        graphs: [{
            "balloonText": "[[category]]在售智能服装: <b>[[value]]</b>",
            "fillAlphas": 0.9,
            "lineAlpha": 0.2,
            "title": "2004",
            "type": "column",
            "valueField": "smarty"
        }, {
            "balloonText": "[[category]]在售服装: <b>[[value]]</b>",
            "fillAlphas": 0.9,
            "lineAlpha": 0.2,
            "title": "2005",
            "type": "column",
            "valueField": "amount"
        }],
        plotAreaFillAlphas: 0.1,
        depth3D: 30,
        angle: 30,
        categoryField: "country",
        categoryAxis: {
            "gridPosition": "start"
        },
        
      });
    }
  }
};
</script>
