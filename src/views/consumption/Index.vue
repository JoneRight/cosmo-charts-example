<template>
    <section class="interlBox">
      <!-- 消费设备 - 物联网运营中心 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" id="interlBox-left">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>消费设备</el-breadcrumb-item>
      </el-breadcrumb>
        <div class="interl_left">
           <div class="special-border"></div>
            <div class="inter_left_one">
              <!-- 全国智慧场景 -->
                <p class="inter_left_two_top">全国智慧场景使用情况：</p>
                <tr>
                    <th>累计推送次数：</th>
                    <td><coun-to :starVal='0' :endVal='pushTime' :duration='3000'/>次</td>
                </tr>
                <tr>
                    <th>累计推送设备：</th>
                    <td><coun-to :starVal='0' :endVal='pushEquipment' :duration='3000'/>台</td>
                </tr>
                <tr>
                    <th>累计推送家庭：</th>
                     <td><coun-to :starVal='0' :endVal='pushFamily' :duration='3000'/>户</td>
                </tr>
            </div>
            <div class="inter_left_two">
                <p class="inter_left_two_top">各类网器数量占比：</p>
                <div id="pie2D" class="chart"></div>
                <div id="legend" style="height: 1.4rem ;margin-bottom:.2rem"></div>
                <!-- pie2D各类网器占比率 -->
            </div>
            <div class="inter_left_three">
                <p class="inter_left_two_top">智慧家庭在线率：</p>
                <ConsoleCoder/>
                <!-- <InterlBusiness/> -->
            </div>
        </div>
        <div class="interl_content">
            <div class="interl_top">COSMOPlat物联网运营中心</div>
            <ConsoleWorldMap/>
        </div>
        <div class="interl_right">
            <div class="special-border"></div>
            <div class="inter_right_one">
              <p class="inter_left_two_top" id="inter_rigth_tittle">每分钟交互次数趋势图：</p>
              <span class="interl_right_numberr">(万台/分钟)</span>
              <ConsoleWebSecurity/>
            </div>
            <div class="inter_right_two">
                <p class="inter_left_two_top" id="inter_rigth_tittle">每小时在线网器数量趋势图：</p>
                <span class="interl_right_numberr">(万台/分钟)</span>
                <ConsoleBusiness/>
            </div>
            <div class="inter_right_three">
                <p class="inter_left_two_top" id="inter_rigth_tittle">月累计交互趋势图：</p>
                <span class="interl_right_numberr">(亿次/月)</span>
                <ConsoleEquipment/>
            </div>
        </div>
    </section>
</template>

