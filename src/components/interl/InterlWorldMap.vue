<template>
  <div class="interlWap">
      <div class="center">
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
  </div>
</template>

<script>
 import countTo from 'vue-count-to';
 import { mapState } from 'vuex'
 import vCount from '@/components/vCount.vue'
  export default {
    data() {
      return {
      }
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
    components:{
      countTo,
      vCount
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
              {"code":"SD" , "name":"山东", "value":164, "color":"#fbe639","data":[53,64,47]},
              {"code":"JS" , "name":"江苏", "value":133, "color":"#fbe639","data":[54,47,32]},
              {"code":"SH" , "name":"上海", "value":81, "color":"#fbe639","data":[43,23,15]},
              {"code":"ZJ" , "name":"浙江", "value":125, "color":"#fbe639","data":[52,32,41]},
              {"code":"AH" , "name":"安徽", "value":51, "color":"#fbe639","data":[21,15,15]},
              {"code":"FJ" , "name":"福建", "value":49, "color":"#fbe639","data":[19,18,12]},
              {"code":"JX" , "name":"江西", "value":64, "color":"#fbe639","data":[27,26,11]},
              {"code":"GD" , "name":"广东", "value":85, "color":"#fbe639","data":[32,22,31]},
              {"code":"GX" , "name":"广西", "value":42, "color":"#fbe639","data":[18,13,11]},
              {"code":"HAIN" , "name":"海南", "value":31, "color":"#fbe639","data":[12,9,10]},
              {"code":"HEN" , "name":"河南", "value":78, "color":"#fbe639","data":[32,23,23]},
              {"code":"HUN" , "name":"湖南", "value":61, "color":"#fbe639","data":[25,19,17]},
              {"code":"HUB" , "name":"湖北", "value":71, "color":"#fbe639","data":[36,18,17]},
              {"code":"BJ" , "name":"北京", "value":100, "color":"#fbe639","data":[49,29,22]},
              {"code":"TJ" , "name":"天津", "value":56, "color":"#fbe639","data":[23,16,17]},
              {"code":"HEB" , "name":"河北", "value":49, "color":"#fbe639","data":[19,21,9]},
              {"code":"SHAX" , "name":"山西", "value":53, "color":"#fbe639","data":[22,23,8]},
              {"code":"NMG" , "name":"内蒙古", "value":53, "color":"#fbe639","data":[33,13,7]},
              {"code":"NX" , "name":"宁夏", "value":49, "color":"#fbe639","data":[18,17,14]},
              {"code":"QH" , "name":"青海", "value":43, "color":"#fbe639","data":[22,12,9]},
              {"code":"SHAX" , "name":"陕西", "value":90, "color":"#fbe639","data":[43,25,22]},
              {"code":"GANS" , "name":"甘肃", "value":32, "color":"#fbe639","data":[13,11,8]},
              {"code":"XINJ" , "name":"新疆", "value":37, "color":"#fbe639","data":[11,9,17]},
              {"code":"SHIC" , "name":"四川", "value":63, "color":"#fbe639","data":[32,17,14]},
              {"code":"GUIZ" , "name":"贵州", "value":54, "color":"#fbe639","data":[16,16,22]},
              {"code":"YUNN" , "name":"云南", "value":36, "color":"#fbe639","data":[7,16,13]},
              {"code":"CQ" , "name":"重庆", "value":44, "color":"#fbe639","data":[11,11,22]},
              {"code":"XIZ" , "name":"西藏", "value":11, "color":"#fbe639","data":[6,4,1]},
              {"code":"LN" , "name":"辽宁", "value":42, "color":"#fbe639","data":[11,17,14]},
              {"code":"JL" , "name":"吉林", "value":24, "color":"#fbe639","data":[9,9,6]},
              {"code":"HLJ" , "name":"黑龙江", "value":21, "color":"#fbe639","data":[8,8,5]},
              {"code":"XG" , "name":"香港", "value":9, "color":"#fbe639","data":[2,2,5]},
              {"code":"AM" , "name":"澳门", "value":0, "color":"#fbe639","data":[0,0,0]},
              {"code":"TW" , "name":"台湾", "value":0, "color":"#fbe639","data":[0,0,0]},
              {"code":"MXG" , "name":"墨西哥", "value":40, "color":"#fbe639","data":[12,14,14]},
              {"code":"USA" , "name":"美国", "value":50, "color":"#fbe639","data":[32,9,9]},
              {"code":"GLBY" , "name":"哥伦比亚", "value":5, "color":"#fbe639","data":[3,1,1]},
              {"code":"EGDE" , "name":"厄瓜多尔", "value":2, "color":"#fbe639","data":[2,0,0]},
              {"code":"AGT" , "name":"阿根廷", "value":2, "color":"#fbe639","data":[2,0,0]},
              {"code":"WNRL" , "name":"委内瑞拉", "value":2, "color":"#fbe639","data":[2,0,0]},
              {"code":"TG" , "name":"泰国", "value":12, "color":"#fbe639","data":[4,4,4]},
              {"code":"YN" , "name":"越南", "value":3, "color":"#fbe639","data":[1,1,1]},
              {"code":"YDNXY" , "name":"印尼", "value":4, "color":"#fbe639","data":[2,1,1]},
              {"code":"JP" , "name":"日本", "value":11, "color":"#fbe639","data":[5,3,3]},
              {"code":"YD" , "name":"印度", "value":8, "color":"#fbe639","data":[4,2,2]},
              {"code":"BJST" , "name":"巴基斯坦", "value":7, "color":"#fbe639","data":[3,2,2]},
              {"code":"XXL" , "name":"新西兰", "value":11, "color":"#fbe639","data":[5,3,3]},
              {"code":"YDL" , "name":"意大利", "value":3, "color":"#fbe639","data":[3,0,0]},
              {"code":"NRLY" , "name":"尼日利亚", "value":3, "color":"#fbe639","data":[3,0,0]},
              {"code":"MJL" , "name":"孟加拉", "value":3, "color":"#fbe639","data":[3,0,0]},
              {"code":"ELS" , "name":"俄罗斯", "value":24, "color":"#fbe639","data":[8,8,8]},
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
                        var arr = ['商用空调','商用冷柜','其他'];
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
