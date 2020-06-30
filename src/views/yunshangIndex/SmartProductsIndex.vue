<template>
  <div class="SmartPro">
    <div class="left">
      <div class="special-border"></div>
      <div class="title spc product-list">
        <p>设备列表</p>
        <div class="select-area">
          <el-select v-model="value" placeholder="选择区域" @change="chooseAreaList">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <el-table :data="tableData" height="350" border style="width: 100%">
        <el-table-column prop="sn" label="设备编号" width="100"></el-table-column>
        <el-table-column prop="addr" label="所在地"></el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button size="mini" @click="getRunInfo(scope.$index,scope.row.sn,scope.row.addr)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="middle-border"></div>
      <div class="title spc onlineratio-title">
        <p>设备在线</p>
        <p class="info online-ratio">
          <span class="number online-rate"></span> %
        </p>
      </div>
      <div id="gauge-online"></div>
    </div>
    <div class="center">
      <div class="centerTop">
        <h3>衣联生态智能设备在线分布数据显示</h3>
        <ul class="topData">
          <li>
            <span class="title">覆盖区县:</span>
            <count-to class="num" :startVal='0' :endVal='985' :duration='3000'></count-to>
          </li>
          <li>
            <span class="title">设备总数:</span>
            <span class="title"><count-to class="num" :startVal='0' :endVal='119' :duration='3000'></count-to>万</span>
          </li>
        </ul>
      </div>
      <div id="centerMap" class="map" ref="map"></div>
    </div>
    <div class="right">
      <div class="special-border"></div>
      <div class="title spc">
        <p>设备详情查看</p>
      </div>
      <div class="smart-product_pic">
          <img :src="nowSmart">
      </div>
      <div class="info-table_box">
        <div class="info-table_title">网器信息</div>
        <el-table :data="hardwareInfo" :show-header=false border style="width: 100%">
          <el-table-column prop="note" label="项目" width="151"></el-table-column>
          <el-table-column prop="info" label="参数" width="200"></el-table-column>
        </el-table>
      </div>
      <div class="info-table_box">
        <div class="info-table_title">衣物信息</div>
        <el-table :data="clothesInfo"  :show-header=false border style="width: 100%">
          <el-table-column prop="note" label="项目" width="151"></el-table-column>
          <el-table-column prop="info" label="参数" width="200"></el-table-column>
        </el-table>
      </div>
      <div class="info-table_box">
        <div class="info-table_title">运行状态</div>
        <el-table :data="runstateInfo" :show-header=false border style="width: 100%">
          <el-table-column prop="note" label="项目" width="151"></el-table-column>
          <el-table-column prop="info" label="参数" width="200"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/yunshang' }">衣联生态</el-breadcrumb-item>
        <el-breadcrumb-item>智能设备</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
    import chinaLow from '../../../static/ammap/maps/js/chinaLow.js'
    import zh from '../../../static/ammap/lang/zh.js'
    import countTo from 'vue-count-to'
    import smart1 from '@/assets/yunshang_img/smart_product1.jpg'
    import smart2 from '@/assets/yunshang_img/smart_product2.jpg'
    import smart3 from '@/assets/yunshang_img/smart_product3.jpg'
    import { positionConfig, areaConfig } from '../../constants/yunmapConfig'
    import { smartProductInfo } from '../../constants/smartProInfo'
    export default {
        name: "SmartProductsIndex",
        components: {
          countTo
        },
        data() {
          return {
            smartProductInfo,
            positionConfig,
            areaConfig,
            nowSmart: smart1,
            tcVal: 100,
            qjVal: 10,
            cdcVal: 5,
            tableData: [],
            hardwareInfo: [
              {"note": "设备编号"   ,"info": "--"},
              {"note": "设备位置"   ,"info": "--"},
            ],
            clothesInfo: [
              {"note": "衣服材质"   ,"info": "--"},
              {"note": "衣物重量"   ,"info": "--"},
              {"note": "洗涤次数"   ,"info": "--"},
              {"note": "适配程序"   ,"info": "--"},
            ],
            runstateInfo: [
              {"note": "运行状态"   ,"info": "--"},
              {"note": "洗涤水温"   ,"info": "--"},
              {"note": "浊度"       ,"info": "--"},
              {"note": "耗电量"     ,"info": "--"},
              {"note": "耗水量"     ,"info": "--"},
              {"note": "耗时"       ,"info": "--"},
              {"note": "输入电压"   ,"info": "--"}
            ],
            options: [],
            value: '北京市',
            zaixian: 56
          }
        },
        methods: {
            drawMap(innserPositionConfig, innerAreaConfig) {
                function generateMap () {
                    var minBulletSize = 15;
                    var maxBulletSize = 40;
                    var min = Infinity;
                    var max = -Infinity;
                    var rdColor = '#2264d1'

                    for (var i = 0; i < innerAreaConfig.length; i++) {
                        var value = innerAreaConfig[i].value;
                        if (value < min) {
                            min = value;
                        }
                        if (value > max) {
                            max = value;
                        }
                    }
                    const dataProvider = {
                        images: [],
                        map: "chinaLow",
                        getAreasFromMap: true,
                    }
                    const maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
                    const minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
                    for (var i = 0; i < innerAreaConfig.length; i++) {
                        var dataItem = innerAreaConfig[i];
                        var value = dataItem.value;
                        var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
                        if (square < minSquare) {
                            square = minSquare;
                        }
                        var size = Math.sqrt(square / (Math.PI * 2));
                        var id = dataItem.code;
                        var color
                        if (id.indexOf('-rd') !== -1) {
                            color = rdColor
                        }
                        dataProvider.images.push({
                            type: "circle",
                            width: size,
                            height: size,
                            color: color,
                            longitude: innserPositionConfig[id].longitude,
                            latitude: innserPositionConfig[id].latitude,
                            title: dataItem.name,
                            value: value,
                            rollOverScale: 2,
                            zoomLevel: 5,
                        });
                    }

                    const myMap = AmCharts.makeChart("centerMap", {
                        type: "map",
                        theme: 'miller',
                        color: "black",
                        language: "zh",
                        imagesSettings: {
                            balloonText: "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>",
                            alpha: 0.6,
                        },
                        dataProvider,
                        areasSettings: {
                            autoZoom: true,
                            selectable: true,
                            selectedColor: "#ccc",
                            color: 'rgb(221, 221, 221)',
                            selectedOutlineColor: '#fff',
                            rollOverOutlineColor: '#fff',
                            rollOverColor: '#ccc',
                        },
                        listeners: {
                            'event': 'click',
                            'method': function(e) {
                                console.log(e)
                                console.log(1111)
                            }
                        }
                    })
                    // const a = myMap.clickMapObject()
                }

                if (AmCharts.isReady) {
                    setTimeout(generateMap, 0);
                } else {
                    AmCharts.ready(generateMap);
                }
            },
            drawGaugeOL() {
                var guageOption =  {
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
                var chart = AmCharts.makeChart("gauge-online", guageOption);

                var _this = this;
                var onlineRate = 56;
                var numRun = $(".online-rate").numberAnimate({ num: onlineRate.toString(), speed: 2000, symbol: "," });
                setTimeout(randomValue,500);
                setInterval(randomValue, 11000);

                // set random value
                function randomValue() {
                    var temp = Math.round(Math.random() * 3);
                    var bo = Math.round(Math.random()*10);
                    if(bo % 2 == 0) {
                        onlineRate += temp;
                    }else {
                        onlineRate -= temp;
                    }
                    if(onlineRate <= 10) onlineRate = 10;
                    if(onlineRate >= 90) onlineRate = 90;

                    _this.zaixian = onlineRate;
                    chart.arrows[0].setValue(onlineRate);
                    numRun.resetData(onlineRate);
                }
            },
            getRunInfo(i,sn,addr) {
              this.createRunInfo(i,sn,addr);
            },
            getProductList(i) {
              this.tableData = this.smartProductInfo[i].list;
            },
            createRunInfo(idx,sn,addr) {
              this.hardwareInfo = [
                {"note": "设备编号"   ,"info": sn},
                {"note": "设备位置"   ,"info": addr},
              ];
              if(this.tableData[idx].runstateInfo[0].info) {
                this.clothesInfo = this.tableData[idx].clothesInfo;

                var tempInfo = this.tableData[idx].runstateInfo;
                tempInfo[0].info = '正在运行';
                this.runstateInfo = tempInfo;
              }else {
                this.clothesInfo = [
                  {"note": "衣服材质"   ,"info": "--"},
                  {"note": "衣物重量"   ,"info": "--"},
                  {"note": "洗涤次数"   ,"info": "--"},
                  {"note": "适配程序"   ,"info": "--"},
                ];

                this.runstateInfo = [
                  {"note": "运行状态"   ,"info": "暂未运行"},
                  {"note": "洗涤水温"   ,"info": "--"},
                  {"note": "浊度"       ,"info": "--"},
                  {"note": "耗电量"     ,"info": "--"},
                  {"note": "耗水量"     ,"info": "--"},
                  {"note": "耗时"       ,"info": "--"},
                  {"note": "输入电压"   ,"info": "--"}
                ];
              }
            },
            chooseAreaList(val) {
              // console.log(val);
              if(val > 3) return;
              this.getProductList(val);
            },
            returnAreaInfo() {
              this.options = [{"value":0,"label":"北京市"},{"value":1,"label":"上海市"},{"value":2,"label":"山东省"},{"value":3,"label":"天津市"},{"value":4,"label":"重庆市"},{"value":5,"label":"河北省"},{"value":6,"label":"山西省"},{"value":7,"label":"辽宁省"},{"value":8,"label":"吉林省"},{"value":9,"label":"黑龙江省"},{"value":10,"label":"江苏省"},{"value":11,"label":"浙江省"},{"value":12,"label":"安徽省"},{"value":13,"label":"福建省"},{"value":14,"label":"江西省"},{"value":15,"label":"河南省"},{"value":16,"label":"湖北省"},{"value":17,"label":"湖南省"},{"value":18,"label":"广东省"},{"value":19,"label":"海南省"},{"value":20,"label":"四川省"},{"value":21,"label":"贵州省"},{"value":22,"label":"云南省"},{"value":23,"label":"陕西省"},{"value":24,"label":"甘肃省"},{"value":25,"label":"青海省"},{"value":26,"label":"台湾省"},{"value":27,"label":"内蒙古自治区"},{"value":28,"label":"广西壮族自治区"},{"value":29,"label":"西藏自治区"},{"value":30,"label":"宁夏回族自治区"},{"value":31,"label":"新疆维吾尔自治区"},{"value":32,"label":"香港特别行政区"},{"value":33,"label":"澳门特别行政区"}];
            }
        },
        mounted() {
          this.drawMap(positionConfig, areaConfig);
          this.drawGaugeOL();
          this.getProductList(0);
          this.returnAreaInfo();
        }
    }
</script>

<style scoped lang="scss">
  $blue: #0091e1;
  .SmartPro {
    position: relative;
    overflow: hidden;
    display: flex;
    height: 100%;
    padding: 0 .5rem;
    .center {
      flex: 1;
      display: flex;
      flex-direction: column;
      float: left;
      overflow: hidden;
      .centerTop {
        margin: 0 auto;
        h3 {
          font-size: 44px;
          color: $blue;
          font-weight: 900;
          text-align: center;
          margin-top: 0.6rem;
        }
      }
      .topData {
        margin: .4rem auto 0;
        overflow: hidden;
        width: 16rem;
        display: flex;
        justify-content: space-around;
        li {
          width: 4rem;
          float: left;
          span {
            padding: 0;
            font-size: 0.32rem;
            text-align: center;
          }
          .num {
            font-weight: bold;
            text-align: center;
            font-size: 0.4rem;
            color: $blue;
          }
        }
      }
    }
    .map {
      margin: 1rem auto 0;
      /*float: left;*/
      min-width: 21rem;
      min-height: 12.5rem;
      flex: 1;
      border: 10px solid #fafafa;
      border-radius: .24rem;
    }
    .left, .right {
      float: left;
      width: 7.2rem;
      display: flex;
      flex-direction: column;
      /*background: #666666;*/
      #gauge-online {
          width: 100%;
          height: 3rem;
      }
      .chart {
        box-sizing: border-box;
        flex: 1;
        width: 100%;
        height: 30%;
        min-height: 5rem;
      }
      .red {
        color: #f52340;
      }
    }
    .left {
      .product-list {
        position: relative;
        height: 1rem;
        .select-area {
          width: 3rem;
          position: absolute;
          right: .1rem;
          top: 0.05rem;
        }
      }
      .info {
          color: $blue;
          font-size: 16px;
          font-weight: 600;
          padding-right: 1rem;
          text-align: center;
          .online-rate {
              color: red;
          }
      }
    }
    .right {
      float: right;
      .info-table_box {
        .info-table_title {
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background-color: $blue;
          color: #fff;
        }
      }
      .smart-product_pic {
          width: 100%;
          text-align: center;
          img {
              width: 21%;
          }
      }
      .spc {
        p {
          font-size: .32rem;
        }
        .num {
          color: $blue;
          font-size: .5rem;
        }
        .red {
          color: #f52340;
        }
      }
      .bar {
        padding-right: .2rem;
        dl {
          padding: 10px 0;
          dt {
            line-height: .4rem;
          }
          dd {
            height: .4rem;
            background: #f1f1f1;
            span {
              position: relative;
              color: #fff;
              display: inline-block;
              height: .4rem;
              background: #84c4e2;
              transition: all 1s linear;
              label{
                position: absolute;
                right: 0.1rem;
                line-height: 0.6rem;
              }
            }
          }
        }
      }

    }
    .title {
      font-size: .4rem;
      padding-left: .5rem;
      height: .8rem;
      line-height: .8rem;
      font-weight: 600;
      color: $blue;
      .select-area {
        float: right;
      }
    }
    .onlineratio-title {
      position: relative;
      .online-ratio {
        position: absolute;
        right: 0;
        top: -.25rem;
        height: auto;
        padding-right: .5rem;
      }
    }
  }
  .breadcrumb {
    position: absolute;
    left: 1.8rem;
    top: 0.6rem;
  }
  .special-border, .middle-border {
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
  .middle-border {
      margin-top: .5rem;
  }
  
  
</style>
