<!--物流车辆-->
<template>
  <section>
    <div class="block block1">
      <div class="box box1">
        <div class="box1-left">
          <span class="title">日日顺总车辆数</span>
          <div class="numbers">
            <span class="number">{{car_sum[0]}}</span>
            <span class="number">{{car_sum[1]}}</span>
            <span class="number">{{car_sum[2]}}</span>

            <span class="dot">,</span>

            <span class="number">{{car_sum[3]}}</span>
            <span class="number">{{car_sum[4]}}</span>
            <span class="number">{{car_sum[5]}}</span>

            <span>辆</span>
          </div>
        </div>
        <div class="box1-right">
          <div class="car-number" v-for="item in car_number">
            <p class="name">{{item.name}}</p>
            <p class="number">{{item.number}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block block2">
      <div id="chartdiv"></div>
      <div id="right-box">
        <div class="box box1">
          <div class="img-wrapper">
            <img src="./img/1.png" alt="1">
          </div>
          <div class="line"></div>
          <div class="describe describe1">
            <p class="name">闪电侠</p>
            <p class="number">430人</p>
          </div>
        </div>

        <div class="box box2">
          <div class="img-wrapper">
            <img src="./img/2.png" alt="2">
          </div>
          <div class="line"></div>
          <div class="describe describe2">
            <p class="name">飞毛腿</p>
            <p class="number">65333人</p>
          </div>
        </div>

        <div class="box box3">
          <div class="img-wrapper">
            <img src="./img/3.png" alt="3">
          </div>
          <div class="line"></div>
          <div class="describe describe3">
            <p class="name">安装达人</p>
            <p class="number">8225人</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block block3">
      <div class="left-box">
        <div class="title">五星车小微数量</div>
        <div id="chart2"></div>
      </div>
      <div class="split"></div>
      <div class="right-box">
        <div class="title">五星车小微占比</div>
        <div id="chart3"></div>
      </div>
    </div>
  </section>
</template>

<style lang='scss' type="text/scss" scoped>
  .block{
    width: 600px;
    height: 180px;
    border: 1px solid #319bff;
  }
  .block1{
    width: 600px;
    .box{
      
    }
    .box1{
      width: 100%;
      height: 180px;
      color: #319bff;
      font-weight: bold;
      .box1-left{
        width: 28%;
        height: 100%;
        float: left;
        padding-left: 5%;
        .title{
          display: inline-block;

          font-size: 16px;
          margin-top: 20px;
        }
        .numbers{
          margin-top: 40px;
          font-size: 22px;

          .number{
            display: inline-block;
            width: 18px;
            text-align: center;
            height: 30px;
            background-color: #ccc;
          }
          span{
            float: left;
            margin-right: 1px;
          }
        }
      }
      .box1-right{
        width: 66%;
        height: 100%;
        float: right;
        .car-number{
          display: inline-block;
          width: 100px;
          height: 60px;
          margin-top: 20px;
          margin-left: 10px;
          border: 1px solid #ccc;
          text-align: center;
          &:nth-child(3n){
            width: 150px;
          }
          p{
            line-height: 30px;
          }
          .name{
            color: #a1a1a1;
          }
        }
      }
    }
  }
  .block2{
  
    #chartdiv {
      width: 33%;
      height: 100%;
      float: left;
    }       
    #right-box{
      width: 60%;
      height: 100%;
      margin-left: 33%;
      padding-left: 6%;
      .box{
        display: inline-block;
        width: 50%;
        /* height: 50%; */
        padding-top: 30px;
        float: left;
        div{
          display: inline-block;
        }
        .img-wrapper{
          width: 35px;
          height: 35px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .line{
          width: 3px;
          height: 30px;
          margin-left: 20px;
          margin-right: 10px;
          background-color: #319bff;
        }
        .describe1{
          color: #ff7825;
        }
        .describe2{
          color: #efbf32;
        }
        .describe3{
          color: #27bace;
        }
        .describe{
        
          .number{
            font-weight: bold;
          }
        }
      }
    }
  }
  .block3{
    .title{
      color: #319bff;
      font-weight: bold;
      position: relative;
      left: 15px;
      top: 10px;

    }
    .left-box{
      width: 45%;
      height: 100%;
      float: left;
      #chart2{
        width: 100%;
        height:100%;
      }
    }
    .split{
      display: inline-block;
      float: left;
      width: 3px;
      height: 100px;
      background-color: #319bff;
      margin-top: 50px;
    }
    .right-box{
      width: 54%;
      height: 100%;
      float: right;
      #chart3{
        width: 100%;
        height:100%;
      }
    }
  }
