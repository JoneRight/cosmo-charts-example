<template>
  <div class="LbipMap">
    <div id="lbip"></div>
    <div class="LbipMap_left">
      <div>资产总数</div>
      <span>6,302台</span>
    </div>
    <div class="LbipMap_right">
      <div>告警及阻断次数</div>
      <span>185,803</span>
    </div>
    <div class="LbipMap_center">
      <img src="http://cosmoplat-lbip.haier.net/bottomUpload/1505212069495.2727.png" alt="" />
      <div>COSMOPlat网络安全态势</div>
    </div>
  </div> 
</template>

<script>
  export default{
    name:'LbipMap',
    data(){
      return {}
    },
    mounted(){
      this.dataLbip()
      
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
    var planeSVG = "M150 0 L75 200 L225 200 Z";
    
    /**
     * Create the map
     */
var map = AmCharts.makeChart( "lbip", {
  "type": "map",
  "theme": "light",
  "dataProvider": {
    "map": "worldLow",
    "zoomLevel": 1,
    "zoomLongitude": 20,
    "zoomLatitude": 36,
    "lines": [ {
      "id": "line1",
      "arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 36.3051, 43.8163 ],
      "longitudes": [ 120.3167, -79.4287 ]
    },{
      "id": "line2",
      "arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 36.3051, 34.3 ],
      "longitudes": [ 120.3167, -118.15 ]
    },{
      "id": "line3",
      "arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 36.3051, 23 ],
      "longitudes": [ 120.3167, -82 ]
    },{
      "id": "line4",
      "arc": -0.15,
      "alpha": 0.3,
      "latitudes": [ 36.3051, -22.5937 ],
      "longitudes": [ 120.3167, 133.9453 ]
    },{
      "id": "line5",
      "arc": -0.8,
      "alpha": 0.3,
      "latitudes": [ 36.3051, 26.98 ],
      "longitudes": [ 120.3167, -101.9 ]
    },{
      "id": "line6",
      "arc": -0.8,
      "alpha": 0.3,
      "latitudes": [ 36.3051, 13.7527 ],
      "longitudes": [ 120.3167, 18.1054 ]
    },{
      "id": "line7",
      "arc": -0.8,
      "alpha": 0.3,
      "latitudes": [ 36.3051, 47.3983 ],
      "longitudes": [ 120.3167, 123.9257 ]
    },],
    "images": [ {
      "svgPath": targetSVG,
      "title": "Paris",
      "color":"yellow",
      "latitude": 36.3051,
      "longitude": 120.3167,
    }, {
      "svgPath": targetSVG,
      "title": "Toronto",
      "color":"#81cbe9",
      "latitude": 43.8163,
      "longitude": -79.4287
    }, {
      "svgPath": targetSVG,
      "title": "Los Angeles",
      "color":"#81cbe9",
      "latitude": 34.3,
      "longitude": -118.15
    }, {
      "svgPath": targetSVG,
      "title": "Havana",
      "color":"#81cbe9",
      "latitude": 23,
      "longitude": -82
    }, {
      "svgPath": targetSVG,
      "title": "sic",
      "color":"#81cbe9",
      "latitude": 26.98,
      "longitude": -101.9
    }, {
      "svgPath": targetSVG,
      "title": "tai",
      "color":"#81cbe9",
      "latitude": -22.5937,
      "longitude": 133.9453
    }, {
      "svgPath": targetSVG,
      "title": "fei",
      "color":"#81cbe9",
      "latitude": 13.7527,
      "longitude": 18.1054
    }, {
      "svgPath": targetSVG,
      "title": "shang",
      "color":"#81cbe9",
      "latitude": 47.3983,
      "longitude": 123.9257
    }, {
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#81cbe9",
      "animateAlongLine": true,
      "lineId": "line2",
      "flipDirection": true,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.3
    }, {
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#81cbe9",
      "animateAlongLine": true,
      "lineId": "line1",
      "flipDirection": true,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.8
    }, {
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#81cbe9",
      "animateAlongLine": true,
      "lineId": "line3",
      "flipDirection": true,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.8
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#81cbe9",
      "animateAlongLine": true,
      "lineId": "line4",
      "flipDirection": true,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.8
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#81cbe9",
      "animateAlongLine": true,
      "lineId": "line5",
      "flipDirection": true,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.8
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#81cbe9",
      "animateAlongLine": true,
      "lineId": "line6",
      "flipDirection": true,
      "loop": true,
      "scale": 0.04,
      "positionScale": 1.8
    },{
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#81cbe9",
      "animateAlongLine": true,
      "lineId": "line7",
      "flipDirection": true,
      "loop": true,
      "scale": 0.05,
      "positionScale": 1.8
    } ]
  },

  "areasSettings": {
    "unlistedAreasColor": "#dddddd"//地图颜色
  },

  "imagesSettings": {
    "color": "#585869",
    "rollOverColor": "#fff",
    "selectedColor": "#fff",
    "pauseDuration": 0.3,
    "adjustAnimationSpeed": true
  },

  "linesSettings": {
    "color": "yellow",
    "alpha": 0.5,
    "arrowColor":'#f10'
  },

  "export": {
    "enabled": true
  }

} );
      }
    }
  }
</script>

<style scoped>
  #lbip {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fafafa;
  }     
  .LbipMap{
    width: 100%;
  }
  .LbipMap_left{
    position: absolute;
    left: 1.2rem;
    top: 0.4rem;
    width: 2.7rem;
    border-top: 0.04rem solid #dadada;
    text-align: center;
    padding: 0.08rem;
    line-height: 0.6rem;
  }
  .LbipMap_left,.LbipMap_right div{
    color: #309fe5;
    font-size: 0.32rem;
    font-weight: 600;
  }
  .LbipMap_left span{
    font-size: 0.4rem;
    font-weight: 700;
    color: #309fe5;
  }
  .LbipMap_right span{
    font-size: .4rem;
    font-weight: 700;
    color: #f10;
  }
  .LbipMap_right{
    text-align: center;
    position: absolute;
    right: 1.2rem;
    top: 0.4rem;
    width: 2.7rem;
    border-top: 0.04rem solid #dadada;
    padding: 0.08rem;
    line-height: 0.6rem;
  }
  .LbipMap_center{
    position: absolute;
    left: 50%;
    top: 0.44rem;
    width:13rem;
    margin-left: -6rem;
  }
  .LbipMap_center>div{
    font-size: 0.8rem;
    color: #0191e1;
    font-weight: 700;
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