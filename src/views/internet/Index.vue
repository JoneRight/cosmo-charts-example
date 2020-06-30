<template>
    <section class="interlBox">
      <!-- 商用设备 - 物联网运营中心 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" id="interlBox-left">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商业设备</el-breadcrumb-item>
      </el-breadcrumb>
        <div class="interl_left">
            <div class="special-border"></div>
            <div class="inter_left_one">
                <tr>
                    <th>总装机量：</th>
                    <td><coun-to :starVal='0' :endVal='LoadingCapacity' :duration='3000'/>台</td>
                </tr>
                <tr>
                    <th>累计时间：</th>
                    <td><coun-to :starVal='0' :endVal='AccumulativeTime' :duration='3000'/>h</td>
                </tr>
                <tr>
                    <th>累计节电量：</th>
                     <td><coun-to :starVal='0' :endVal='energy' :duration='3000'/>kwh</td>
                </tr>
            </div>
            <div class="inter_left_two">
                <p class="inter_left_two_top">各类设备数量占比：</p>
                <div id="pie2D" class="chart"></div>
            </div>
            <div class="inter_left_three">
                <p class="inter_left_two_top">累计服务时间(kh)：</p>
                <InterlBusiness/>
            </div>
        </div>
        <div class="interl_content">
              <div class="interl_top">COSMOPlat物联网运营中心</div>
            <InterlWorldMap/>
        </div>
        <div class="interl_right">
            <div class="special-border"></div>
            <div class="inter_right_one">

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
            </div>
            <div class="inter_right_two">
                <p class="inter_left_two_top">告警状态曲线(24h):</p>
                <InterlWebSecurity/>
            </div>
            <div class="inter_right_three">
                <p class="inter_left_two_top">设备运行状态：</p>
                <InterlEquipment/>
            </div>
        </div>
    </section>
</template>

<script>
    import InterlWorldMap from '../../components/interl/InterlWorldMap.vue'
    import InterlBusiness from '../../components/interl/InterlBusiness.vue'
    import InterlEquipment from '../../components/interl/InterlEquipment.vue'
    import InterlWebSecurity from '../../components/interl/InterlWebSecurity.vue'
    import counTo from 'vue-count-to'
    import chinaLow from '../../../static/ammap/maps/js/chinaLow.js';
    export default {
        data() {
            return {
              kaiji: 63,
              zaixian: 75,
              LoadingCapacity:2091,//装机量
              AccumulativeTime:1383200,//累计时间
              energy:19747596,//累计节电量
            }
        },
        components:{
            InterlWorldMap,//地图
            InterlBusiness,//图表累计服务时间
            InterlEquipment,//图表设备运行状态
            InterlWebSecurity,//告警状态曲线
            counTo
        },
        mounted(){
            this.getPie2D();
            this.getGauge();
        },
        methods: {
            getPie2D() {
            var data = [{
              "name": "商用空调",
              "value": 873
            },{
              "name": "商用冷柜",
              "value":653
            },{
              "name": "其他",
              "value": 565
            }];
            var chart = AmCharts.makeChart("pie2D", {
              "type": "pie",
              "theme": "light",
              "dataProvider": data,
              "titleField": "name",
              "valueField": "value",
              "startDuration": 0,
              "labelRadius": 5,
              "radius": "40%",
              "innerRadius": "60%",
              "export": {
                "enabled": false
              },
              "labelsEnabled": false,
              "legend": {
                position: "right",
                align:"center",
                verticalGap: 12,//间距
                maxColumns: 2,
                enabled: true,
                color: '#0091e1',
                fontSize: 12,
                marginBottom: 0,
                marginTop: 0
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
      display: flex;
      position: relative;
  }
  #interlBox-left{
    position: absolute;
    left: 1.8rem;
    top: 0.6rem;
  }
  .interl_left{
      width: 7.2rem;
      height: 17rem;
      float: left;
      // position: absolute;
      // left: .5rem;
      margin-left: .5rem;
      .inter_left_one{
        padding:0.8rem 0;
      }
       th{
        width: 2.6rem;
        text-align: end;
        line-height: 1rem;
        font-size: 0.42rem;
        font-weight: bold;
        color: #0091e1;
        }
        td{
        font-size: 0.42rem;
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