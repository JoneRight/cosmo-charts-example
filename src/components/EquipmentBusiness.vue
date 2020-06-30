<template>
  <!-- 首屏-商业设备 -->
  <section>
    <div id="business" class="chartGrayBg"></div>
  </section>
</template>

<style lang='scss'>
  #business {
    width: 100%;
    height		: 4.2rem;
    margin-top: 0.2rem;
    font-size: 11px;
  }
  @media screen and (min-width: 3000px) {
    #business {
      width		: 100%;
      height		: 4rem;
      font-size	: 11px;
    }
  }
</style>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      var chart = AmCharts.makeChart("business", {
        "type": "serial",
        "theme": "light",
        "dataProvider": [{
          "name": "商用空调",
          "number": 873
        }, {
          "name": "商用冷柜",
          "number": 653
        }, {
          "name": "其他",
          "number": 565
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
          "valueField": "stat_result",
          "fixedColumnWidth": 25
        }],
        "chartCursor": {
          "categoryBalloonEnabled": false,
          "cursorAlpha": 0,
          "zoomable": false
        },
        "categoryField": "category_description",
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
      this.$axios({
        url: '/screen/report/list',
        params: {
          level_one: 'platform_resource_management_apability',
          level_two: 'business_equipment_management_capability',
          index_en: 'num_managed_commercial_equipment'
        }
      }).then(res => {
        this.$store.commit('equipment/setBussinessValue', parseInt(res.data.list[0].stat_result));
        chart.dataProvider = res.data.list.splice(1);
      }).then(() => {
        chart.validateData(); // 更新数据
      })
    },
    methods: {}
  }
</script>