<script>
    import ConsoleWorldMap from '../../components/console/ConsoleWorldMap.vue'
    import ConsoleEquipment from '../../components/console/ConsoleEquipment.vue'
    import ConsoleWebSecurity from '../../components/console/ConsoleWebSecurity.vue'
    import ConsoleCoder from '../../components/console/ConsoleCoder.vue'
    import ConsoleBusiness from '../../components/console/ConsoleBusiness.vue'
    import counTo from 'vue-count-to'
    import chinaLow from '../../../static/ammap/maps/js/chinaLow.js';
    export default {
        data() {
            return {
                kaiji: 43,
              zaixian: 71,
              pushTime:2859665312,//累计推送次数
              pushEquipment:3666363,//累计推送设备
              pushFamily:2902142,//累计推送家庭
            }
        },
        components:{
            ConsoleWorldMap,//中间地图
            ConsoleWebSecurity,//右侧第一个图(每分钟交互次数趋势图)
            ConsoleBusiness,//右侧第二个图(每小时在线网器数量趋势图)
            ConsoleEquipment,//右侧第三个图(月累计交互趋势图)
            ConsoleCoder,//左侧智慧家庭在线率
            counTo,//数字滚动
        },
        mounted(){
            this.getPie2D();
            this.getGauge();
        },
        methods: {
            getPie2D() {
            var chart;
var legend;
var selected;

var types = [{
  type: "衣联设备",
  percent: 1157836,
  color: "#ff9e01",
  subs: [{
    type: "智能洗衣机",
    percent: 680303
  }, {
    type: "儿童智能衣柜",
    percent: 73945
  }, {
    type: "小衣管家",
    percent: 188543
  },{
    type: "衣物护理柜",
    percent: 32347
  },{
    type: "智能鞋柜",
    percent: 26598
  },{
    type: "智能衣厨",
    percent: 128572
  },{
    type: "3D试衣镜",
    percent: 27528
  }]
}, {
  type: "空气净化",
  percent: 2449758,
  color: "#b0de09",
  subs: [{
    type: "空气净化器",
    percent: 1096322
  }, {
    type: "空气魔方",
    percent: 523452
  }, {
    type: "车载净化器",
    percent: 476532
  }, {
    type: "新风机",
    percent: 353452
  }]
},{
  type: "智能家居",
  percent:6847479,
  color: "#0091e1",
  subs: [{
    type: "安防报警",
    percent: 784030
  }, {
    type: "灯光照明",
    percent: 947530
  }, {
    type: "环境监测",
    percent: 445395
  }, {
    type: "智能门锁",
    percent: 654284
  }, {
    type: "扫地机器人",
    percent: 665323
  }, {
    type: "智能空调",
    percent: 1245204
  }, {
    type: "智能冰箱",
    percent: 1153402
  }, {
    type: "其他",
    percent: 952311
  }]
},{
  type: "可穿戴设备",
  percent: 3293432,
  color: "#40d9ed",
},{
  type: "其他",
  percent: 6661770,
  color: "#e5eb61",
}];

function generateChartData() {
  var chartData = [];
  for (var i = 0; i < types.length; i++) {
    if (i == selected) {
      for (var x = 0; x < types[i].subs.length; x++) {
        chartData.push({
          type: types[i].subs[x].type,
          percent: types[i].subs[x].percent,
          color: types[i].color,
          pulled: true
        });
      }
    } else {
      chartData.push({
        type: types[i].type,
        percent: types[i].percent,
        color: types[i].color,
        id: i
      });
    }
  }
  return chartData;
  }

  AmCharts.makeChart("pie2D", {
      "type": "pie",
      "theme": "light",
        "dataProvider": generateChartData(),
        "labelText": "[[title]]: [[value]]",
        "balloonText": "[[title]]: [[value]]",
        "titleField": "type",
        "labelsEnabled": false,
        "valueField": "percent",
        "outlineColor": "#FFFFFF",
        "outlineAlpha": 0.8,
        "outlineThickness": 2,
        "radius": "40%",//圆的大小
        "innerRadius": "50%",
        "colorField": "color",
        "pulledField": "pulled",
        "legend": {
            position: "left",
            align:"center",
            divId: "legend",
            verticalGap: 2,
            maxColumns: 3,
            markerSize:10,
            spacing: 5,
            enabled: true,
            color: '#0091e1',
            fontSize: 11,
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            labelWidth:70,
            valueText: '',
            valueWidth: 0,
            verticalGap:0
          },
        "listeners": [{
          "event": "clickSlice",
          "method": function(event) {
            var chart = event.chart;
            if (event.dataItem.dataContext.id != undefined) {
              selected = event.dataItem.dataContext.id;
            } else {
              selected = undefined;
            }
            chart.dataProvider = generateChartData();
            chart.validateData();
          }
        }],
        "export": {
          "enabled": false
        }
      });
          },
            getGauge() {
            var option1 =  {
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
                "labelsEnabled":false,
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
                },{
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
            var option2 =  {
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
                "labelsEnabled":false,
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
                },{
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
            setTimeout(() => {
              let value = this.kaiji;
              chart1.arrows[0].setValue(value);
              chart1.axes[0].setTopText(value + " %");
              // adjust darker band to new value
              chart1.axes[0].bands[1].setEndValue(value);
            },500)
            setTimeout(() => {
              let value = this.zaixian;
              chart2.arrows[0].setValue(value);
              chart2.axes[0].setTopText(value + " %");
              // adjust darker band to new value
              chart2.axes[0].bands[1].setEndValue(value);
            },500)

          },
        },
    }
</script>

<style scoped lang="scss">
    .interl_top{
    margin-top: 0.34rem;
    margin-bottom: 0.6rem; 
    text-align: center;
    font-size: 44px;
    color: #0191e1;
    font-weight: 900;
    line-height: 1rem;
    vertical-align: top;
  }
  .interlBox{
      position: relative;
      display: flex;
  }
  #interlBox-left{
    position: absolute;
    left: 1.8rem;
    top: 0.6rem;
  }
  #inter_rigth_tittle{
    width: 6rem;
  }
  .interl_left{
      width: 7.2rem;
      height: 17rem;
      float: left;
      // position: absolute;
      // left: .5rem;
      margin-left: .5rem;
      .inter_left_one{
        padding:0.2rem 0;
      }
       th{
        width: 3rem;
        text-align: end;
        line-height: 1rem;
        font-size: 0.4rem;
        font-weight: bold;
        color: #0091e1;
        }
        td{
        font-size: 0.38rem;
        font-weight: 600;
        padding-left:0.4rem;
        color: #999
        }
  }
  .inter_left_two_top{
    font-size: 0.44rem;
    color: #0091e1;
    width: 5rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.42rem;
    font-weight: bold;
  }
  .interl_content{
      flex: 1;
      height: 13rem;
  }
  .interl_right{
      width: 7.2rem;
      height: 17rem;
      margin-right: .5rem;
      float: right;
  }
  .inter_top_border{
    margin-top: 0.12rem;
    width: 100%;
    height: 0.04rem;
    background-color: #d8d9da;
    position: relative;
  }
  .inter_top_border_left{
    position: absolute;
    left: 0;
    top: 0.02rem;
    width: 0.32rem;
    height: 0.2rem;
    background-color: #d8d9da;
  }
  .inter_top_border_right{
    position: absolute;
    right: 0;
    top: 0.02rem;
    width: 0.32rem;
    height: 0.2rem;
    background-color: #d8d9da;
  }
  #legend {
    height: 1.4rem !important;
  }
.chart {
    width: 100%;
    height: 5rem;
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
        line-height: .52rem;
        background: #00AAFF;
        color: #ffffff;
        }
        span:last-child {
        display: block;
        text-align: center;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: .8rem;
        color: #00AAFF;
        }
    }
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