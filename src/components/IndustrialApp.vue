<template>
<!-- 首页表格-工业app  -->
  <section class="industrial-app-container">
    <div class="industrial-app-div" id="industrial-app-chart"></div>
  </section>
</template>

<style lang='scss'>
.industrial-app-container {
  .amcharts-chart-div {
    margin-top: -1.5rem;
    overflow: inherit !important;
  }
  .amChartsLegend {
    margin-top: -1.8rem;
  }
  .industrial-app-div {
    height: 10rem;
    overflow: inherit !important;
  }

  @media screen and (min-width: 3000px) {
    .industrial-app-div {
      height: 8.5rem;
      overflow: inherit !important;
    }
  }

  /* .amcharts-pie-slice {
    transform: scale(1);
    transform-origin: 50% 50%;
    transition-duration: 0.3s;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    cursor: pointer;
    box-shadow: 0 0 30px 0 #000;
  }

  .amcharts-pie-slice:hover {
    transform: scale(1.1);
    filter: url(#shadow);
  } */
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
      var chart = AmCharts.makeChart("industrial-app-chart", {
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
         dataProvider:[], //[
        //   {
        //     appname: "大规模定制",
        //     appcount: 153
        //   },
        //   {
        //     appname: "市场营销",
        //     appcount: 38
        //   },
        //   {
        //     appname: "研发",
        //     appcount: 23
        //   },
        //   {
        //     appname: "供应链",
        //     appcount: 61
        //   },
        //   {
        //     appname: "生产",
        //     appcount: 88
        //   },
        //   {
        //     appname: "技术创新",
        //     appcount: 91
        //   },
        //   {
        //     appname: "服务办公",
        //     appcount: 36
        //   },
        //
        //   {
        //     appname: "FIN/HR",
        //     appcount: 34
        //   },
        //   {
        //     appname: "物流",
        //     appcount: 22
        //   },
        //   {
        //     appname: "其他",
        //     appcount: 125
        //   }
        // ],
        valueField: "stat_result",
        titleField: "category_description",
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
      this.$axios({
        url: '/screen/report/list',
        params: {
          level_one: 'platform_resource_management_apability',
          level_two: 'software_application_management_capability',
          index_en: 'industrial_app'
        }
      }).then(res => {
        this.$store.commit('industrialApp/setValue', parseInt(res.data.list[0].stat_result));
        chart.dataProvider = res.data.list.splice(1);
      }).then(() => {
        chart.validateData(); // 更新数据
      })
    }
  }
};
</script>
