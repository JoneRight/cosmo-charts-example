<template>
  <div class="LbipMap">
    <div id="lbip"></div>
    <div class="LbipMap_left">
      <div>资产总数</div>
      <coun-to :starVal='0' :endVal='totalAssets' :duration='3000'/>
    </div>
    <div class="LbipMap_right">
      <div>告警及阻断次数</div>
      <span class="zuduanNumbers"></span>
    </div>
    <div class="LbipMap_center">
      <div>COSMOPlat网络安全态势</div>
    </div>
  </div> 
</template>

<script>
  import counTo from 'vue-count-to'
  import zh from '../../../static/ammap/lang/zh.js';
  export default{
    name:'LbipMap',
    data(){
      return {
        totalAssets:6302,//资产总数
      }
    },
    components:{
      counTo
    },
    mounted(){
      this.dataLbip()
      let nums = 185803;  // 如果storage里没有就用这个数字
      let data = sessionStorage.getItem('web-security')
      if (data) {
        data = JSON.parse(data)
        nums = parseInt(data['nums'])
      }

      var numRun = $(".zuduanNumbers").numberAnimate({ num: nums.toString(), speed: 2000, symbol: "," });
      
      setInterval(function () {
        var temp = Math.max(Math.floor(Math.random() * 10), 1)
        nums += temp;
        numRun.resetData(nums);

        let data = {
          nums: nums
        }
        data = JSON.stringify(data)
        sessionStorage.setItem('web-security', data)

      }, 3000);
    },
    methods:{
      dataLbip(){
        /**
     * SVG path for target icon
     */
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    
    /**
     * SVG path for plane icon
     */
    var planeSVG = "M10 10 H 290 V 20 H 20 L 10 10";
 
    /**
     * Create the map
     */
    var aa = [ {
      "id": "line1",
      "arc": -0.85,
      "alpha": 0,
      "latitudes": [  43.8163, 36.1301],
      "longitudes": [-79.4287 ,120.4201 ]
    },{
      "id": "line2",
      "arc": -0.85,
      "alpha": 0,
      "latitudes": [ 34.3, 36.1301 ],
      "longitudes": [ -118.15 ,120.4201 ]
    },{
      "id": "line3",
      "arc": -0.85,
      "alpha": 0,
      "latitudes": [ 23,  36.1301],
      "longitudes": [  -82, 120.4201]
    },{
      "id": "line4",
      "arc": -0.15,
      "alpha": 0,
      "latitudes": [  -22.5937,  36.1301 ],
      "longitudes": [  133.9453, 120.4201 ]
    },{
      "id": "line5",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  26.98,  36.1301 ],
      "longitudes": [  -101.9, 120.4201 ]
    },{
      "id": "line6",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  13.7527,  36.1301 ],
      "longitudes": [  18.1054, 120.4201 ]
    },{
      "id": "line8",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  78.5604,  36.1301 ],
      "longitudes": [ -32.5195, 120.4201 ]
    },{
      "id": "line9",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  67.7427,  36.1301 ],
      "longitudes": [  152.05078, 120.4201 ]
    },{
      "id": "line10",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  44.8402,  36.1301 ],
      "longitudes": [  -107.5781, 120.4201 ]
    },{
      "id": "line11",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  45.5832,  36.1301 ],
      "longitudes": [  -114.6972, 120.4201 ]
    },{
      "id": "line12",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  43.1917,  36.1301 ],
      "longitudes": [  -113.3789, 120.4201 ]
    },{
      "id": "line13",
      "arc": -0.6,
      "alpha": 0,
      "latitudes": [  40.7139,  36.1301 ],
      "longitudes": [  -112.5, 120.4201 ]
    },{
      "id": "line14",
      "arc": -0.4,
      "alpha": 0,
      "latitudes": [  43.8978,  36.1301 ],
      "longitudes": [  -106.8750, 120.4201 ]
    },{
      "id": "line15",
      "arc": -0.5,
      "alpha": 0,
      "latitudes": [  42.1917,  36.1301 ],
      "longitudes": [  -110.3789, 120.4201 ]
    },{
      "id": "line16",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  43.1917,  36.1301 ],
      "longitudes": [  -106.3789, 120.4201 ]
    },{
      "id": "line17",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  59.4450,  36.1301 ],
      "longitudes": [  45.8789, 120.4201 ]
    },{
      "id": "line18",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  66.8610,  36.1301 ],
      "longitudes": [  113.2031, 120.4201 ]
    },{
      "id": "line19",
      "arc": -0.3,
      "alpha": 0,
      "latitudes": [  18.1456,  36.1301 ],
      "longitudes": [  12.3046, 120.4201 ]
    },{
      "id": "line20",
      "arc": -0.7,
      "alpha": 0,
      "latitudes": [  37.3002,  36.1301 ],
      "longitudes": [  81.7382, 120.4201 ]
    },{
      "id": "line21",
      "arc": -1,
      "alpha": 0,
      "latitudes": [  37.3002,   42.1917 ],
      "longitudes": [  81.7382,  -110.3789 ]
    },{
      "id": "line22",
      "arc": 1.8,
      "alpha": 0,
      "latitudes": [  37.3002,  42.1917 ],
      "longitudes": [  81.7382, -110.3789 ]
    },{
      "id": "line23",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  42.1917,  66.8610],
      "longitudes": [  -110.3789,  113.2031 ]
    },{
      "id": "line24",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  34.3,  37.3002, ],
      "longitudes": [  -118.15, 81.7382, ]
    },{
      "id": "line25",
      "arc": -0.8,
      "alpha": 0,
      "latitudes": [  37.3002,  23 ],
      "longitudes": [  81.7382, -82 ]
    },{
      "id": "line26",
      "arc": -0.18,
      "alpha": 0,
      "latitudes": [    36.1301, 44.8402,],
      "longitudes": [  120.420, -107.57811 ]
    },]

  var map = AmCharts.makeChart( "lbip", {
    "type": "map",
    "theme": "light",
    language: "zh",
  "dataProvider": {
    "map": "worldLow",
    "zoomLevel": 1,
    "zoomLongitude": 10,//地图X轴偏移量
    "zoomLatitude": 55,//地图y轴偏移量
    "getAreasFromMap":true,//显示国家
    "lines": aa,
    "images": [ 
      {
      "svgPath": targetSVG,
      "title": "青岛",
      "color":"yellow",
      "latitude": 36.1301,
      "longitude": 120.4201,
    }, {
      "svgPath": targetSVG,
      "title": "多伦多",
      "color":"#81cbe9",
      "latitude": 43.8163,
      "longitude": -79.4287,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#ff08004a",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line1",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    }, {
      "svgPath": targetSVG,
      "title": "美国",
      "color":"#81cbe9",
      "latitude": 34.3,
      "longitude": -118.15,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#ff08004a",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line3",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1
    },{
      "svgPath": targetSVG,
      "title": "美国",
      "color":"#81cbe9",
      "latitude": 44.84,
      "longitude": -107.57,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line10",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.5
    },{
      "svgPath": targetSVG,
      "title": "美国",
      "color":"#81cbe9",
      "latitude": 34.3,
      "longitude": -118.15,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#ff08004a",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line11",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.2
    },{
       "svgPath": targetSVG,
      "title": "美国",
      "color":"#81cbe9",
      "latitude": 34.3,
      "longitude": -118.15,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#ff08004a",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line12",
      "flipDirection": false,
      "loop": true,
      "scale": 0.06,
      "positionScale": 1.9
    },{
       "svgPath": targetSVG,
      "title": "美国",
      "color":"#81cbe9",
      "latitude": 34.3,
      "longitude": -118.15,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#ff08004a",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line13",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.2
    },{
       "svgPath": targetSVG,
      "title": "美国",
      "color":"#81cbe9",
      "latitude": 34.3,
      "longitude": -118.15,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line14",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1
    },{
       "svgPath": targetSVG,
      "title": "美国",
      "color":"#81cbe9",
      "latitude": 34.3,
      "longitude": -118.15,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line15",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 2
    },{
       "svgPath": targetSVG,
      "title": "美国",
      "color":"#81cbe9",
      "latitude": 34.3,
      "longitude": -118.15,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line16",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 2
    }, {
      "svgPath": targetSVG,
      "title": "古巴",
      "color":"#81cbe9",
      "latitude": 23,
      "longitude": -82,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line4",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 2
    }, {
      "svgPath": targetSVG,
      "title": "墨西哥",
      "color":"#81cbe9",
      "latitude": 26.98,
      "longitude": -101.9,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line5",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 2
    }, {
      "svgPath": targetSVG,
      "title": "澳大利亚",
      "color":"#81cbe9",
      "latitude": -22.5937,
      "longitude": 133.9453,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line6",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 2
    }, {
      "svgPath": targetSVG,
      "title": "非洲",
      "color":"#81cbe9",
      "latitude": 13.7527,
      "longitude": 18.1054,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line8",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 2
    },{
      "svgPath": targetSVG,
      "title": "格陵兰",
      "color":"#81cbe9",
      "latitude": 78.5604,
      "longitude": -32.5195,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "yellow",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line8",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 2
    },{
      "svgPath": targetSVG,
      "title": "俄罗斯",
      "color":"#81cbe9",
      "latitude": 67.7427,
      "longitude": 152.05078,
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line9",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
      "positionScale": 2
    }, {
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line2",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line17",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line18",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line19",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line20",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line21",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line22",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line23",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line24",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line25",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#f10",
      "animateAlongLine": true,
      'animateAngle':true,
      "lineId": "line26",
      "flipDirection": false,
      "loop": true,
      "scale": 0.05,
    }]
  },
  
  "areasSettings": {
    // "unlistedAreasColor": "#999",//地图颜色
    // 'outlineThickness':0.8,
     "autoZoom": true,
      "selectedColor": "#ccc",
      "color": 'rgb(221, 221, 221)',
      "selectedOutlineColor": '#fff',
      "rollOverOutlineColor": '#fff',
      "rollOverColor": '#ccc',
  },
  "imagesSettings": {
    "color": "#585869",
    "rollOverColor": "#fff",
    "selectedColor": "#fff",
    "pauseDuration": 0.3,
    "adjustAnimationSpeed": true
  },
  "linesSettings": {
    "color": "#d9dc1d",
    "alpha": 0.5,
    "arrowColor":'#f10'
  },

  "export": {
    "enabled": false
  }
  
} );
    function a(){
      console.log(123)
    }
      }
    }
  }
