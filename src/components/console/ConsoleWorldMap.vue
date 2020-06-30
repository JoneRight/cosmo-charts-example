<template>
  <div class="interlWap">
      <div class="center">
        <h4 class="IndustrialData">
          <router-link class="btn" :to="{path: 'industrialPlant'}">工业设备：<strong><v-count refVal="equipmentIndustrial" :endVal='equipmentIndustrial'></v-count></strong></router-link>
          <router-link class="btn" :to="{path: 'inter'}">商业设备：<strong><v-count refVal="equipmentBussiness" :endVal='equipmentBussiness'></v-count></strong></router-link>
          <router-link class="btn" :to="{path: 'console'}">消费设备：<strong><v-count refVal="equipmentConsume" :endVal='equipmentConsume'></v-count></strong></router-link>
        </h4>
        <div id="map" class="map" ref="map"></div>
          <!--<div id="pie" class="pie" ref="pie"></div>-->
      </div>
  </div>
</template>

<script>
 import countTo from 'vue-count-to';
 import { mapState } from 'vuex';
 import vCount from '@/components/vCount.vue'
  export default {
    data() {
      return {
      }
    },
    components:{
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
    mounted(){
      this.getMap()
    },
    methods: {
      getMap() {
            var latlong = {};
            latlong["SD"] = {"latitude":36.66,"longitude":117.02};
            latlong["JS"] = {"latitude":32.03,"longitude":118.45};
            latlong["SH"] = {"latitude":32.23,"longitude":121.48};
            latlong["ZJ"] = {"latitude":30.26,"longitude":120.15};
            latlong["AH"] = {"latitude":31.51,"longitude":117.16};
            latlong["FJ"] = {"latitude":26.09,"longitude":119.29};
            latlong["JX"] = {"latitude":27.75,"longitude":115.67};
            latlong["GD"] = {"latitude":23.40,"longitude":113.39};
            latlong["GX"] = {"latitude":23.55,"longitude":108.92};
            latlong["HAIN"] = {"latitude":39.29,"longitude":106.92};
            latlong["HEN"] = {"latitude":34.50,"longitude":101.55};
            latlong["HUN"] = {"latitude":27.69,"longitude":111.72};
            latlong["HUB"] = {"latitude":31.20,"longitude":112.41};
            latlong["BJ"] = {"latitude":39.90,"longitude":116.41};
            latlong["TJ"] = {"latitude":39.05,"longitude":117.11};
            latlong["HEB"] = {"latitude":39.17,"longitude":117.22};
            latlong["SHAX"] = {"latitude":37.86,"longitude":112.51};
            latlong["NMG"] = {"latitude":40.82,"longitude":111.77};
            latlong["NX"] = {"latitude":38.47,"longitude":106.26};
            latlong["QH"] = {"latitude":36.62,"longitude":101.78};
            latlong["SHAX"] = {"latitude":35.86,"longitude":109.50};
            latlong["GANS"] = {"latitude":36.06,"longitude":103.83};
            latlong["XINJ"] = {"latitude":43.79,"longitude":87.63};
            latlong["SHIC"] = {"latitude":30.57,"longitude":104.07};
            latlong["GUIZ"] = {"latitude":26.60,"longitude":106.71};
            latlong["YUNN"] = {"latitude":24.86,"longitude":101.59};
            latlong["CQ"] = {"latitude":29.34,"longitude":106.32};
            latlong["XIZ"] = {"latitude":29.65,"longitude":91.12};
            latlong["LN"] = {"latitude":41.59,"longitude":123.23};
            latlong["JL"] = {"latitude":43.84,"longitude":126.55};
            latlong["HLJ"] = {"latitude":45.74,"longitude":126.66};
            latlong["XG"] = {"latitude":22.28,"longitude":114.17};
            latlong["AM"] = {"latitude":22.19,"longitude":113.54};
            latlong["TW"] = {"latitude":25.03,"longitude":121.52};
            latlong["MXG"] = {"latitude":19.36,"longitude":-98.57};
            latlong["USA"] = {"latitude":38.91,"longitude":-77.02};
            latlong["GLBY"] = {"latitude":6.15,"longitude":-75.36};
            latlong["EGDE"] = {"latitude":-0.54,"longitude":-89.36};
            latlong["AGT"] = {"latitude":-34.55,"longitude":-57.57};
            latlong["WNRL"] = {"latitude":10.3,"longitude":-66.58};
            latlong["TG"] = {"latitude":13.5,"longitude":100.29};
            latlong["YN"] = {"latitude":23.01,"longitude":105.53};
            latlong["YDNXY"] = {"latitude":-4.5,"longitude":128.1};
            latlong["JP"] = {"latitude":35.41,"longitude":139.44};
            latlong["YD"] = {"latitude":22.19,"longitude":73.14};
            latlong["BJST"] = {"latitude":31.25,"longitude":73.04};
            latlong["XXL"] = {"latitude":-41.17,"longitude":174.47};
            latlong["YDL"] = {"latitude":45,"longitude":9.1};
            latlong["NRLY"] = {"latitude":9.12,"longitude":7.11};
            latlong["MJL"] = {"latitude":22.2,"longitude":91.48};
            latlong["ELS"] = {"latitude":55.45,"longitude":37.37};

            var mapData = [
              {"code":"SD" , "name":"山东", "value":1863248, "color":"#8aabb0","data":[74439,448479,546443,388425,405462]},
              {"code":"JS" , "name":"江苏", "value":1324864, "color":"#8aabb0","data":[78424,304309,323622,223143,395366]},
              {"code":"SH" , "name":"上海", "value":902492, "color":"#8aabb0","data":[59069,167758,171894,130161,373610]},
              {"code":"ZJ" , "name":"浙江", "value":1095282, "color":"#8aabb0","data":[50448,195212,245490,227243,376889]},
              {"code":"AH" , "name":"安徽", "value":930617, "color":"#8aabb0","data":[11722,119554,249983,144999,404359]},
              {"code":"FJ" , "name":"福建", "value":733416, "color":"#8aabb0","data":[18781,90667,162618,82057,379293]},
              {"code":"JX" , "name":"江西", "value":916881, "color":"#8aabb0","data":[48778,81062,225176,218952,342913]},
              {"code":"GD" , "name":"广东", "value":1040042, "color":"#8aabb0","data":[38922,40876,313139,238801,408304]},
              {"code":"GX" , "name":"广西", "value":884778, "color":"#8aabb0","data":[40281,92866,239817,81079,430735]},
              {"code":"HAIN" , "name":"海南", "value":721385, "color":"#8aabb0","data":[20649,115027,13633,152718,419358]},
              {"code":"HEN" , "name":"河南", "value":900849, "color":"#8aabb0","data":[53752,103320,231911,258971,252895]},
              {"code":"HUN" , "name":"湖南", "value":958162, "color":"#8aabb0","data":[73893,58499,244314,186994,394462]},
              {"code":"HUB" , "name":"湖北", "value":922111, "color":"#8aabb0","data":[33378,41885,235503,172402,438943]},
              {"code":"BJ" , "name":"北京", "value":698776, "color":"#8aabb0","data":[34807,93362,115657,165066,289884]},
              {"code":"TJ" , "name":"天津", "value":581442, "color":"#8aabb0","data":[15598,85565,90220,128270,261789]},
              {"code":"HEB" , "name":"河北", "value":344277, "color":"#8aabb0","data":[29626,32520,155332,12936,113863]},
              {"code":"SHAX" , "name":"山西", "value":261032, "color":"#8aabb0","data":[47718,41496,122752,33206,15860]},

              {"code":"NMG" , "name":"内蒙古", "value":116905, "color":"#8aabb0","data":[17218,22264,36624,27168,13631]},
              {"code":"NX" , "name":"宁夏", "value":208264, "color":"#8aabb0","data":[8384,26042,62899,18592,92347]},
              {"code":"QH" , "name":"青海", "value":173177, "color":"#8aabb0","data":[17944,12136,89438,23148,30511]},
              {"code":"SHAX" , "name":"陕西", "value":423418, "color":"#8aabb0","data":[35681,14893,340192,22784,9868]},
              {"code":"GANS" , "name":"甘肃", "value":456377, "color":"#8aabb0","data":[22029,20839,327858,32785,52866]},
              {"code":"XINJ" , "name":"新疆", "value":258638, "color":"#8aabb0","data":[14423,9848,119092,15728,99547]},
              {"code":"SHIC" , "name":"四川", "value":621487, "color":"#8aabb0","data":[54689,19515,386517,83133,77633]},
              {"code":"GUIZ" , "name":"贵州", "value":261307, "color":"#8aabb0","data":[55871,14031,134920,8283,48202]},
              {"code":"YUNN" , "name":"云南", "value":509727, "color":"#8aabb0","data":[32923,12305,441783,11666,11050]},
              {"code":"CQ" , "name":"重庆", "value":407002, "color":"#8aabb0","data":[20968,26161,242549,28171,89153]},
              {"code":"XIZ" , "name":"西藏", "value":123893, "color":"#8aabb0","data":[22705,4170,45536,9674,41808]},
              {"code":"LN" , "name":"辽宁", "value":290609, "color":"#8aabb0","data":[32784,10007,211554,15371,20893]},
              {"code":"JL" , "name":"吉林", "value":306289, "color":"#8aabb0","data":[43680,49529,118493,12849,81738]},
              {"code":"HLJ" , "name":"黑龙江", "value":538508, "color":"#8aabb0","data":[46488,35248,385266,45331,26175]},
              {"code":"XG" , "name":"香港", "value":3724, "color":"#8aabb0","data":[975,220,896,857,776]},
              {"code":"AM" , "name":"澳门", "value":2807, "color":"#8aabb0","data":[789,714,437,311,556]},
              {"code":"TW" , "name":"台湾", "value":0, "color":"#8aabb0","data":[0,0,0,0,0]},

              {"code":"MXG" , "name":"墨西哥", "value":49227, "color":"#8aabb0","data":[ ,4491,15963,10267,18506]},
              {"code":"USA" , "name":"美国", "value":48706, "color":"#8aabb0","data":[ ,5241,12930,9706,20829]},
              {"code":"GLBY" , "name":"哥伦比亚", "value":25190, "color":"#8aabb0","data":[ ,893,15746,6966,1585]},
              {"code":"EGDE" , "name":"厄瓜多尔", "value":23021, "color":"#8aabb0","data":[ ,746,10191,8121,3963]},
              {"code":"AGT" , "name":"阿根廷", "value":47237, "color":"#8aabb0","data":[ ,2982,13593,10878,19784]},
              {"code":"WNRL" , "name":"委内瑞拉", "value":32323, "color":"#8aabb0","data":[ ,2110,8950,790,20473]},
              {"code":"TG" , "name":"泰国", "value":39057, "color":"#8aabb0","data":[ ,6187,12112,528,20230]},
              {"code":"YN" , "name":"越南", "value":40858, "color":"#8aabb0","data":[ ,1871,8161,1157,29669]},
              {"code":"YDNXY" , "name":"印尼", "value":55763, "color":"#8aabb0","data":[ ,2572,12354,4768,36069]},
              {"code":"JP" , "name":"日本", "value":48545, "color":"#8aabb0","data":[ ,7894,9439,109,31103]},
              {"code":"YD" , "name":"印度", "value":22946, "color":"#8aabb0","data":[ ,4160,6650,6130,6006]},
              {"code":"BJST" , "name":"巴基斯坦", "value":32128, "color":"#8aabb0","data":[ ,5431,16474,2088,8135]},
              {"code":"XXL" , "name":"新西兰", "value":34149, "color":"#8aabb0","data":[ ,3406,13872,7672,9199]},
              {"code":"YDL" , "name":"意大利", "value":37418, "color":"#8aabb0","data":[ ,180,16253,10392,10593]},
              {"code":"NRLY" , "name":"尼日利亚", "value":23237, "color":"#8aabb0","data":[ ,239,12311,4826,5861]},
              {"code":"MJL" , "name":"孟加拉", "value":30686, "color":"#8aabb0","data":[ ,4351,16138,729,9468]},
              {"code":"ELS" , "name":"俄罗斯", "value":37998, "color":"#8aabb0","data":[ ,6625,14784,7031,9558]},
            ]

            var minBulletSize = 15;
            var maxBulletSize = 40;
            var min = Infinity;
            var max = -Infinity;
            var userColor = '#fbe639'
            var companyColor = '#45c0f1'
            var rdColor = '#9fe6b8'

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
                        var arr = ['衣联设备','空气净化','智能家居','可穿戴设备','其他'];
                        var str = `<span style="display: block;text-align: left;">${dataItem.name}</span>`;
                        dataItem.data.forEach((item, index) => {
                            str += `<span style="display: block;text-align: left;">${arr[index]}：${item}</span>`
                        })
                        return str;
                      })(dataItem),
                value: value,
                rollOverScale: 2,
                zoomLevel: 5,
              });
            }

            const myMap = AmCharts.makeChart("map", {
              type: "map",
              theme: 'miller',
              color: "black",
              language: "zh",
              imagesSettings: {
                balloonText: "<span style='font-size:.28rem;text-align:left;display:block;'><b>[[title]]</b>总数: [[value]]</span>",
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
    },
  }
</script>

<style scoped lang="scss">
  .center {
      flex: 1;
      // width: 21.2rem;
      overflow: hidden;
      .map {
        // margin-left: .25rem;
        margin: 0 auto;
        box-sizing: border-box;
        border: .2rem solid #fafafa;
        -webkit-border-radius: .24rem;
        -moz-border-radius: .24rem;
        border-radius: .24rem;
        width: 21rem;
        height: 15.6rem;
      }
    }
.IndustrialData {
    margin-bottom: .5rem;
    .btn {
      width: 5rem;
      height: .8rem;
      line-height: .8rem;
      color: #FFFFFF;
      background: #0091e1;
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


</style>
