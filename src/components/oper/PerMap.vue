<template>
  <div class="interlWap">
      <div class="center">
        <div id="map" class="map" ref="map"></div>
      </div>
      <PerBand id="centerPer"/>
  </div>
</template>

<script>
 import countTo from 'vue-count-to';
 import PerBand from './PerBandWidth.vue'
  export default {
    data() {
      return {
      }
    },
    components:{
      countTo,
      PerBand
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
            // latlong["GUIZ"] = {"latitude":26.60,"longitude":106.71};
            // latlong["YUNN"] = {"latitude":24.86,"longitude":101.59};
            // latlong["CQ"] = {"latitude":29.34,"longitude":106.32};
            // latlong["XIZ"] = {"latitude":29.65,"longitude":91.12};
            // latlong["LN"] = {"latitude":41.59,"longitude":123.23};
            // latlong["JL"] = {"latitude":43.84,"longitude":126.55};
            // latlong["HLJ"] = {"latitude":45.74,"longitude":126.66};
            // latlong["XG"] = {"latitude":22.28,"longitude":114.17};
            // latlong["AM"] = {"latitude":22.19,"longitude":113.54};
            // latlong["TW"] = {"latitude":25.03,"longitude":121.52};
            // latlong["MXG"] = {"latitude":19.36,"longitude":-98.57};
            // latlong["USA"] = {"latitude":38.91,"longitude":-77.02};
            // latlong["GLBY"] = {"latitude":6.15,"longitude":-75.36};
            // latlong["EGDE"] = {"latitude":-0.54,"longitude":-89.36};
            // latlong["AGT"] = {"latitude":-34.55,"longitude":-57.57};
            // latlong["WNRL"] = {"latitude":10.3,"longitude":-66.58};
            // latlong["TG"] = {"latitude":13.5,"longitude":100.29};
            // latlong["YN"] = {"latitude":23.01,"longitude":105.53};     
            // latlong["YDNXY"] = {"latitude":-4.5,"longitude":128.1};
            // latlong["JP"] = {"latitude":35.41,"longitude":139.44};
            // latlong["YD"] = {"latitude":22.19,"longitude":73.14};
            // latlong["BJST"] = {"latitude":31.25,"longitude":73.04};
            // latlong["XXL"] = {"latitude":-41.17,"longitude":174.47};
            // latlong["YDL"] = {"latitude":45,"longitude":9.1};
            // latlong["NRLY"] = {"latitude":9.12,"longitude":7.11};
            // latlong["MJL"] = {"latitude":22.2,"longitude":91.48};
            // latlong["ELS"] = {"latitude":55.45,"longitude":37.37};



            latlong["GEA"] = {"latitude":39.90,"longitude":-84.90};//US GEA
            latlong["JER"] = {"latitude":40.44,"longitude":-76.46};//Haier US NewJersey1
            latlong["CAM"] = {"latitude":35.17,"longitude":-79.62};//Haier US Camden
            latlong["YDL"] = {"latitude":43.96,"longitude":11.60};//意大利空调贸易公司
            latlong["DATA"] = {"latitude":49.03,"longitude":3.69};//Datacenter
            latlong["SUR"] = {"latitude":47.39,"longitude":4.69};//NEUILLY SUR SEINE
            latlong["RUSS"] = {"latitude":52.16,"longitude":33.39};//Haier Russian Moscow
            latlong["KASH"] = {"latitude":51.72,"longitude":42.71};//Russina Factory(喀山工厂)
            latlong["PAK"] = {"latitude":35.60,"longitude":74.53};//Haier Pakistan Lahore-1
            latlong["BJST"] = {"latitude":34.37,"longitude":75.32};//巴基舒坦
            latlong["DELHI"] = {"latitude":33.87,"longitude":76.72};//Haier India New Delhi(NEW)
            latlong["PUNE"] = {"latitude":21.12,"longitude":74.44};//Haier India New Pune
            latlong["JAPAN"] = {"latitude":36.24,"longitude":133.28};//Haier Japan Office_New
            latlong["KOREA"] = {"latitude":39.38,"longitude":126.60};//Haier Korea Seoul
            latlong["HQ"] = {"latitude":37.19,"longitude":120.69};//Haier Qingdao HQ Backup
            latlong["KONG"] = {"latitude":22.30,"longitude":114.30};//Hong Kong International
            latlong["PRACH"] = {"latitude":15.36,"longitude":100.54};//Haier Thailand Prachiuburi
            latlong["BANG"] = {"latitude":15.53,"longitude":103.47};//Haier Thailand Bangkok
            latlong["VIE"] = {"latitude":11.60,"longitude":107.92};//Vietnam
            latlong["OFF"] = {"latitude":2.72,"longitude":103.09};//Office
            latlong["INOF"] = {"latitude":-7.01,"longitude":107.57};//Indonesia Office
            latlong["MALY"] = {"latitude":7.36,"longitude":100.19};//Haier MalaysiaSelangor(NEW)
            latlong["ZEAL"] = {"latitude":-35.74,"longitude":174.19};//Haier New Zealand

            var mapData = [
              {"code":"GEA" , "name":"US GEA", "value":164, "color":"#84c4e2","data":[]},
              {"code":"JER" , "name":"Haier US NewJersey1", "value":133, "color":"#84c4e2","data":[]},
              {"code":"CAM" , "name":"Haier US Camden", "value":81, "color":"#84c4e2","data":[]},
              {"code":"YDL" , "name":"意大利空调贸易公司", "value":81, "color":"#84c4e2","data":[]},
              {"code":"DATA" , "name":"Datacenter", "value":81, "color":"#84c4e2","data":[]},
              {"code":"SUR" , "name":"NEUILLY SUR SEINE", "value":81, "color":"#84c4e2","data":[]},
              {"code":"RUSS" , "name":"Haier Russian Moscow", "value":81, "color":"#84c4e2","data":[]},
              {"code":"KASH" , "name":"Russina Factory(喀山工厂)", "value":81, "color":"#84c4e2","data":[]},
              {"code":"PAK" , "name":"Haier Pakistan Lahore-1", "value":81, "color":"#84c4e2","data":[]},
              {"code":"BJST" , "name":"巴基斯坦", "value":81, "color":"#84c4e2","data":[]},
              {"code":"DELHI" , "name":"Haier India New Delhi(NEW)", "value":81, "color":"#84c4e2","data":[]},
              {"code":"PUNE" , "name":"Haier India New Pune", "value":81, "color":"#84c4e2","data":[]},
              {"code":"JAPAN" , "name":"Haier Japan Office_New", "value":81, "color":"#84c4e2","data":[]},
              {"code":"KOREA" , "name":"Haier Korea Seoul", "value":81, "color":"#84c4e2","data":[]},
              {"code":"HQ" , "name":"Haier Qingdao HQ Backup", "value":81, "color":"#84c4e2","data":[]},
              {"code":"KONG" , "name":"Hong Kong International", "value":81, "color":"#84c4e2","data":[]},
              {"code":"PRACH" , "name":"Haier Thailand Prachiuburi", "value":81, "color":"#84c4e2","data":[]},
              {"code":"BANG" , "name":"Haier Thailand Bangkok", "value":81, "color":"#84c4e2","data":[]},
              {"code":"VIE" , "name":"Vietnam", "value":81, "color":"#84c4e2","data":[]},
              {"code":"OFF" , "name":"Office", "value":81, "color":"#84c4e2","data":[]},
              {"code":"INOF" , "name":"Indonesia Office", "value":81, "color":"#84c4e2","data":[]},
              {"code":"MALY" , "name":"Haier MalaysiaSelangor(NEW)", "value":81, "color":"#84c4e2","data":[]},
              {"code":"ZEAL" , "name":"Haier New Zealand", "value":81, "color":"#84c4e2","data":[]},
              {"code":"SD" , "name":"山东", "value":164, "color":"#84c4e2","data":[]},
              {"code":"JS" , "name":"江苏", "value":133, "color":"#84c4e2","data":[]},
              {"code":"SH" , "name":"上海", "value":81, "color":"#84c4e2","data":[]},
              {"code":"ZJ" , "name":"浙江", "value":125, "color":"#84c4e2","data":[]},
              {"code":"AH" , "name":"安徽", "value":51, "color":"#84c4e2","data":[]},
              {"code":"FJ" , "name":"福建", "value":49, "color":"#84c4e2","data":[]},
              {"code":"JX" , "name":"江西", "value":64, "color":"#84c4e2","data":[]},
              {"code":"GD" , "name":"广东", "value":85, "color":"#84c4e2","data":[]},
              {"code":"GX" , "name":"广西", "value":42, "color":"#84c4e2","data":[]},
              {"code":"HAIN" , "name":"海南", "value":31, "color":"#84c4e2","data":[]},
              {"code":"HEN" , "name":"河南", "value":78, "color":"#84c4e2","data":[]},
              {"code":"HUN" , "name":"湖南", "value":61, "color":"#84c4e2","data":[]},
              {"code":"HUB" , "name":"湖北", "value":71, "color":"#84c4e2","data":[]},
              {"code":"BJ" , "name":"北京", "value":100, "color":"#84c4e2","data":[]},
              {"code":"TJ" , "name":"天津", "value":56, "color":"#84c4e2","data":[]},
              {"code":"HEB" , "name":"河北", "value":49, "color":"#84c4e2","data":[]},
              {"code":"SHAX" , "name":"山西", "value":53, "color":"#84c4e2","data":[]},
              {"code":"NMG" , "name":"内蒙古", "value":53, "color":"#84c4e2","data":[]},
              {"code":"NX" , "name":"宁夏", "value":49, "color":"#84c4e2","data":[]},
              {"code":"QH" , "name":"青海", "value":43, "color":"#84c4e2","data":[]},
              {"code":"SHAX" , "name":"陕西", "value":90, "color":"#84c4e2","data":[]},
              {"code":"GANS" , "name":"甘肃", "value":32, "color":"#84c4e2","data":[]},
              {"code":"XINJ" , "name":"新疆", "value":37, "color":"#84c4e2","data":[]},
              {"code":"SHIC" , "name":"四川", "value":63, "color":"#84c4e2","data":[]},

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
                        // var arr = ['商用空调','商用冷柜','其他'];
                        var arr = []
                        var str = `<span style="display: block;text-align: left;">${dataItem.name}</span>`;
                        // dataItem.data.forEach((item, index) => {
                        //     str += `<span style="display: block;text-align: left;">${arr[index]}：${item}</span>`
                        // })
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
                // balloonText: "<span style='font-size:.28rem;'><b>[[title]]</b>总数: [[value]]</span>",
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
      overflow: hidden;
      .map {
        margin: 0 auto;
        box-sizing: border-box;
        border: .2rem solid #fafafa;
        -webkit-border-radius: .24rem;
        -moz-border-radius: .24rem;
        border-radius: .24rem;
        width: 26.5rem;
        height: 10.6rem;
        margin-right: 1rem;
      }
    }
    .interlWap{
      position: relative;
    }
    #centerPer{
      position: absolute;
      bottom: -6rem;
      left: -.3rem;
      z-index: 990;
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