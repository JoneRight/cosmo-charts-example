<template>
  <div class="Uplus">
    <div class="UplusTop">
      <div class="logo">COSMOPlat</div>
      <ul class="topData">
        <li>
          <span class="title">总用户数</span>
          <count-to class="num" :startVal='0' :endVal='60194110' :duration='3000'></count-to>
        </li>
        <li>
          <span class="title">在线设备数</span>
          <count-to class="num" :startVal='0' :endVal='3514414' :duration='3000'></count-to>
        </li>
        <li>
          <span class="title">总交互数</span>
          <count-to class="num" :startVal='0' :endVal='623928626131' :duration='3000'></count-to>
        </li>
      </ul>
      <div class="TopDate" v-model="date">{{date}}</div>
    </div>
    <section class="UplusContent">
      <div class="left">
        <div class="special-border"></div>
        <div class="data">
          <span class="title">全国智慧场景使用情况</span>
          <p>累计推送次数<count-to class="num" :startVal='0' :endVal='2859643326' :duration='3000'></count-to>次</p>
          <p>累计推送设备<count-to class="num" :startVal='0' :endVal='3643259' :duration='3000'></count-to>台</p>
          <p>累计推送家庭<count-to class="num" :startVal='0' :endVal='2877691' :duration='3000'></count-to>户</p>
        </div>
        <div class="special-border"></div>
        <div id="gauge" class="gauge"></div>
        <div class="gaugeTitle">智慧家庭在线率</div>
      </div>
      <div id="centerMap" class="center"></div>
      <div class="right"></div>
    </section>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  import chart from 'echarts/lib/echarts';
  import world from '../../../static/world.js'


  export default {
    name: "Uplus",
    components: {
          countTo
    },
    data (){
      return {
        date: null
      }
    },
    mounted (){
      setInterval(this.getDate, 1000);
      this.getGauge();
      this.getMap();
    },
    methods: {
      getDate() {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let min = date.getMinutes();
        min = min < 10 ? ('0' + min) : min;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        this.date = `${y}年${m}月${d}日  ${h}:${min}:${s}`;
      },
      getGauge() {
        var chart = AmCharts.makeChart("gauge", {
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
            "startAngle": -130,
            "endAngle": 130,
            "unit": "%",
            "bandOutlineAlpha": 0,
            "bands": [{
              "color": "#0080ff",
              "endValue": 100,
              "innerRadius": "75%",
              "radius": "95%",
              "gradientRatio": [0.2, 0, -0.2],
              "startValue": 0
            }, {
              "color": "#0091e1",
              "endValue": 0,
              "innerRadius": "75%",
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
        });
        setTimeout(() => {
          var value = Math.round(Math.random() * 100);
          chart.arrows[0].setValue(value);
          chart.axes[0].setTopText(value + " %");
          // adjust darker band to new value
          chart.axes[0].bands[1].setEndValue(value);
        })

      },
      getMap() {
        var map = AmCharts.makeChart("centerMap", {
          "type": "map",
          "theme": "light",
          "projection": "miller",
          "imagesSettings": {
            "rollOverColor": "#089282",
            "rollOverScale": 3,
            "selectedScale": 3,
            "selectedColor": "#089282",
            "color": "#13564e"
          },
          "areasSettings": {
            "unlistedAreasColor": "#15A892"
          },
          "dataProvider": {
            "map": "worldLow",
            "images": [{
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Brussels",
              "latitude": 50.8371,
              "longitude": 4.3676
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Copenhagen",
              "latitude": 55.6763,
              "longitude": 12.5681
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Paris",
              "latitude": 48.8567,
              "longitude": 2.3510
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Reykjavik",
              "latitude": 64.1353,
              "longitude": -21.8952
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Moscow",
              "latitude": 55.7558,
              "longitude": 37.6176
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Madrid",
              "latitude": 40.4167,
              "longitude": -3.7033
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "London",
              "latitude": 51.5002,
              "longitude": -0.1262,
              "url": "http://www.google.co.uk"
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Peking",
              "latitude": 39.9056,
              "longitude": 116.3958
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "New Delhi",
              "latitude": 28.6353,
              "longitude": 77.2250
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Tokyo",
              "latitude": 35.6785,
              "longitude": 139.6823,
              "url": "http://www.google.co.jp"
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Ankara",
              "latitude": 39.9439,
              "longitude": 32.8560
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Buenos Aires",
              "latitude": -34.6118,
              "longitude": -58.4173
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Brasilia",
              "latitude": -15.7801,
              "longitude": -47.9292
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Ottawa",
              "latitude": 45.4235,
              "longitude": -75.6979
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Washington",
              "latitude": 38.8921,
              "longitude": -77.0241
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Kinshasa",
              "latitude": -4.3369,
              "longitude": 15.3271
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Cairo",
              "latitude": 30.0571,
              "longitude": 31.2272
            }, {
              "zoomLevel": 5,
              "scale": 0.5,
              "title": "Pretoria",
              "latitude": -25.7463,
              "longitude": 28.1876
            } ]
          }
        } );

// add events to recalculate map position when the map is moved or zoomed
        map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
        function updateCustomMarkers( event ) {
          // get map object
          var map = event.chart;

          // go through all of the images
          for ( var x in map.dataProvider.images ) {
            // get MapImage object
            var image = map.dataProvider.images[ x ];

            // check if it has corresponding HTML element
            if ( 'undefined' == typeof image.externalElement )
              image.externalElement = createCustomMarker( image );

            // reposition the element accoridng to coordinates
            var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
            image.externalElement.style.top = xy.y + 'px';
            image.externalElement.style.left = xy.x + 'px';
          }
        }

// this function creates and returns a new marker element
        function createCustomMarker( image ) {
          // create holder
          var holder = document.createElement( 'div' );
          holder.className = 'map-marker';
          holder.title = image.title;
          holder.style.position = 'absolute';

          // maybe add a link to it?
          if ( undefined != image.url ) {
            holder.onclick = function() {
              window.location.href = image.url;
            };
            holder.className += ' map-clickable';
          }

          // create dot
          var dot = document.createElement( 'div' );
          dot.className = 'dot';
          holder.appendChild( dot );

          // create pulse
          var pulse = document.createElement( 'div' );
          pulse.className = 'pulse';
          holder.appendChild( pulse );

          // append the marker to the map container
          image.chart.chartDiv.appendChild( holder );

          return holder;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $blue: #0091e1;
  $marginTT: .8rem;
  .UplusTop {
    margin-bottom: $marginTT;
    overflow: hidden;
    .logo {
      /*background: #4f81bd;*/
      color: $blue;
      font-size: .8rem;
      width: 7rem;
      height: 3.2rem;
      margin-top: $marginTT;
      margin-left: 1.2rem;
      text-align: center;
      line-height: 3.2rem;
      float: left;
      /*border: 5px solid #3a5f8b;*/
    }
    .topData {
      float: left;
      margin-top: $marginTT;
      height: 3.2rem;
      li {
        float: left;
        width: 7rem;
        padding-top: .5rem;
        .title {
          font-size: .5rem;
          color: $blue;
          display: inline-block;
          width: 100%;
          line-height: 1rem;
          text-align: center;
        }
        .num {
          font-size: .6rem;
          color: #333;
          display: inline-block;
          line-height: 1.2rem;
          text-align: center;
          width: 100%;
        }
      }
    }
    .TopDate {
      float: right;
      margin-right:.4rem;
      margin-top: $marginTT;
      height: 3.2rem;
      line-height: 3.2rem;
      font-size: .56rem;
      color: $blue;
    }
  }
  .UplusContent {
    overflow: hidden;
    .left, .right {
      width: 9.6rem;
    }
    .left {
      float: left;
      margin-left: .4rem;
    }
    .right {
      float: right;
      margin-right: .4rem;
    }
    .data {
      padding: .52rem .36rem;
      .title {
        font-size: .52rem;
        color: $blue;
        display: inline-block;
        line-height: 1.6rem;
      }
      p {
        font-size: .44rem;
        color: $blue;
      }
      .num {
        margin-left: .6rem;
        font-size: .72rem;
        color: #333;
        line-height: 1.6rem;
      }
    }
    .gauge {
      width: 9rem;
      height: 9rem;
      margin: 0 auto;
    }
  }
  .gaugeTitle {
    text-align: center;
    font-size: .5rem;
    color: $blue;
    margin-top: -40px;
  }
  .special-border {
    margin-top: 6px;
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
