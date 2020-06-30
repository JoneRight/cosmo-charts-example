<!-- 工业设备 -->
<template>
  <div class="IndustrialPlant">
    <div class="left">
      <div class="special-border"></div>
      <div class="title"></div>
      <div class="chart">
        <div id="gauge1"></div>
        <div class="data">
          <span>开机率</span>
          <span>{{kaiji}}%</span>
        </div>
        <div id="gauge2"></div>
        <div class="data">
          <span>在线率</span>
          <span>{{zaixian}}%</span>
        </div>
      </div>
      <div class="title">累计服务时间：
        <count-to :startVal='0' :endVal='181443' :duration='3000'></count-to>
        kh
      </div>
      <div id="bar" class="chart"></div>
      <div class="title">各类工业设备数量占比</div>
      <div id="pie2D" class="chart"></div>
    </div>
    <div class="center">
      <h5 class="title">COSMOPlat物联网运营中心</h5>
      <h4 class="IndustrialData">
        <router-link class="btn" :to="{path: 'industrialPlant'}">工业设备：<strong>
          <v-count refVal='equipmentIndustrial' :endVal='equipmentIndustrial'></v-count>
        </strong></router-link>
        <router-link class="btn" :to="{path: 'inter'}">商业设备：<strong>
          <v-count refVal='equipmentBussiness' :endVal='equipmentBussiness'></v-count>
        </strong></router-link>
        <router-link class="btn" :to="{path: 'console'}">消费设备：<strong>
          <v-count refVal='equipmentConsume' :endVal='equipmentConsume'></v-count>
        </strong></router-link>
      </h4>
      <div id="map" class="map" ref="map"></div>
      <!--<div id="pie" class="pie" ref="pie"></div>-->
    </div>
    <div class="right">
      <div class="special-border"></div>
      <div class="title">预测性维护</div>
      <div id="pie2D2" class="chart"></div>
      <div class="title">数据采集点：<span>5000万</span></div>
      <div id="pie2D3" class="chart"></div>
      <div class="title">网络流量统计(MB/S)</div>
      <div id="axis" class="chart"></div>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>工业设备</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
  // import chart from 'echarts/lib/echarts';
  import countTo from 'vue-count-to';
  import zh from '../../../static/ammap/lang/zh.js';
  import { mapState, store } from 'vuex'
  import vCount from '@/components/vCount.vue'
  // import world from '../../../static/world.js';
  export default {
    name: "IndustrialPlant",
    components: {
      countTo,
      vCount
    },
    computed: {
      ...mapState({
        equipmentIndustrial: function(state) {
          if (!state.equipment.equipmentIndustrial) {
            this.$store.dispatch('equipment/setVal')
          }
          return state.equipment.equipmentIndustrial
        },
        equipmentBussiness: state => state.equipment.equipmentBussiness,
        equipmentConsume: state => state.equipment.equipmentConsume
      })
    },
    data() {
      return {
        kaiji: 65,
        zaixian: 77
      }
    },
    methods: {
      getMap() {
        var latlong = {};
        latlong["SD"] = {"latitude": 36.66, "longitude": 117.02};
        latlong["JS"] = {"latitude": 32.03, "longitude": 118.45};
        latlong["LN"] = {"latitude": 41.59, "longitude": 123.23};
        latlong["HB"] = {"latitude": 30.32, "longitude": 114.20};
        latlong["HN"] = {"latitude": 28.06, "longitude": 112.58};
        latlong["AH"] = {"latitude": 31.51, "longitude": 117.16};
        latlong["GD"] = {"latitude": 23.08, "longitude": 113.15};
        latlong["GZ"] = {"latitude": 26.36, "longitude": 106.42};
        latlong["CQ"] = {"latitude": 29.34, "longitude": 106.32};
        latlong["TJ"] = {"latitude": 39.05, "longitude": 117.11};
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
        var mapData = [
          {
            "code": "SD",
            "name": "山东",
            "value": 45472,
            "color": "#37a2da",
            "data": [6919, 11925, 5514, 456, 5795, 2140, 12978]
          },
          {
            "code": "JS",
            "name": "江苏",
            "value": 22524,
            "color": "#37a2da",
            "data": [3443, 5933, 2743, 0, 2883, 1065, 6457]
          },
          {"code": "LN", "name": "辽宁", "value": 5846, "color": "#37a2da", "data": [894, 1540, 712, 0, 748, 276, 1676]},
          {"code": "HB", "name": "湖北", "value": 6682, "color": "#37a2da", "data": [1021, 1760, 814, 0, 855, 316, 1916]},
          {"code": "HN", "name": "湖南", "value": 2088, "color": "#37a2da", "data": [319, 550, 254, 0, 267, 99, 599]},
          {
            "code": "AH",
            "name": "安徽",
            "value": 6302,
            "color": "#37a2da",
            "data": [894, 1540, 712, 456, 748, 276, 1676]
          },
          {
            "code": "GD",
            "name": "广东",
            "value": 4840,
            "color": "#37a2da",
            "data": [670, 1155, 534, 456, 561, 207, 1257]
          },
          {"code": "GZ", "name": "贵州", "value": 418, "color": "#37a2da", "data": [64, 110, 51, 0, 53, 20, 120]},
          {
            "code": "CQ",
            "name": "重庆",
            "value": 15130,
            "color": "#37a2da",
            "data": [2266, 3905, 1806, 304, 1898, 701, 4250]
          },
          {"code": "TJ", "name": "天津", "value": 3758, "color": "#37a2da", "data": [574, 990, 458, 481, 178, 1077]},
          {
            "code": "USA",
            "name": "美国",
            "value": 17420,
            "color": "#37a2da",
            "data": [4532, 5546, 245, 954, 345, 674, 2424]
          },
          {
            "code": "MXG",
            "name": "墨西哥",
            "value": 5243,
            "color": "#37a2da",
            "data": [1432, 1352, 786, 563, 234, 342, 1534]
          },
          {
            "code": "GLBY",
            "name": "哥伦比亚",
            "value": 1425,
            "color": "#37a2da",
            "data": [143, 132, 142, 567, 145, 162, 134]
          },
          {"code": "EGDE", "name": "厄瓜多尔", "value": 976, "color": "#37a2da", "data": [131, 46, 66, 512, 89, 56, 76]},
          {"code": "AGT", "name": "阿根廷", "value": 971, "color": "#37a2da", "data": [89, 119, 26, 38, 556, 12, 131]},
          {"code": "WNRL", "name": "委内瑞拉", "value": 1004, "color": "#37a2da", "data": [34, 65, 98, 576, 77, 89, 65]},
          {"code": "TG", "name": "泰国", "value": 1558, "color": "#37a2da", "data": [145, 241, 84, 576, 278, 83, 151]},
          {"code": "YN", "name": "越南", "value": 2401, "color": "#37a2da", "data": [763, 253, 121, 56, 388, 88, 732]},
          {"code": "YDNXY", "name": "印尼", "value": 1399, "color": "#37a2da", "data": [236, 145, 89, 67, 465, 234, 163]},
          {"code": "JP", "name": "日本", "value": 734, "color": "#37a2da", "data": [23, 44, 121, 23, 453, 46, 24]},
          {"code": "YD", "name": "印度", "value": 868, "color": "#37a2da", "data": [45, 12, 234, 12, 35, 45, 485]},
          {
            "code": "BJST",
            "name": "巴基斯坦",
            "value": 1058,
            "color": "#37a2da",
            "data": [189, 201, 167, 77, 190, 45, 189]
          },
          {"code": "XXL", "name": "新西兰", "value": 352, "color": "#37a2da", "data": [34, 45, 64, 22, 99, 23, 65]},
          {"code": "YDL", "name": "意大利", "value": 539, "color": "#37a2da", "data": [231, 23, 43, 143, 12, 9, 78]},
          {"code": "NRLY", "name": "尼日利亚", "value": 1063, "color": "#37a2da", "data": [265, 56, 367, 98, 67, 78, 132]},
          {"code": "MJL", "name": "孟加拉", "value": 1170, "color": "#37a2da", "data": [452, 23, 67, 265, 65, 67, 231]},
          {"code": "ELS", "name": "俄罗斯", "value": 1158, "color": "#37a2da", "data": [268, 26, 76, 166, 89, 76, 457]}
        ]

        var minBulletSize = 15;
        var maxBulletSize = 40;
        var min = Infinity;
        var max = -Infinity;
        // var userColor = '#fbe639'
        // var companyColor = '#45c0f1'
        // var rdColor = '#9fe6b8'

        for (var i = 0; i < mapData.length; i++) {
          var value = mapData[i].value;
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
        for (var i = 0; i < mapData.length; i++) {
          var dataItem = mapData[i];
          var value = dataItem.value;
          var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
          if (square < minSquare) {
            square = minSquare;
          }
          var size = Math.sqrt(square / (Math.PI * 2));
          var id = dataItem.code;
          dataProvider.images.push({
            type: "circle",
            width: size,
            height: size,
            color: dataItem.color,
            longitude: latlong[id].longitude,
            latitude: latlong[id].latitude,
            title: (dataItem => {
              var arr = ['装配', '机加', '检测', '吸塑', '仪表', '机器人', '其他'];
              var str = `<span style="display: block;text-align: left;">${dataItem.name}</span>`;
              dataItem.data.forEach((item, index) => {
                str += `<span style="display: block;text-align: left;">${arr[index]}：${item}</span>`
              })
              return str;
            })(dataItem),
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
            balloonText: "<span style='font-size:14px;'><b>[[title]]</b>总数: [[value]]</span>",
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
      getPie() {
        var chart = AmCharts.makeChart("pie", {
          "type": "pie",
          "color": ["#37a2da", "#32c5e9", "#67e0e3", "#9fe6b8", "#ffdb5c", "#ff9f7f", "#fb7293", "#e062ae", "#e690d1", "#e7bcf3", "#9d96f5", "#8378ea", "#96bfff", "#32c5e9"],
          "labelsEnabled": false,
          "titleField": "name",
          "valueField": "value",
          "dataProvider": [
            {value: 26245, name: '装配'},
            {value: 38001, name: '机加'},
            {value: 16726, name: '检测'},
            {value: 5299, name: '吸塑'},
            {value: 17654, name: '仪表'},
            {value: 7552, name: '机器人'},
            {value: 39826, name: '其他'}
          ],
          "startDuration": 0,
          "depth3D": 15,
          "angle": 30,
          balloon: {
            horizontalPadding: 2,  // 内padding
            maxWidth: 100  // 气泡宽度
          },
          "legend": {
            position: "bottom",
            align: "center",
            maxColumns: 2,
            enabled: true,
            color: '#0091e1'
          }
        });
      },
      getGauge() {
        var option1 = {
          "theme": "light",
          "type": "gauge",
          "axes": [{
            "topTextFontSize": 20,
            "topTextYOffset": 140,
            "axisColor": "#31d6ea",
            "axisThickness": 1,
            "endValue": 100,
            "gridInside": true,
            "inside": true,
            // "radius": "50%",
            "labelsEnabled": false,
            "valueInterval": 10,
            "tickColor": "#67b7dc",
            "startAngle": -90,
            "endAngle": 90,
            "unit": "%",
            "bandOutlineAlpha": 0,
            "bands": [{
              "color": "#0080ff",
              "endValue": 100,
              "innerRadius": "95%",
              "radius": "95%",
              "gradientRatio": [0.2, 0, -0.2],
              "startValue": 0
            }, {
              "color": "#0091e1",
              "endValue": 0,
              "innerRadius": "95%",
              "radius": "95%",
              "gradientRatio": [0.5, 0, -0.5],
              "startValue": 0
            }, {
              "color": "#00CC00",
              "endValue": 60,
              "startValue": 0
            },
              {
                "color": "#ffac29",
                "endValue": 90,
                "startValue": 60
              },
              {
                "color": "#ea3838",
                "endValue": 100,
                "startValue": 90,
              }]
          }],
          "arrows": [{
            "alpha": 1,
            "innerRadius": "0%",
            "nailRadius": 0,
            "radius": "95%"
          }]
        };
        var option2 = {
          "theme": "light",
          "type": "gauge",
          "axes": [{
            "topTextFontSize": 20,
            "topTextYOffset": 140,
            "axisColor": "#31d6ea",
            "axisThickness": 1,
            "endValue": 100,
            "gridInside": true,
            "inside": true,
            // "radius": "50%",
            "labelsEnabled": false,
            "valueInterval": 10,
            "tickColor": "#67b7dc",
            "startAngle": -90,
            "endAngle": 90,
            "unit": "%",
            "bandOutlineAlpha": 0,
            "bands": [{
              "color": "#0080ff",
              "endValue": 100,
              "innerRadius": "95%",
              "radius": "95%",
              "gradientRatio": [0.2, 0, -0.2],
              "startValue": 0
            }, {
              "color": "#0091e1",
              "endValue": 0,
              "innerRadius": "95%",
              "radius": "95%",
              "gradientRatio": [0.5, 0, -0.5],
              "startValue": 0
            }, {
              "color": "#00CC00",
              "endValue": 60,
              "startValue": 0
            },
              {
                "color": "#ffac29",
                "endValue": 90,
                "startValue": 60
              },
              {
                "color": "#ea3838",
                "endValue": 100,
                "startValue": 90,
              }]
          }],
          "arrows": [{
            "alpha": 1,
            "innerRadius": "0%",
            "nailRadius": 0,
            "radius": "95%"
          }]
        };
        var chart1 = AmCharts.makeChart("gauge1", option1);
        var chart2 = AmCharts.makeChart("gauge2", option2);
        setInterval(() => {
          let arr = [-2 ,-1, -0.5, 0, 0.5, 1, 2];
          let key = Math.round(Math.random() * 6);
          this.kaiji = this.kaiji + arr[key];
          chart1.arrows[0].setValue(this.kaiji);
          // chart1.axes[0].setTopText(value + " %");
          // adjust darker band to new value
          // chart1.axes[0].bands[1].setEndValue(value);
        }, 2000)
        setInterval(() => {
          let arr = [-2 ,-1, -0.5, 0, 0.5, 1, 2];
          let key = Math.round(Math.random() * 6);
          this.zaixian = this.zaixian + arr[key];
          chart2.arrows[0].setValue(this.zaixian);
          // chart2.axes[0].setTopText(value + " %");
          // adjust darker band to new value
          // chart2.axes[0].bands[1].setEndValue(value);
        }, 2000)

      },
      getBar() {
        var chart = AmCharts.makeChart("bar", {
          "type": "serial",
          "theme": "light",
          "title": {},
          "dataProvider": [{
            "name": "装配",
            "number": 31473
          }, {
            "name": "机加",
            "number": 45571
          }, {
            "name": "检测",
            "number": 20557
          }, {
            "name": "吸塑",
            "number": 6354
          }, {
            "name": "仪表",
            "number": 21170
          }, {
            "name": "机器人",
            "number": 9056
          }, {
            "name": "其他",
            "number": 47262
          }],
          "valueAxes": [{
            "axisAlpha": 0,
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
          }],
          "gridAboveGraphs": true,
          "startDuration": 1,
          "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]kh</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "number",
            "fixedColumnWidth": 20  // 柱条宽度
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
      getPie2D() {
        var data = [{
          "name": "装配",
          "number": 31473
        }, {
          "name": "机加",
          "number": 45571
        }, {
          "name": "检测",
          "number": 20557
        }, {
          "name": "吸塑",
          "number": 6354
        }, {
          "name": "仪表",
          "number": 21170
        }, {
          "name": "机器人",
          "number": 9056
        }, {
          "name": "其他",
          "number": 47262
        }];
        var chart = AmCharts.makeChart("pie2D", {
          "type": "pie",
          "theme": "light",
          "dataProvider": data,
          "titleField": "name",
          "valueField": "number",
          "startDuration": 0,
          "labelRadius": 5,
          "radius": "40%",
          "innerRadius": "60%",
          "export": {
            "enabled": false
          },
          balloon: {
            horizontalPadding: 2,  // 内padding
            maxWidth: 100
          },
          "labelsEnabled": false,
          "legend": {
            position: "right",
            align: "center",
            verticalGap: 2,
            maxColumns: 2,
            enabled: true,
            color: '#0091e1',
            fontSize: 12,
            marginBottom: 0,
            marginTop: 0
          }
        });
      },
      getPie2D3() {
        var data = [{
          "title": "模拟量",
          "value": 785
        }, {
          "title": "开关量",
          "value": 4215
        }];
        var chart = AmCharts.makeChart("pie2D3", {
          "type": "pie",
          "theme": "light",
          "dataProvider": data,
          "titleField": "title",
          "valueField": "value",
          "startDuration": 0,
          "labelRadius": 5,
          "radius": "40%",
          "innerRadius": "60%",
          balloonText: '[[title]]：[[percents]]％（[[value]]万）\n [[description]]', // 气泡文本
          "export": {
            "enabled": false
          },
          balloon: {
            horizontalPadding: 2,  // 内padding
            maxWidth: 100
          },
          "labelsEnabled": false,
          "legend": {
            position: "right",
            align: "center",
            verticalGap: 2,
            maxColumns: 2,
            enabled: true,
            color: '#0091e1',
            fontSize: 12,
            marginBottom: 0,
            marginTop: 0,
            valueText: '[[value]]万'   // 值文本
          }
        });
      },
      getPie2D2() {
        var data = [{
          "title": "良好",
          "value": 64001
        }, {
          "title": "正常",
          "value": 54266
        }, {
          "title": "临界",
          "value": 32582
        }, {
          "title": "超期",
          "value": 454
        }];
        var chart = AmCharts.makeChart("pie2D2", {
          "type": "pie",
          "theme": "light",
          "dataProvider": data,
          "titleField": "title",
          "valueField": "value",
          "startDuration": 0,
          "labelRadius": 5,
          "radius": "40%",
          "innerRadius": "60%",
          "export": {
            "enabled": false
          },
          balloon: {
            horizontalPadding: 2,  // 内padding
            maxWidth: 100
          },
          "labelsEnabled": false,
          "legend": {
            position: "right",
            align: "center",
            verticalGap: 2,
            maxColumns: 2,
            enabled: true,
            color: '#0091e1',
            fontSize: 12,
            marginBottom: 0,
            marginTop: 0
          }
        });
      },
      getAxis() {
        let data = [];
        let chart = AmCharts.makeChart("axis", {
          "type": "serial",
          "theme": "light",
          "marginRight": 10,
          "marginLeft": 0,
          "autoMarginOffset": 0,
          "dataDateFormat": "JJ：NN：SS",    // 修改格式
          "valueAxes": [{
            "id": "v1",
            "axisAlpha": 0,
            "position": "left",
            "ignoreAxisWidth": false,
            minimum: 0
          }],
          "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
          },
          "graphs": [{
            "id": "g1",
            "balloon": {
              "drop": false,
              "adjustBorderColor": false,
              "color": "#ffffff",
              "type": "smoothedLine"
            },
            "fillAlphas": 0.2,
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "title": "red line",
            "useLineColorForBulletBorder": true,
            "valueField": "value",
            "balloonText": "<span style='font-size:14px;'>[[value]]MB/S</span>"
          }],
          "chartCursor": {
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "zoomable": false,
            "valueZoomable": false,
            "valueLineAlpha": 0.5
          },
          // "valueScrollbar": {
          //   "autoGridCount": true,
          //   "color": "#000000",
          //   "scrollbarHeight": 50
          // },
          "categoryField": "date",
          "categoryAxis": {
            "parseDates": false,  // 修改time格式要改
            "dashLength": 1,
            "minorGridEnabled": true
          },
          "export": {
            "enabled": false
          },
          "dataProvider": data
        });
        setInterval(() => {
          let value = Math.random()
          let data = {
            date: this.getDate(),
            value: parseInt((value < 0.5 ? value + 0.4 : value) * 100)
          }
          chart.dataProvider = [...chart.dataProvider, data]
          // 限制10调数据
          if (chart.dataProvider.length > 10) {
            chart.dataProvider.splice(0, 1);
          }
          chart.validateData()  // 更新数据
        }, 1000)

      },
      getDate() {
        let date = new Date();
        // let y = date.getFullYear();
        // let m = date.getMonth() + 1;
        // m = m < 10 ? '0' + m : m;
        // let d = date.getDate();
        // d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let min = date.getMinutes();
        min = min < 10 ? ('0' + min) : min;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return `${h}:${min}:${s}`;
      }
    },
    mounted() {
      this.getMap()
      this.getPie()
      this.getGauge()
      this.getBar()
      this.getPie2D()
      this.getPie2D2()
      this.getPie2D3()
      this.getAxis()
    }
  }
</script>

<style scoped lang="scss">
  $blue: #0091e1;
  .IndustrialPlant {
    position: relative;
    display: flex;
    height: 100%;
    padding: 0 0.5rem;
    .left, .right {
      float: left;
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 7.2rem;
      .title {
        text-align: left;
        font-size: .4rem;
        padding: 0;
        padding-left: .5rem;
        height: .8rem;
        line-height: .8rem;
        font-weight: 600;
        color: $blue;
        margin: 0;
        span {
          color: #f52340;
        }
      }
      .chart {
        flex: 1;
        width: 100%;
        min-height: 5rem;
        #gauge1, #gauge2 {
          height: 2.5rem;
          width: 5rem;
          float: left;
        }
        .data {
          height: 2.5rem;
          width: 2.2rem;
          float: right;
          span:first-child {
            text-align: center;
            margin-top: .5rem;
            display: block;
            height: .5rem;
            font-size: .32rem;
            line-height: .5rem;
            background: $blue;
            color: #ffffff;
          }
          span:last-child {
            display: block;
            text-align: center;
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: .8rem;
            color: $blue;
          }
        }
      }
    }
    .right {
      float: right;
    }
    .center {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 0 0.5rem;
      .map {
        /*flex: 1;*/
        /*margin-left: .5rem;*/
        box-sizing: border-box;
        border: .2rem solid #fafafa;
        -webkit-border-radius: .24rem;
        -moz-border-radius: .24rem;
        border-radius: .24rem;
        width: 21rem;
        height: 15.6rem;
        margin: 0 auto;
      }
    }
  }

  .title {
    margin: 0;
    line-height: 1rem;
    margin-top: 0.34rem;
    margin-bottom: 0.6rem;
    text-align: center;
    color: $blue;
    font-size: 44px;
    color: #0091e1;
    font-weight: 900;
  }

  .IndustrialData {
    margin-bottom: .5rem;
    .btn {
      width: 5rem;
      height: .8rem;
      line-height: .8rem;
      color: #FFFFFF;
      background: $blue;
      display: inline-block;
      border-radius: 4px;
      text-decoration: none;
    }
    .router-link-active {
      background: #ca4341;
    }
    height: .8rem;
    text-align: center;
    span {
      color: #ffffff;
      font-size: .36rem;
      margin-right: .4rem;
    }
  }

  .IndustrialMap {
    .pie {
      width: 8.8rem;
      height: 8.8rem;
      float: right;
      margin-right: .5rem;
    }
  }

  .breadcrumb {
    position: absolute;
    left: 1.8rem;
    top: 0.6rem;
  }

  .special-border {
    margin-top: 3rem;
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
</style>
