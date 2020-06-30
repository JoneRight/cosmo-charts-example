<template>
<!-- 首页表格-工业机理模型 -->
  <section class="industrial-model-container">
    <div class="industrial-model-div" id="industrial-model-chart"></div>
  </section>
</template>

<style lang='scss'>
.industrial-model-container {
  .amcharts-chart-div{
    margin-top: -1.5rem;
    overflow: inherit !important;
  }
  .amChartsLegend{
    margin-top: -0.8rem;
  }
  .industrial-model-div {
    height: 10rem;
    overflow: inherit !important;
  }
  @media screen and (min-width: 3000px) {
    .industrial-model-div {
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
      var chart = AmCharts.makeChart("industrial-model-chart", {
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
          "#e7bcf3",
          "#9d96f5",
          "#8378ea"
        ],
        legend: {
          position: "bottom",
          align:"center",
          maxColumns: 2,
          enabled: true,
          verticalGap: 0,
          // valueWidth: 10
        },
        innerRadius: "30%",
        /* defs: {
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
        }, */
        dataProvider: [],/*[
          {
            modelname: "工业机理模型",
            modelcount: 1000
          },
          {
            modelname: "建模类",
            modelcount: 87
          },
          {
            modelname: "仿真分析类",
            modelcount: 94
          },
          {
            modelname: "可视化展示",
            modelcount: 86
          },
          {
            modelname: "知识管理类",
            modelcount: 67
          },
          {
            modelname: "图像语音识别",
            modelcount: 88
          },
          {
            modelname: "设计类",
            modelcount: 24
          },
          {
            modelname: "仿真类",
            modelcount: 87
          },
          {
            modelname: "生产类",
            modelcount: 287
          },
          {
            modelname: "管理类",
            modelcount: 169
          },
          {
            modelname: "服务类",
            modelcount: 254
          },
          {
            modelname: "其他",
            modelcount: 70
          }
        ]*/
        valueField: "stat_result",
        titleField: "category_description",
        "outlineAlpha": 0.4,
        "depth3D": 15,
        "angle": 30,
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
          index_en: 'num_industrial_mechanism_mode'
        }
      }).then(res => {
        this.$store.commit('industrialModel/setModel', res.data.list[0].stat_result);
      })
      this.$axios({
        url: '/screen/report/list',
        params: {
          level_one: 'platform_resource_management_apability',
          level_two: 'software_application_management_capability',
          index_en: 'num_microservices_components'
        }
      }).then(res => {
        this.$store.commit('industrialModel/setValue', parseInt(res.data.list[0].stat_result));
        chart.dataProvider = res.data.list.splice(1);
      }).then(() => {
        chart.validateData(); // 更新数据
      })
    }
  }
};
</script>
