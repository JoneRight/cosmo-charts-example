<template>
  <div class="ChartMap">
    <div class="ChartMapTop_number">
      <div>
        <p>当日订单：
          <!-- <coun-to :starVal='0' :endVal='sayDayOrder' :duration='3000'></coun-to> -->
          <span id="span1">630507</span>
          <span class="cmt_num_up">↑</span></p>
      </div>
      <div>
        <p>当前订单：
          <!-- <coun-to :starVal='0' :endVal='currentOrder' :duration='3000'></coun-to> -->
          <span id="span2">495</span>
          <span class="cmt_num_up">↑</span></p>
      </div>
      <div>
        <p>完成：
          <coun-to :starVal='0' :endVal='complete' :duration='3000'></coun-to>
          <span class="cmt_num_up">↑</span></p>
      </div>
    </div>
    <div id="map" class="map" ref="map"></div>
    <div class="ChartMapBottom_number">
      <div>
        <p>全球
          <coun-to :starVal='0' :endVal='160' :duration='3000'/>
          个国家
        </p>
        <p>
          <coun-to :starVal='0' :endVal='21' :duration='3000'/>
          个园区
        </p>
        <p>
          <coun-to :starVal='0' :endVal='108' :duration='3000'/>
          个工厂
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>
  import counTo from 'vue-count-to'
  import zh from '../../../static/ammap/lang/zh.js';

  export default {
    name: 'ChartMap',
    components: {
      counTo
    },
    data() {
      return {
        sayDayOrder: 630507,//当日订单
        currentOrder: 495,//当前订单
        complete: 100127,//完成
      }
    },
    mounted() {
      this.daChart()
      var num1 = this.sayDayOrder
      var num2 = this.currentOrder
      var t = setInterval(function(){
          var cc =Math.round(Math.random() * 10)
          num1+= cc
          num2+= cc
          var s1 = document.getElementById("span1")
          var s2 = document.getElementById("span2")
          s1.innerText = num1+12
          s2.innerText = num2+12
      },5000)
    },
    computed:{
    },
    methods: {
      daChart() {
        var map = AmCharts.makeChart("map", {
          "type": "map",
          "theme": "dark",
          "projection": "miller",
          "language": "zh",
          "imagesSettings": {
            "rollOverColor": "#089282",
            "rollOverScale": 3,
            "selectedScale": 3,
            "selectedColor": "#089282",
            "color": "#13564e"
          },
          "areasSettings": {
            // "unlistedAreasColor": "#ddd",//地图颜色
            "autoZoom": true,
            "selectedColor": "#ccc",
            "color": 'rgb(221, 221, 221)',
            "selectedOutlineColor": '#fff',
            "rollOverOutlineColor": '#fff',
            "rollOverColor": '#ccc',

          },
          "dataProvider": {
            "map": "worldLow",
            "zoomLongitude": -1,//偏移量
            "zoomLatitude": 40,
            "getAreasFromMap": true,//显示国家
            "images": [{
              "zoomLevel": 5,
              "scale": 0.5,
              width: 100,
                height: 100,
              "title": "墨西哥 7",
              "latitude":19.36,"longitude":-98.57
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "美国 11",
              "latitude":38.91,"longitude":-77.02
            }, {
              "zoomLevel": 15,
              "scale": 1,
              "title": "哥伦比亚 2",
              "latitude":6.15,"longitude":-75.36
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "厄瓜多尔 1",
              "latitude":-0.54,"longitude":-89.36
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "阿根廷 3",
              "latitude":-34.55,"longitude":-57.57
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "委内瑞拉 3",
              "latitude":10.3,"longitude":-66.58
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "泰国 7",
              "latitude":13.5,"longitude":100.29
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "越南 3",
              "latitude":23.01,"longitude":105.53
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "印尼 2",
              "latitude":-4.5,"longitude":128.1
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "日本 1",
              "latitude":35.41,"longitude":139.44
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "印度 4",
              "latitude":22.19,"longitude":73.14
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "巴基斯坦 3",
              "latitude":31.25,"longitude":73.04
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "新西兰 1",
              "latitude":-41.17,"longitude":174.47
            }, {
              "zoomLevel": 5,
              "scale": 0.5, 
              "title": "意大利 1",
              "latitude":45,"longitude":9.1
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "尼日利亚 2",
              "latitude":9.12,"longitude":7.11
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "孟加拉 1",
              "latitude":22.2,"longitude":91.48
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "俄罗斯 1",
              "latitude":55.45,"longitude":37.37
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "中国 55",
              "latitude":39.90,"longitude":116.41
            }],
            "export": {
              "enabled": false
            }
          }
        });
        // add events to recalculate map position when the map is moved or zoomed
        map.addListener("positionChanged", updateCustomMarkers);

        // this function will take current images on the map and create HTML elements for them
        function updateCustomMarkers(event) {
          // get map object
          var map = event.chart;

          // go through all of the images
          for (var x in map.dataProvider.images) {
            // get MapImage object
            var image = map.dataProvider.images[x];

            // check if it has corresponding HTML element
            if ('undefined' == typeof image.externalElement)
              image.externalElement = createCustomMarker(image);

            // reposition the element accoridng to coordinates
            var xy = map.coordinatesToStageXY(image.longitude, image.latitude);
            image.externalElement.style.top = xy.y + 'px';
            image.externalElement.style.left = xy.x + 'px';
          }
        }

        // this function creates and returns a new marker element
        function createCustomMarker(image) {
          // create holder
          var holder = document.createElement('div');
          holder.className = 'map-marker';
          holder.title = image.title;
          holder.style.position = 'absolute';

          // maybe add a link to it?
          if (undefined != image.url) {
            holder.onclick = function () {
              window.location.href = image.url;
            };
            holder.className += ' map-clickable';
          }

          // create dot
          var dot = document.createElement('div');
          dot.className = 'dot';
          holder.appendChild(dot);

          // create pulse
          var pulse = document.createElement('div');
          pulse.className = 'pulse';
          holder.appendChild(pulse);

          // append the marker to the map container
          image.chart.chartDiv.appendChild(holder);

          return holder;
        }

        map.validateData() // 数据更新

      }
    }
  }