</style>

<script>
  import echarts from 'echarts'
  export default {
    name:'vehicle',
    data() {
      return {
        car_sum:'115043',
        car_number:[
          {
            name:'干线车辆数',
            number:15720
          },
          {
            name:'区配车辆数',
            number:9383
          },
          {
            name:'最后一公里车辆数',
            number:89940
          },
          {
            name:'注册车辆数',
            number:114366
          },
          {
            name:'活跃车辆数',
            number:15235
          },
          {
            name:'接单车辆数',
            number:32008
          }
        ],
        car_percent:['66.70%','0.00%','6.20%','0.54%','26.56%']
      }
    },
    mounted() {
      this.renderCircle();
      this.renderRadar();
      this.renderCircle2()
    },
    methods: {
      renderCircle(){
         let myChart1 = echarts.init(document.getElementById('chartdiv'));
          let option = {
              title : {
                  
              },
              tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              series : [
                  {
                      name: '车辆',
                      type: 'pie',
                      radius : '55%',
                      center: ['50%', '50%'],
                      color:['#debc32','#2edae9','#ff7825'],
                      startAngle:10,
                      label:{
                          position:'inside',
                          formatter:function (params) {
                              if(params.percent > 1){
                                  return params.percent + '%'
                              }else {
                                  return ''
                              }

                          }
                      },
                      data:[
                          {value:430,name:'闪电侠'},
                          {value:65333, name:'飞毛腿'},
                          {value:8225, name:'安装达人'},
                      ],
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                      }
                  }
              ]
          };
         myChart1.setOption(option);
      },
      renderRadar() {
        var myChart = echarts.init(document.getElementById('chart2'));
        var option = {
              silent:true,
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  show:false,
              },
              color:['#ac8959'],
              radar: [
                  {
                      indicator: [
                          {text: '1星:19885', max: 30000},
                          {text: '2星:0', max: 3,min:-1},
                          {text: '3星:1849', max: 2000},
                          {text: '4星:162', max: 200},
                          {text: '5星:7917', max: 10000}
                      ],
                      center: ['55%','50%'],
                      radius: 50
                  },
                  
              ],
              series: [
                  {
                      type: 'radar',
                       tooltip: {
                          trigger: 'item'
                      },
                      itemStyle: {normal: {areaStyle: {type: 'default'}}},
                      data: [
                          {
                              value: [19885,0,1849,162,7917],
                              name: '五星车小微数量'
                          }
                      ]
                  },
                  
              ]
          };

        myChart.setOption(option)
      },
      renderCircle2(){
          let that = this;
          let myChart1 = echarts.init(document.getElementById('chart3'));
          let option = {
              tooltip: {
                  trigger: 'item',


                  formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              legend: {
                  align:'left',
                  padding:[5,0,5,0],
                  itemWidth:14,
                  orient: 'vertical',
                  right:30,
                  top:20,
                  data:['1星','2星','3星','4星','5星'],
                  formatter:function (params) {
                      let n = parseInt(params[0]) - 1
                      return params + ':' + that.car_percent[n]
                  }
              },
              series: [
                  {
                      name:'五星车小微占比',
                      type:'pie',
                      radius: ['40%', '65%'],
                      center:['30%','46%'],
                      avoidLabelOverlap: false,
                      label: {
                          normal: {
                              show: false,
                              position: 'center'
                          },
                          emphasis: {
                              show: true,
                              textStyle: {
                                  fontSize: '30',
                                  fontWeight: 'bold'
                              }
                          }
                      },
                      color:['#5eadff','#20d8ff','#4757e8','#fd6d28','#debc32'],
                      labelLine: {
                          normal: {
                              show: false
                          }
                      },
                      data:[
                          {value:19885, name:'1星'},
                          {value:0, name:'2星'},
                          {value:1849, name:'3星'},
                          {value:162, name:'4星'},
                          {value:7917, name:'5星'}
                      ]
                  }
              ]
          };
         myChart1.setOption(option);
      },
    }
  }
</script>
