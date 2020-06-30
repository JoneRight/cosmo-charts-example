<!--好评统计-->
<template>
    <div id="good-commmet">
        <div class="top-block">
            <div class="title">
                <div class="img-wrapper">
                    <img src="./img/good.png" alt="">
                </div>
                <div class="split"></div>
                <div class="title-name">
                    网店好评率统计
                </div>
            </div>

            <div class="left-box">
                <div class="img-wrapper">
                    <img src="./img/round1.png" alt="">
                    <div class="number">96%</div>
                </div>
                <div class="comment">总好评率</div>
            </div>

            <div class="split"></div>

            <div class="right-box">
                <div id="bar-chart"></div>
            </div>
        </div>

        <div class="bottom-block">
            <div class="left-box">
                <div class="img-wrapper">
                    <img src="./img/net-picture.png" alt="">
                </div>
            </div>

            <div class="right-box">
                <div class="box">
                    <div class="img-wrapper">
                        <img src="./img/net-name.png" alt="">
                    </div>
                    <div class="info">
                        <p class="title">网店名称</p>
                        <p>西安顺隆信息科技有限公司</p>
                    </div>
                </div>

                <div class="box">
                    <div class="img-wrapper">
                        <img src="./img/net-point.png" alt="">
                    </div>
                    <div class="info">
                        <p class="title">网店位置</p>
                        <p>陕西省西安市未央区气象巷A座5楼A房2号</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        data ()
        {
            return {}
        },
        mounted(){
            this.renderBar()
        },
        methods: {
            renderBar(){
                let myChart1 = echarts.init(document.getElementById('bar-chart'));
                let option = {

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter:function (params) {
                            return params[0].marker + params[0].seriesName + ': ' + params[0].data + '%'
                        }
                    },
                    grid: {
                        top:0,
                        left: '5%',
                        right: '10%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        show:false,
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        splitLine: {
                            show: false
                        },
                    },
                    yAxis: {

                        type: 'category',
                        data: ['华北','华东','华中','西部','豫皖','东北浙江','华南','山东']
                    },
                    color:['#0091e1'],
                    barWidth:20,
                    label:{
                        show:true,
                        position:'right',
                        formatter:function (params) {
                            console.log(params)
                            return params.data + '%'
                        }
                    },
                    series: [
                        {
                            name: '好评率',
                            type: 'bar',
                            data: [92,93,94,95,96,96,98,98]
                        },
                    ]
                };
                myChart1.setOption(option);
            },
        },
    }

</script>

<style lang='scss' type="text/scss" scoped>
    #good-commmet{
        border: 1px solid #319bff;
        width: 700px;
        height: 600px;
        margin-bottom: 20px;
        .top-block{
            height: 370px;
            border-bottom: 1px solid #319bff;
            div{
                display: inline-block;
            }
            .title{
                display: block;
                margin-left: 20px;
                margin-top: 30px;
                div{
                    display: inline-block;
                }
                .img-wrapper{
                    width: 40px;
                    height: 40px;
                    border: 1px solid #ccc;
                    border-radius: 50%;
                    float: left;
                    position: relative;
                    top: -10px;
                    img{
                        width: 60%;
                        height: 60%;
                        margin-left: 20%;
                        margin-top: 20%;
                    }
                }
                .split{
                    width: 3px;
                    height: 40px;
                    background-color: #319bff;
                    margin-left: 10px;
                    margin-right: 10px;
                    margin-top: -10px;
                }
                .title-name{
                    position: relative;
                    top: -10px;
                    height: 42px;
                    line-height: 42px;
                    color:#319bff;
                    font-weight: bold;
                    font-size: 18px;
                }
            }
            .left-box{
                width: 40%;
                height: 87%;
                margin-left: 30px;
                position: relative;
                float: left;
                .img-wrapper{
                    width: 200px;
                    height: 200px;
                    position: relative;
                    img{
                        width: 90%;
                        /*height: 90%;*/
                        margin: 5%;
                    }
                    .number{
                        display: inline-block;
                        position: absolute;
                        color: #000;
                        font-size: 28px;
                        font-weight: bold;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%,-50%);
                    }
                }
                .comment{
                    color: #319bff;
                    font-weight: bold;
                    width: 200px;
                    margin-top: 30px;
                    font-size: 20px;
                    text-align: center;
                    display: block;
                }

            }
            .split{
                width: 3px;
                height: 300px;
                background-color: #319bff;
                float: left;
            }
            .right-box{
                float: left;
                width: 55%;
                height: 87%;
                #bar-chart{
                    width: 100%;
                    height: 80%;
                }
            }

        }
        .bottom-block{
            div{
                display: inline-block;
            }
            .left-box{
                width: 33%;
                height: 100%;
                .img-wrapper{
                    margin-top: 10%;
                    margin-left: 10%;
                    width:80%;
                    height:80%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .right-box{
                width: 66%;
                height: 100%;
                .img-wrapper{
                    width: 60px;
                    height: 60px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .info{
                    height: 60px;
                    position: relative;
                    top: -10px;
                    color: #666;
                    .title{
                        color: #319bff;
                    }
                }
            }
        }
    }
</style>