</script>

<style lang="scss">
  .ChartMap{
    flex: 1;
    overflow:hidden;
    position: relative;
  }
  .map {
      margin: 0 auto;
      box-sizing: border-box;
      border: .2rem solid #fafafa;
      -webkit-border-radius: .24rem;
      -moz-border-radius: .24rem;
      border-radius: .24rem;
      width: 21rem;
      height: 15.6rem;
    }
  .ChartMapTop {
    h5 {
      font-size: 44px;
      color: #0191e1;
      font-weight: 900;
      display: inline-block;
      height: 1.2rem;
      line-height: 1.2rem;
      vertical-align: top;

    }
    p {
      font-size: 0.32rem;
      color: #0091e1;
      margin-top: 0.3rem;
    }
  }

  .cmt_num_up {
    color: yellow;
    padding-left: 0.2rem;
  }

  .ChartMapTop_number {
    position: absolute;
    z-index: 8;
    top: 1.3rem;
    left: 50%;
    text-align: center;
    // width: 100%;
    margin-left: -7.2rem;
    div {
      width: 4.5rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background-color: rgba(32, 44, 118, 0.5);
      border-radius: 0.06rem;
      float: left;
      margin-left: 0.1rem;
      padding-left: 0.2rem;
      p {
        color: #fff;
      }
      span {
        font-size: 0.32rem;
      }
    }
  }
  .ChartMapTop_number{
    position: relative;
  }
  .ChartMapBottom_number {
    position: absolute;
    z-index: 8;
    bottom: 0.4rem;
    left: 50%;
    width:14rem;
    margin-left: -7rem;
    text-align: center;
    div {
      width: 7.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background-color: rgba(32, 44, 118, 0.5);
      border-radius: 0.06rem;
      margin: 0 auto;
      p {
        display: inline-block;
        color: #fff;
        margin-left: 0.08rem;
        span {
          color: yellow;
          font-size: 0.4rem;
        }
      }
    }
  }

  #ChartMap {
    width: 100%;
    height: 100%;
  }

  #chartmapdiv {
    width: 12rem;
    height: 12rem;
    background: #f5f4f4;
  }

  .map-marker {
    /* adjusting for the marker dimensions
    so that it is centered on coordinates */
    margin-left: -0.16rem;
    margin-top: -0.16rem;
  }

  .map-marker.map-clickable {
    cursor: pointer;
  }

  .pulse {
    width: 0.2rem;
    height: 0.2rem;
    border: 0.1rem solid #81cbe9;
    -webkit-border-radius: 0.6rem;
    -moz-border-radius: 0.6rem;
    border-radius: 0.6rem;
    background-color: #81cbe9;
    z-index: 10;
    position: absolute;
  }

  .map-marker .dot {
    border: 0.2rem solid #81cbe9;
    background: transparent;
    -webkit-border-radius: 1.2rem;
    -moz-border-radius: 1.2rem;
    border-radius: 1.2rem;
    height: 1rem;
    width: 1rem;
    -webkit-animation: pulse 3s ease-out;
    -moz-animation: pulse 3s ease-out;
    animation: pulse 3s ease-out;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    position: absolute;
    top: -0.48rem;
    left: -0.5rem;
    z-index: 1;
    opacity: 0;
  }

  @-moz-keyframes pulse {
    0% {
      -moz-transform: scale(0);
      opacity: 0.0;
    }
    25% {
      -moz-transform: scale(0);
      opacity: 0.1;
    }
    50% {
      -moz-transform: scale(0.1);
      opacity: 0.3;
    }
    75% {
      -moz-transform: scale(0.5);
      opacity: 0.5;
    }
    100% {
      -moz-transform: scale(1);
      opacity: 0.0;
    }
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(0);
      opacity: 0.0;
    }
    25% {
      -webkit-transform: scale(0);
      opacity: 0.1;
    }
    50% {
      -webkit-transform: scale(0.1);
      opacity: 0.3;
    }
    75% {
      -webkit-transform: scale(0.5);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0.0;
    }
  }
</style>
