<template>
  <div class="appliances">
    <div class="left">
      <div class="special-border"></div>
      <div class="title">交互</div>
      <div class="chart">
        <div class="name">活跃用户量</div>
        <ul class="data">
          <li>
            <span>当日</span>
            <count-to class="num" :startVal='0' :endVal='2967' :duration='3000'></count-to>
          </li>
          <li>
            <span>年度</span>
            <count-to class="num" :startVal='0' :endVal='1238477' :duration='3000'></count-to>
          </li>
        </ul>
        <div class="name">用户交互量</div>
        <ul class="data">
          <li>
            <span>当日</span>
            <count-to class="num" :startVal='0' :endVal='8466' :duration='3000'></count-to>
          </li>
          <li>
            <span>年度</span>
            <count-to class="num" :startVal='0' :endVal='54540254' :duration='3000'></count-to>
          </li>
        </ul>
      </div>
      <div class="title">研发</div>
      <div class="chart spc">
        <div class="name">创意量
          <count-to class="num" :startVal='0' :endVal='4037' :duration='3000'></count-to>
        </div>
        <div class="name">新品量
          <count-to class="num" :startVal='0' :endVal='1006' :duration='3000'></count-to>
        </div>
      </div>
      <div class="title">采购</div>
      <div id="bar" class="chart spc"></div>
    </div>
    <div class="right">
      <div class="content-left">
        <h5 class="title">COSMOPlat大规模定制-家电行业</h5>
        <div class="appliancesData">
          <span><count-to class="num" :startVal='0' :endVal='21' :duration='3000'></count-to>个园区</span>
          <span><count-to class="num" :startVal='0' :endVal='108' :duration='3000'></count-to>个工厂</span>
        </div>
        <div id="map" class="map"></div>
      </div>
      <div class="content-right">
        <div class="special-border"></div>
        <div class="title">服务</div>
        <div class="chart">
          <ul class="data">
            <li>
              <span>实时安装量</span>
              <count-to class="num" :startVal='0' :endVal='100963' :duration='3000'></count-to>
            </li>
            <li>
              <span>实时维修量</span>
              <count-to class="num" :startVal='0' :endVal='2335' :duration='3000'></count-to>
            </li>
          </ul>
          <ul class="data">
            <li>
              <span>用户满意度</span>
              <count-to class="num" :startVal='0' :endVal='98.4' :decimals="1" :duration='3000'></count-to>
              %
            </li>
            <li>
              <span>一次维护率</span>
              <count-to class="num" :startVal='0' :endVal='98.41' :decimals="1" :duration='3000'></count-to>
              %
            </li>
          </ul>
        </div>
        <div class="title">销售</div>
        <div id="pie" class="chart"></div>
      </div>
      <div class="content-bottom">

        <div class="content-bottom_left">
          <div class="content-bottom_left_one">
            <div class="content-bottom_tittle">生产<span>PRODUCTION</span></div>
            <div class="content-bottom_div">
              <div>计划
                <count-to class="num" :startVal='0' :endVal='630434' :duration='3000'></count-to>
                <span>台</span></div>
              <div>完成
                <count-to class="num" :startVal='0' :endVal='100977' :duration='3000'></count-to>
                <span>台</span></div>
            </div>
            <div class="content_complete">计划完成率：</div>
            <div id="chartdivssbb"></div>
          </div>
          <div class="content-bottom_left_two">
            <div class="cblt_tittle">设备Oee及产品不良率趋势图(%)：</div>
            <div id="chartdivDays"></div>
          </div>
        </div>

        <div class="content-bottom_right">
          <div class="content-bottom_right_one">
            <div class="content-bottom_tittle">物流<span>LOGISTICS</span></div>
            <div class="content-bottom_div">
              <div>在途量
                <count-to class="num" :startVal='0' :endVal='40992' :duration='3000'></count-to>
                <span>台</span></div>
              <div>交付量
                <count-to class="num" :startVal='0' :endVal='10973' :duration='3000'></count-to>
                <span>台</span></div>
            </div>
            <div class="content_complete">实时准确率：</div>
            <div id="chartdivstwo"></div>
          </div>
          <div class="content-bottom_right_two">
            <div class="cblt_tittle">实时物流数据：</div>
            <div id="chartdivDaysc2"></div>
          </div>
        </div>

      </div>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>家电行业</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';

  export default {
    name: "appliances",
    components: {
      countTo
    },
    methods: {
      getMap() {
        let latlong = {};
        latlong["USA"] = {"latitude": 38.91, "longitude": -77.02};
        latlong["MXG"] = {"latitude": 19.36, "longitude": -98.57};
        latlong["GLBY"] = {"latitude": 6.15, "longitude": -75.36};
        latlong["EGDE"] = {"latitude": -0.54, "longitude": -89.36};
        latlong["AGT"] = {"latitude": -34.55, "longitude": -57.57};
        latlong["WNRL"] = {"latitude": 10.3, "longitude": -66.58};
        latlong["TG"] = {"latitude": 13.5, "longitude": 100.29};
        latlong["YN"] = {"latitude": 23.01, "longitude": 105.53};
        latlong["YDNXY"] = {"latitude": -4.5, "longitude": 128.1};
        latlong["JP"] = {"latitude": 35.41, "longitude": 139.44};
        latlong["YD"] = {"latitude": 22.19, "longitude": 73.14};
        latlong["BJST"] = {"latitude": 31.25, "longitude": 73.04};
        latlong["XXL"] = {"latitude": -41.17, "longitude": 174.47};
        latlong["YDL"] = {"latitude": 45, "longitude": 9.1};
        latlong["NRLY"] = {"latitude": 9.12, "longitude": 7.11};
        latlong["MJL"] = {"latitude": 22.2, "longitude": 91.48};
        latlong["ELS"] = {"latitude": 55.45, "longitude": 37.37};
        latlong["CN"] = {"latitude": 39.904989, "longitude": 116.405285};
        let mapData = [
          {"code": "CN", "name": "中国", "value": 55, "color": "#ff3858"},
          {"code": "USA", "name": "美国", "value": 11, "color": "#f9f716"},
          {"code": "MXG", "name": "墨西哥", "value": 7, "color": "#61bfad"},
          {"code": "GLBY", "name": "哥伦比亚", "value": 2, "color": "#e5484b"},
          {"code": "EGDE", "name": "厄瓜多尔", "value": 1, "color": "#167c80"},
          {"code": "AGT", "name": "阿根廷", "value": 3, "color": "#b7e3e4"},
          {"code": "WNRL", "name": "委内瑞拉", "value": 3, "color": "#efe8d8"},
          {"code": "TG", "name": "泰国", "value": 7, "color": "#005397"},
          {"code": "YN", "name": "越南", "value": 3, "color": "#39867a"},
          {"code": "YDNXY", "name": "印尼", "value": 2, "color": "#facac0"},
          {"code": "BJST", "name": "巴基斯坦", "value": 3, "color": "#f3c9dd"},
          {"code": "XXL", "name": "新西兰", "value": 1, "color": "#bfb5d7"},
          {"code": "JP", "name": "日本", "value": 1, "color": "#bea1a5"},
          {"code": "YD", "name": "印度", "value": 4, "color": "#a6cfe2"},
          {"code": "YDL", "name": "意大利", "value": 1, "color": "#eea638"},
          {"code": "NRLY", "name": "尼日利亚", "value": 2, "color": "#d1004f"},
          {"code": "MJL", "name": "孟加拉", "value": 1, "color": "#371722"},
          {"code": "ELS", "name": "俄罗斯", "value": 1, "color": "#d8854f"}
        ]

        let minBulletSize = 15;
        let maxBulletSize = 40;
        let min = Infinity;
        let max = -Infinity;
        // let userColor = '#fbe639'
        // let companyColor = '#45c0f1'
        // let rdColor = '#9fe6b8'

        for (let i = 0; i < mapData.length; i++) {
          let value = mapData[i].value;
          if (value < min) {
            min = value;
          }
          if (value > max) {
            max = value;
          }
        }
        const dataProvider = {
          images: [],
          map: "worldLow",
          getAreasFromMap: true,
        };
        const maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
        const minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
        for (let i = 0; i < mapData.length; i++) {
          let dataItem = mapData[i];
          let value = dataItem.value;
          let square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
          if (square < minSquare) {
            square = minSquare;
          }
          let size = Math.sqrt(square / (Math.PI * 2));
          let id = dataItem.code;
          dataProvider.images.push({
            type: "circle",
            width: size,
            height: size,
            color: dataItem.color,
            longitude: latlong[id].longitude,
            latitude: latlong[id].latitude,
            title: dataItem.name,
            value: value,
            rollOverScale: 2,
            zoomLevel: 5
          });
        }

        const myMap = AmCharts.makeChart("map", {
          type: "map",
          theme: 'miller',
          color: "black",
          language: "zh",
          imagesSettings: {
            balloonText: "<span style='font-size:14px;'><b>[[title]]</b>[[value]]家</span>",
            alpha: 0.6,
          },
          dataProvider,
          areasSettings: {
            autoZoom: true,
            selectedColor: "#ccc",
            color: 'rgb(221, 221, 221)',
            selectedOutlineColor: '#fff',
            rollOverOutlineColor: '#fff',
            rollOverColor: '#ccc',
          }
        })
      },
      getBar() {
        let chart = AmCharts.makeChart("bar", {
          "type": "serial",
          "theme": "light",
          marginRight: 25,
          marginLeft: 20,
          "dataProvider": [{
            name: '模块采购',
            value: 51243
          }, {
            name: '模块交互',
            value: 95667
          }, {
            name: '模块商数量',
            value: 26321
          }],
          "valueAxes": [{
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          }],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "value"
          }],
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "name",
          "categoryAxis": {
            "gridPosition": "center",
            "gridAlpha": 0,
            "tickPosition": "center",
            "tickLength": 20,
            inside: true, // 轴标签放置在内部
            labelOffset: -3, // 轴标签
            tickLength: 1  // 刻度线长度
          },
          rotate: true,  // xy坐标轴切换
          "export": {
            "enabled": false
          }

        });
      },
      getPie() {
        let chart = AmCharts.makeChart("pie", {
          "type": "pie",
          "theme": "light",
          "dataProvider": [{
            "title": "线下销售",
            "value": 6852
          }, {
            "title": "线上销售",
            "value": 2899
          }, {
            "title": "微店",
            "value": 1181
          }, {
            "title": "其他",
            "value": 581
          }],
          balloon: {
            horizontalPadding: 2,  // 内padding
            maxWidth: 100  // 气泡宽度
          },
          "titleField": "title",
          "valueField": "value",
          "labelRadius": 5,
          startDuration: 0,  // 关闭动画
          "labelsEnabled": false, // 关闭标签
          "legend": {
            position: "right",
            align: "center",
            maxColumns: 2,
            enabled: true,
            color: '#0091e1',
            valueText: '[[value]]万元'  // 图例
          },
          balloonText: '[[title]]: [[percents]]% ([[value]]万元)[[description]]',  // 气泡
          "radius": "42%",
          "innerRadius": "60%",
          "labelText": "[[title]]",
          "export": {
            "enabled": false
          }
        });
      },
      showhaha() {
        let dataName = []
        let chart = AmCharts.makeChart("chartdivDaysc2", {
          "type": "serial",
          "theme": "light",
          "depth3D": 0,
          "angle": 30,
          "legend": {
            position: "right",
            align: 'left',
            "horizontalGap": 0, // 间距
            verticalGap: 0,
            "useGraphSettings": true,
            "markerSize": 8, // 图例大小
            valueWidth: 0,
          },
          "dataProvider": [{
            "year": "08:00",
            "europe": 200,
            "namerica": 200,
            "asia": 200,
            "lamerica": 100,
          }, {
            "year": "10:00",
            "europe": 100,
            "namerica": 300,
            "asia": 100,
            "lamerica": 200,
          }, {
            "year": "12:00",
            "europe": 200,
            "namerica": 100,
            "asia": 240,
            "lamerica": 100,
          }],
          "valueAxes": [{
            "stackType": "regular",
            "axisAlpha": 0,
            "gridAlpha": 0
          }],
          "graphs": [{
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "发货量",
            "type": "column",
            "color": "#000000",
            "valueField": "europe"
          }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "在线量",
            "type": "column",
            "color": "#000000",
            "valueField": "namerica"
          }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "应交付",
            "type": "column",
            "newStack": true,
            "color": "#000000",
            "valueField": "asia"
          }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "实际交付",
            "type": "column",
            "color": "#000000",
            "valueField": "lamerica"
          }],
          "categoryField": "year",
          "categoryAxis": {
            "gridPosition": "start",
            // "axisAlpha": 0.6,
            "gridAlpha": 0,
            "position": "left",
            labelsEnabled: false,
            // offset: 14
          },
          "export": {
            "enabled": false
          }

        });
      },
      haha() {
        let gaugeChart = AmCharts.makeChart("chartdivssbb", {
          "type": "gauge",
          "theme": "light",
          "axes": [{
            "axisThickness": 1,
            "axisAlpha": 0.2,
            "tickAlpha": 0.2,
            "valueInterval": 20,
            "bands": [{
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
            }],
            "bottomText": "0 %",
            "bottomTextYOffset": -20,
            "endValue": 100
          }, {
            "axisColor": "#67b7dc",
            "axisThickness": 3,
            "endValue": 100,
            "gridInside": false,
            "inside": false,
            "radius": "100%",
            "valueInterval": 20,
            "tickColor": "#67b7dc",
            "bands": [{
              "color": "#f10",
              "endValue": 35,
              "startValue": 0
            }],
          }],
          "arrows": [{}],
          "export": {
            "enabled": false
          }
        });
        setInterval(randomValue, 2000);

        // set random value
        function randomValue() {
          let value = Math.round(Math.random() * 1 + 20);
          if (gaugeChart) {
            if (gaugeChart.arrows) {
              if (gaugeChart.arrows[0]) {
                if (gaugeChart.arrows[0].setValue) {
                  gaugeChart.arrows[0].setValue(value);
                  gaugeChart.axes[0].setBottomText(value + "%");
                }
              }
            }
          }
        }
      },
      daychart() {
        let chart = AmCharts.makeChart("chartdivDays", {
          "type": "serial",
          "theme": "light",
          "legend": {
            "align": "center",
            "equalWidths": false,
            "periodValueText": "total: [[value.sum]]",
            "valueAlign": "left",
            "valueWidth": 20,
            "enabled": false
          },
          "dataProvider": [{
            "year": "05-12",
            "Oee": 81.5,
            "rejection": 2.3
          }, {
            "year": "05-13",
            "Oee": 81,
            "rejection": 2.5
          }, {
            "year": "05-14",
            "Oee": 81.5,
            "rejection": 2.7
          }, {
            "year": "05-15",
            "Oee": 81,
            "rejection": 2.1
          }, {
            "year": "05-16",
            "Oee": 81,
            "rejection": 2.8
          }],
          "valueAxes": [{
            "gridAlpha": 0.07,
            "position": "left",
            // minimum: 40,
            maximum: 100
          }],
          "graphs": [{
            "fillAlphas": 0.5,
            "lineAlpha": 0.5,
            "title": "Oee",
            "valueField": "Oee",
            balloonText: '[[title]]:[[value]]'
          }, {
            "fillAlphas": 0.5,
            "lineAlpha": 0.5,
            "title": "不良率",
            "valueField": "rejection",
            balloonText: '[[title]]:[[value]]'
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
            "gridAlpha": 0.07
          },
          "export": {
            "enabled": false
          }
        });
      },
      hahatwo() {
        let gaugeChart = AmCharts.makeChart("chartdivstwo", {
          "type": "gauge",
          "theme": "light",
          "axes": [{
            "axisThickness": 1,
            "axisAlpha": 0.2,
            "tickAlpha": 0.2,
            "valueInterval": 20,
            "bands": [{
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
            }],
            "bottomText": "0 %",
            "bottomTextYOffset": -20,
            "endValue": 100
          }, {
            "axisColor": "#67b7dc",
            "axisThickness": 3,
            "endValue": 100,
            "gridInside": false,
            "inside": false,
            "radius": "100%",
            "valueInterval": 20,
            "tickColor": "#67b7dc",
            "bands": [{
              "color": "#f10",
              "endValue": 35,
              "startValue": 0
            }],
          }],
          "arrows": [{}],
          "export": {
            "enabled": false
          }
        });
        setInterval(randomValue, 2000);

        // set random value
        function randomValue() {
          const a = Math.random() * 1 + 97
          const value = a.toFixed(2)

          if (gaugeChart) {
            if (gaugeChart.arrows) {
              if (gaugeChart.arrows[0]) {
                if (gaugeChart.arrows[0].setValue) {
                  gaugeChart.arrows[0].setValue(value);
                  gaugeChart.axes[0].setBottomText(value + "%");
                }
              }
            }
          }
        }
      }
    },
    mounted() {
      this.getMap();
      this.getBar();
      this.getPie();
      this.haha();
      this.hahatwo();
      this.daychart();
      this.showhaha();
    }
  }