</script>

<style scoped>
  #lbip {
    flex: 1;
    height: 12rem;
    width: 100%;
    background: #fff;
    margin-top: 1rem;
  }     
  .LbipMap{
    width: 100%;
  }
  .LbipMap_left{
    position: absolute;
    left: 2rem;
    top: 2.4rem;
    width: 4.5rem;
    border-top: 0.04rem solid #dadada;
    text-align: center;
    padding: 0.08rem;
    line-height: 0.6rem;
  }
  .LbipMap_left,.LbipMap_right div{
    line-height: 0.6rem;
    font-size: 18px;
    font-weight: bold;
    color: #0091e1;
  }
  .LbipMap_left span{
    display: inline-block;
    font-size: 0.72rem;
    padding-top: 0.4rem;
    font-weight: 700;
    color: #309fe5;
  }
  .LbipMap_right span{
    font-size: 0.4rem;
    font-weight: 700;
    color: #f10;
  }
  .LbipMap_right{
    text-align: center;
    position: absolute;
    right: 2rem;
    top: 2.4rem;
    width: 4.5rem;
    border-top: 0.04rem solid #dadada;
    padding: 0.08rem;
    line-height: 0.6rem;
  }
  .LbipMap_center{
    position: absolute;
    left: 50%;
    top: 0.34rem;
    width:15rem;
    margin-left: -7.1rem;
  }
  .LbipMap_center>div{
    font-size: 44px;
    color: #0191e1;
    font-weight: 900;
    display: inline-block;
    height: 1.2rem;
    line-height: 1.2rem;
    vertical-align: top;
  }
 .LbipMap_center>img{
    padding: 0;
    border-style: none;
    overflow: hidden;
    margin: 0;
    border-color: rgb(170, 170, 170);
    border-width: 0.02rem;
    border-radius: 0.1rem;
    height: auto;
    width: 1.1rem;
    cursor: pointer;
}
</style>