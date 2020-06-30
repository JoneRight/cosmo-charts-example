<template>
<!-- 首页表格-工业app  -->
  <section class="brand-sales-container">
    <div class="brand-sales-div" id="brand-sales-chart"></div>
  </section>
</template>

<style lang='scss'>
.brand-sales-container {
  .amcharts-chart-div {
    margin-top: -1.5rem;
    overflow: inherit !important;
  }
  .amChartsLegend {
    margin-top: -1.8rem;
  }
  .brand-sales-div {
    height: 10rem;
    overflow: inherit !important;
  }

  @media screen and (min-width: 3000px) {
    .brand-sales-div {
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
      var chart = AmCharts.makeChart("brand-sales-chart", {
        type: "pie",
        startDuration: 0,
        outlineColor: "",
        theme: "light",
        addClassNames: true,
        labelsEnabled: false,
        colors: [
          "#37a2da",
          "#32c5e9",
          "#67e0e3",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293",
          "#e062ae",
          "#e690d1",
          "#e7bcf3"
        ],
        legend: {
          position: "bottom",
          align: "center",
          maxColumns: 2,
          enabled: true,
          verticalGap: 0
        },
        innerRadius: "30%",
        defs: {
          filter: [
            {
              id: "shadow",
              width: "200%",
              height: "200%",
              feOffset: {
                result: "offOut",
                in: "SourceAlpha",
                dx: 0,
                dy: 0
              },
              feGaussianBlur: {
                result: "blurOut",
                in: "offOut",
                stdDeviation: 5
              },
              feBlend: {
                in: "SourceGraphic",
                in2: "blurOut",
                mode: "normal"
              }
            }
          ]
        },
        dataProvider: [
          {
            appname: "报喜鸟",
            appcount: 18.1
          },
          {
            appname: "英氏",
            appcount: 6.6
          },
          {
            appname: "博洋",
            appcount: 3
          },
          {
            appname: "大杨创世",
            appcount: 5.3
          },
          {
            appname: "孚日",
            appcount: 3.8
          },
          {
            appname: "探路者",
            appcount: 8.5
          },
          {
            appname: "万事利",
            appcount: 29.6
          },
          {
            appname: "其他",
            appcount: 8.6
          }
        ],
        valueField: "appcount",
        titleField: "appname",
        outlineAlpha: 0.4,
        depth3D: 15,
        angle: 30,
        export: {
          enabled: false
        }
      });

      /* chart.addListener("init", handleInit);

      chart.addListener("rollOverSlice", function(e) {
        handleRollOver(e);
      });

      function handleInit() {
        chart.legend.addListener("rollOverItem", handleRollOver);
      }

      function handleRollOver(e) {
        var wedge = e.dataItem.wedge.node;
        wedge.parentNode.appendChild(wedge);
      } */
    }
  }
};
</script>