</script>

<style scoped lang="scss">
  $blue: #0091e1;
  .appliances {
    position: relative;
    display: flex;
    padding: 0 .5rem;
    .title {
      text-align: left;
      font-size: .5rem;
      padding: 0;
      padding-left: .5rem;
      height: .8rem;
      line-height: .8rem;
      font-weight: 600;
      color: $blue;
      margin: 0;
    }
    .spc {
      & > .name:first-child {
        margin-top: .5rem;
      }
      .name {
        line-height: 1.5rem;
      }
      .num {
        line-height: 1.5rem;
        margin-left: 1rem;
      }
    }
    .chart {
      flex: 1;
      width: 100%;
      min-height: 5rem;
      .name {
        font-size: .5rem;
        //color: $blue;
      }
      .num {
        font-size: .5rem;
        color: #f52340;
      }
      .data {
        padding-top: .4rem;
        overflow: hidden;
        li {
          float: left;
          width: 50%;
          span:first-child {
            display: block;
            font-size: .4rem;
            color: #999;
          }
        }
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      width: 7.2rem;
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      .content-left {
        flex: 1;
        .title {
          margin: 0;
          line-height: 1rem;
          margin-top: 0.34rem;
          margin-bottom: 0.6rem;
          text-align: center;
          color: $blue;
          font-size: 44px;
          font-weight: 900;
        }
        .appliancesData {
          text-align: center;
          & > span:first-child {
            padding-right: .5rem;
          }
          span {
            font-size: 28px;
          }
          .num {
            font-size: 30px;
            color: $blue;
          }
        }
        .map {
          box-sizing: border-box;
          border: 10px solid #fafafa;
          -webkit-border-radius: .24rem;
          -moz-border-radius: .24rem;
          border-radius: .24rem;
          width: 21rem;
          height: 12rem;
          margin: 0 auto;
        }
      }
      .content-right {
        width: 7.2rem;
      }
      .content-bottom {
        width: 100%;
        height: 6rem;
        display: flex;
        margin: .1rem 0 0 0;
      }
    }
  }

  .breadcrumb {
    position: absolute;
    left: 1.8rem;
    top: 0.6rem;
  }

  .special-border {
    margin-top: 3rem;
    margin-bottom: .2rem;
    width: 100%;
    height: 2px;
    background-color: #d8d9da;
    position: relative;
    &::before, &::after {
      content: '';
      height: 10px;
      width: 16px;
      background-color: #d8d9da;
      position: absolute;
      z-index: 1;
      top: -4px;
    }
    &::after {
      right: 0;
    }
    &::before {
      left: 0;
    }
  }

  #chartdivssbb {
    width: 5rem;
    height: 4.2rem;
    padding-left: 0.4rem;
  }

  #chartdivstwo {
    width: 5rem;
    height: 4.2rem;
    padding-left: 0.4rem;
  }

  .content-bottom_tittle {
    font-size: 0.5rem;
    line-height: .8rem;
    font-weight: 700;
    color: #0091e1;
    span {
      font-size: 0.32rem;
      padding-left: 0.2rem;
      font-weight: 500;
    }
  }

  .content-bottom_left {
    flex: 1;
    .content-bottom_left_one {
      float: left;
    }
    .content-bottom_left_two {
      float: left;
      padding-top: .67rem;
      .cblt_tittle {
        font-size: 12px;
        padding-left: .7rem;
      }
    }
  }

  .content-bottom_right {
    flex: 1;
    .content-bottom_right_one {
      float: left;
    }
    .content-bottom_right_two {
      float: left;
      padding-top: .67rem;
      .cblt_tittle {
        font-size: 12px;
        padding-left: .7rem;
      }
    }
  }

  .content-bottom_div {
    div {
      display: inline-block;
      width: 3.2rem;
      height: .8rem;;
      line-height: .8rem;
      background-color: rgba(80, 95, 150, 0.5);
      color: #fafafa;
      padding-left: 0.3rem;
      span:nth-child(1) {
        margin-left: 0.1rem;
      }
      span:nth-child(2) {
        color: #e6df85;
      }
    }
  }

  .content_complete {
    font-size: 12px;
  }

  #chartdivDays {
    width: 7rem;
    height: 5rem;
  }

  #chartdivDaysc2 {
    width: 7rem;
    height: 5rem;
  }
</style>
