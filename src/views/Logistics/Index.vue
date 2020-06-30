<template>
  <div class="Logistics">
    <div class="left">
      <div class="special-border"></div>
      <div class="title">
        总车辆数：<count-to class="num red" :startVal='0' :endVal='115112' :duration='3000'></count-to>
      </div>
      <div id="pie2D" class="chart"></div>

      <div class="title">
        在线服务兵：<count-to class="num red" :startVal='0' :endVal='73998' :duration='3000'></count-to>
      </div>
      <div id="pie3D" class="chart pie3d"></div>
      <div class="title">
        五星车小微
      </div>
      <div id="radar" class="chart"></div>
    </div>
    <div class="center">
      <div class="centerTop">
        <h3>COSMOPlat 物流运营数据显示</h3>
        <ul class="topData">
          <li>
            <span class="title">服务区县</span>
            <count-to class="num" :startVal='0' :endVal='2915' :duration='3000'></count-to>
          </li>
          <li>
            <span class="title">服务网点</span>
            <count-to class="num" :startVal='0' :endVal='6260' :duration='3000'></count-to>
          </li>
          <li>
            <span class="title">车辆总数</span>
            <count-to class="num" :startVal='0' :endVal='110000' :duration='3000'></count-to>
          </li>
          <li>
            <span class="title">服务兵总数</span>
            <count-to class="num" :startVal='0' :endVal='180000' :duration='3000'></count-to>
          </li>
        </ul>
      </div>
      <div id="centerMap" class="map" ref="map"></div>
    </div>
    <div class="right">
      <div class="special-border"></div>
      <div class="title spc">
        <p>仓储总面积</p>
        <count-to class="num" :startVal='0' :endVal='2394543' :duration='3000'></count-to><span>m<sup>2</sup></span>
      </div>
      <div id="pie3D2" class="chart"></div>
      <div class="title">各类型仓库数量</div>
      <div class="bar">
        <dl>
          <dt>TC仓({{tcVal}}个)</dt>
          <dd>
            <span :style="'width: ' + tcVal + '%;'"></span>
          </dd>
        </dl>
        <dl>
          <dt>前置仓({{qjVal}}个)</dt>
          <dd>
            <span :style="'width: ' + qjVal + '%;'"></span>
          </dd>
        </dl>
        <dl>
          <dt>CDC仓({{cdcVal}}个)</dt>
          <dd>
            <span :style="'width: ' + cdcVal + '%;'"></span>
          </dd>
        </dl>
      </div>
      <div class="title spc">
        2018年总吞吐量：<count-to class="num red" :startVal='0' :endVal='1303419' :duration='3000'></count-to>单
      </div>
      <div id="bar" class="chart"></div>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>物流</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
    // import chart from 'echarts/lib/echarts';
    // import china from '../../../static/china.js';
    import chinaLow from '../../../static/ammap/maps/js/chinaLow.js';
    import zh from '../../../static/ammap/lang/zh.js';
    import countTo from 'vue-count-to';
    import childLayout from '@/views/Layout/childLayout.vue';
    export default {
        name: "Logistics",
        layout: "../Layout/childLayout",
        components: {
          countTo
        },
        data() {
          return {
            tcVal: 100,
            qjVal: 10,
            cdcVal: 5
          }
        },
        methods: {
          getMap() {
            var latlong = {};
            latlong["Shandong"] = {"latitude":36.66,"longitude":117.02};
            latlong["Jiangsu"] = {"latitude":32.03,"longitude":118.45};
            latlong["Liaoning"] = {"latitude":41.59,"longitude":123.23};
            latlong["Hubei"] = {"latitude":30.32,"longitude":114.20};
            latlong["Hunan"] = {"latitude":28.06,"longitude":112.58};
            latlong["Anhui"] = {"latitude":31.51,"longitude":117.16};
            latlong["Guangdong"] = {"latitude":23.08,"longitude":113.15};
            latlong["Guizhou"] = {"latitude":26.36,"longitude":106.42};
            latlong["Chongqing"] = {"latitude":29.34,"longitude":106.32};
            latlong["Tianjin"] = {"latitude":39.05,"longitude":117.11};
            latlong["Shanghai"] = {"latitude":31.231706,"longitude":121.472644};
            latlong["Yunnan"] = {"latitude":24.040609,"longitude":102.71225};
            latlong["Neimenggu"] = {"latitude":40.818311,"longitude":111.670801};
            latlong["Shanghai"] = {"latitude":31.231706,"longitude":121.472644};
            latlong["Beijing"] = {"latitude":39.904989,"longitude":116.405285};

            latlong["Taiwan"] = {"latitude":25.044332,"longitude":121.509062};
            latlong["Jilin"] = {"latitude":43.886841,"longitude":125.3245};
            latlong["Sichuan"] = {"latitude":30.659462,"longitude":103.065735};
            latlong["Tianjin"] = {"latitude":39.125596,"longitude":119.190182};
            latlong["Ningxia"] = {"latitude":38.46637,"longitude":106.278179};
            latlong["Shanxi"] = {"latitude":37.057014,"longitude":112.049248};
            latlong["Guangxi"] = {"latitude":22.82402,"longitude":108.320004};
            latlong["Xinjiang"] = {"latitude":43.792818,"longitude":87.617733};
            latlong["Jiangxi"] = {"latitude":28.676493,"longitude":115.892151};
            latlong["Hebei"] = {"latitude":37.745474,"longitude":114.802461};
            latlong["Henan"] = {"latitude":33.757975,"longitude":113.665412};
            latlong["Zhejiang"] = {"latitude":29.287459,"longitude":120.153576};
            latlong["Hainan"] = {"latitude":20.031971,"longitude":110.33119};
            latlong["Macau"] = {"latitude":22.198951,"longitude":113.54909};
            latlong["Gansu"] = {"latitude":36.058039,"longitude":103.823557};
            latlong["Fujian"] = {"latitude":26.075302,"longitude":119.306239};
            latlong["Xizang"] = {"latitude":29.660361,"longitude":91.132212};
            latlong["Shaanxi"] = {"latitude":34.263161,"longitude":108.948024};
            latlong["Quinghai"] = {"latitude":36.623178,"longitude":100.578916};
            latlong["HongKong"] = {"latitude":22.320048,"longitude":114.173355};
            latlong["Heilongjiang"] = {"latitude":46.756967,"longitude":126.642464};

            var mapData = [
              {"id":"CN-37","code":"Shandong" , "name":"山东", "value":14234, "color":"#eea638","data":[1722,841,11671,14234]},
              {"id":"CN-32","code":"Jiangsu" , "name":"江苏", "value":6656, "color":"#eea638","data":[0,997,5659,6656]},
              {"id":"CN-21","code":"Liaoning" , "name":"辽宁", "value":4061, "color":"#eea638","data":[538,235,3288,4061]},
              {"id":"CN-42","code":"Hubei" , "name":"湖北", "value":6319, "color":"#eea638","data":[1716,532,4071,6319]},
              {"id":"CN-43","code":"Hunan" , "name":"湖南", "value":5760, "color":"#eea638","data":[0,238,5502,5760]},
              {"id":"CN-34","code":"Anhui" , "name":"安徽", "value":5635, "color":"#eea638","data":[1784,309,3542,5635]},
              {"id":"CN-44","code":"Guangdong" , "name":"广东", "value":11430, "color":"#eea638","data":[4701,1537,5192,11430]},
              {"id":"CN-52","code":"Guizhou" , "name":"贵州", "value":2138, "color":"#eea638","data":[0,126,2012,2138]},
              {"id":"CN-50","code":"Chongqing" , "name":"重庆", "value":5652, "color":"#eea638","data":[3779,124,1749,5652]},
              {"id":"CN-12","code":"Tianjin" , "name":"天津", "value":1555, "color":"#e1a638","data":[0,152,1403,1555]},
              {"id":"CN-11","code":"Beijing" , "name":"北京","value":2189, "color":"#eea638","data":[0,359,1380,2189]},

              {"id":"CN-71","code":"Taiwan" , "name":"台湾","value":0, "color":"#eea638","data":[0,0,0,0]},
              {"id":"CN-22","code":"Jilin" , "name":"吉林","value":1722, "color":"#eea638","data":[0,93,1629,1722]},
              {"id":"CN-51","code":"Sichuan" , "name":"四川","value":4240, "color":"#eea638","data":[0,354,3886,4240]},
              {"id":"CN-12","code":"Tianjin" , "name":"天津","value":1554, "color":"#eea638","data":[0,152,1402,1554]},
              {"id":"CN-64","code":"Ningxia" , "name":"宁夏","value":617, "color":"#eea638","data":[0,30,587,617]},
              {"id":"CN-14","code":"Shanxi" , "name":"山西","value":2247, "color":"#eea638","data":[0,152,2095,2247]},
              {"id":"CN-45","code":"Guangxi" , "name":"广西","value":3741, "color":"#eea638","data":[0,108,3633,3741]},
              {"id":"CN-65","code":"Xinjiang" , "name":"新疆","value":1425, "color":"#eea638","data":[0,110,1315,1425]},
              {"id":"CN-36","code":"Jiangxi" , "name":"江西","value":5202, "color":"#eea638","data":[0,159,5043,5202]},
              {"id":"CN-13","code":"Hebei" , "name":"河北","value":4467, "color":"#eea638","data":[0,336,4131,4467]},
              {"id":"CN-41","code":"Henan" , "name":"河南","value":7159, "color":"#eea638","data":[1559,411,5189,7159]},
              {"id":"CN-33","code":"Zhejiang" , "name":"浙江","value":7159, "color":"#eea638","data":[1559,411,5189,7159]},
              {"id":"CN-46","code":"Hainan" , "name":"海南","value":1429, "color":"#eea638","data":[0,68,1361,1429]},
              {"id":"CN-92","code":"Macau" , "name":"澳门","value":0, "color":"#eea638","data":[0,0,0,0]},
              {"id":"CN-62","code":"Gansu" , "name":"甘肃","value":1470, "color":"#eea638","data":[0,20,1450,1470]},
              {"id":"CN-35","code":"Fujian" , "name":"福建","value":3457, "color":"#eea638","data":[0,370,3087,3457]},
              {"id":"CN-54","code":"Xizang" , "name":"西藏","value":176, "color":"#eea638","data":[0,0,176,176]},
              {"id":"CN-61","code":"Shaanxi" , "name":"陕西","value":2271, "color":"#eea638","data":[0,205,2066,2271]},
              {"id":"CN-63","code":"Quinghai" , "name":"青海","value":404, "color":"#eea638","data":[0,29,475,404]},
              {"id":"CN-91","code":"HongKong" , "name":"香港","value":0, "color":"#eea638","data":[0,0,0,0]},
              {"id":"CN-23","code":"Heilongjiang" , "name":"黑龙江","value":1880, "color":"#eea638","data":[0,119,1761,1880]}

            ]
            var minBulletSize = 10;
            var maxBulletSize = 70;
            var min = Infinity;
            var max = -Infinity;
            for ( var i = 0; i < mapData.length; i++ ) {
              var value = mapData[ i ].value;
              if ( value < min ) {
                min = value;
              }
              if ( value > max ) {
                max = value;
              }
            }

            var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
            var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
            var images = [];
            for ( var i = 0; i < mapData.length; i++ ) {
              var dataItem = mapData[ i ];
              var value = dataItem.value;
              // calculate size of a bubble
              var square = ( value - min ) / ( max - min ) * ( maxSquare - minSquare ) + minSquare;
              if ( square < minSquare ) {
                square = minSquare;
              }
              var size = Math.sqrt( square / ( Math.PI * 2 )) / 1.5;
              var id = dataItem.code;
              images.push({
                "type": "circle",
                // "theme": "dark",
                "width": size,
                "height": size,
                "color": dataItem.color,
                "longitude": latlong[ id ].longitude,
                "latitude": latlong[ id ].latitude,
                "title": (dataItem => {
                  var arr = ['干线车辆总数','区配车辆总数','车小微车辆总数','车辆总数'];
                  var str = `<span style="display: block;text-align: left;">${dataItem.name}</span>`;;
                  if (dataItem.data) {
                    dataItem.data.forEach((item, index) => {
                      str += `<span style="display: block;text-align: left;">${arr[index]}：${item}</span>`
                    })
                    // str = `<div style="float: left">${str}</div><div id="pies" style="float: left;width: 100px;height: 100px;"></div>`
                  }
                  return str;
                })(dataItem),
                "value": value
              });
            }
            // AmCharts.theme =  AmCharts.themes.black;
            var map = AmCharts.makeChart("centerMap", {
              "type": "map",
              // "theme" :AmCharts.themes.black,
              // color: "black",
              "addClassNames": true,
              "colorSteps": 10,
              imagesSettings: {
                alpha: 0.6
              },
              "dataProvider": {
                images: images,
                map: "chinaLow",
                getAreasFromMap: true
              },
              "areasSettings": {
                autoZoom: true,
                selectedColor: "#ccc",
                color: 'rgb(221, 221, 221)',
                selectedOutlineColor: '#fff',  // 变色
                rollOverOutlineColor: '#fff',
                rollOverColor: '#ccc',
              },
              /*"balloonLabelFunction": (data, ammap) => {
                var str = '';
                mapData.forEach((item, index) => {
                  if(item.id === data.id && item.data) {
                    var arr = ['装配','机加','检测','吸塑','仪表','机器人','其他'];
                    item.data.forEach((item, index) => {
                      str += `<span style="display: block;text-align: left;">${arr[index]}：${item}</span>`
                    })
                  }
                })
                // console.log(str)
                return str;
              }*/
            });
          },
          getPie2D() {
            var data = [{
              "name": "干线车辆",
              "value": 15782
            },{
              "name": "区配车辆",
              "value":9390
            },{
              "name": "最后一公里车辆",
              "value": 89940
            }];
            var chart = AmCharts.makeChart("pie2D", {
              "type": "pie",
              "theme": "light",
              "dataProvider": data,
              "titleField": "name",
              "valueField": "value",
              "startDuration": 0,
              "labelRadius": 5,
              "radius": "50%",
              "innerRadius": "60%",
              "export": {
                "enabled": false
              },
              "labelsEnabled": false,
              "legend": {
                position: "right",
                align:"center",
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
          getPie3D() {
            var chart = AmCharts.makeChart("pie3D", {
              "type"    : "pie",
              "colors":["#67b7dc", "#84b761", "#fdd400", "#cc4748", "#e690d1", "#e7bcf3", "#9d96f5", "#8378ea", "#96bfff", "#32c5e9"],
              "labelsEnabled": false,
              "titleField"  : "name",
              "valueField"  : "value",
              "radius": "50%",
              "dataProvider"  : [
                {value:65333, name:'飞毛腿'},
                {value:8225, name:'安装达人'},
                {value:430, name:'闪电侠'}
              ],
              "startDuration": 0,
              "depth3D": 15,
              "angle": 30,
              "legend": {
                position: "bottom",
                align:"center",
                maxColumns: 2,
                enabled: false,
                color: '#0091e1'
              }
            });
          },
          getRadar() {
            var chart = AmCharts.makeChart("radar", {
              "type": "radar",
              "theme": "light",
              "titleField": "level",
              "dataProvider": [{
                "level": "1星：19885",
                "value": 19885
              }, {
                "level": "2星：0",
                "value": 0
              }, {
                "level": "3星：1849",
                "value": 1849
              }, {
                "level": "4星：162",
                "value": 162
              }, {
                "level": "5星：7919",
                "value": 7919
              }],
              "valueAxes": [{
                "axisTitleOffset": 5,
                "minimum": 0,
                "axisAlpha": 0.15,
                "fontSize": 10
              }],
              "startDuration": 0,
              "graphs": [{
                "bullet": "round",
                "lineThickness": 2,
                "valueField": "value"
              }],
              "categoryField": "level",
              "export": {
                "enabled": false
              }
            } );
          },
          getPie3D2() {
            var chart = AmCharts.makeChart("pie3D2", {
              "type"    : "pie",
              "labelsEnabled": false,
              "colors":["#9fe6b8", "#ffdb5c", "#ff9f7f", "#fb7293", "#e062ae", "#e690d1", "#e7bcf3", "#9d96f5", "#8378ea", "#96bfff", "#32c5e9"],
              "titleField"  : "name",
              "valueField"  : "value",
              "radius": "50%",
              "dataProvider"  : [
                {value:82, name:'CDC仓'},
                {value:164, name:'前置仓'},
                {value:754, name:'TC仓'}
              ],
              "startDuration": 0,
              "depth3D": 15,
              "angle": 30,
              "legend": {
                position: "bottom",
                align:"center",
                maxColumns: 2,
                enabled: false,
                color: '#0091e1'
              }
            });
          },
          getBar() {
            var chart = AmCharts.makeChart("bar", {
              "theme": "light",
              "type": "serial",
              "dataProvider": [{
                "country": "山东",
                "year2004": 3.5,
                "year2005": 4.2
              }, {
                "country": "华北",
                "year2004": 1.7,
                "year2005": 3.1
              }, {
                "country": "华南",
                "year2004": 2.8,
                "year2005": 2.9
              }, {
                "country": "西南",
                "year2004": 2.6,
                "year2005": 2.3
              }, {
                "country": "华中",
                "year2004": 1.4,
                "year2005": 2.1
              }, {
                "country": "华东",
                "year2004": 2.6,
                "year2005": 4.9
              }, {
                "country": "东北",
                "year2004": 1.6,
                "year2005": 3.9
              }, {
                "country": "西北",
                "year2004": 3.6,
                "year2005": 5.9
              }],
              "startDuration": 0,
              "graphs": [{
                "balloonText": "发运: <b>[[value]]",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "发运",
                "type": "column",
                "valueField": "year2004"
              }, {
                "balloonText": "干线: <b>[[value]]",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "干线",
                "type": "column",
                "clustered":false,
                "columnWidth":0.5,
                "valueField": "year2005"
              }],
              "plotAreaFillAlphas": 0.1,
              "categoryField": "country",
              "categoryAxis": {
                autoGridCount: false,
                "gridPosition": "start",
                "labelRotation": 50,
                fontSize: 10
              },
              "export": {
                "enabled": false
              }
            });
          }
        },
        mounted() {
          this.getMap();
          this.getPie2D();
          this.getPie3D();
          this.getRadar();
          this.getPie3D2();
          this.getBar();
        }
    }
</script>

<style scoped lang="scss">
  $blue: #0091e1;
  .Logistics {
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
        li {
          width: 4rem;
          float: left;
          span {
            padding: 0;
            font-size: 0.32rem;
            display: block;
            text-align: center;
          }
          .num {
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
    .right {
      float: right;
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
