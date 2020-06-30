<template>
    <div class="interlAlarm">
        <div id="chartdiv_interlAlarm"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted(){
            this.showAlarm()
        },
        methods: {
            showAlarm(){
                var chart = AmCharts.makeChart("chartdiv_interlAlarm", {
                "type": "serial",
                "theme": "light",
                "legend": {
                    "useGraphSettings": true
                },
                "dataProvider": [{
                    "name": "星期一",
                    "italy": 1,
                    "germany": 5,
                    "uk": 3
                }, {
                    "name": "星期二",
                    "italy": 1,
                    "germany": 2,
                    "uk": 6
                }, {
                    "name": "星期三",
                    "italy": 2,
                    "germany": 3,
                    "uk": 1
                }, {
                    "name": "星期四",
                    "italy": 3,
                    "germany": 4,
                    "uk": 1
                }, {
                    "name": "星期五",
                    "italy": 5,
                    "germany": 1,
                    "uk": 2
                }, {
                    "name": "星期六",
                    "italy": 3,
                    "germany": 2,
                    "uk": 1
                }, {
                    "name": "星期日",
                    "italy": 1,
                    "germany": 2,
                    "uk": 3
                }],
                "valueAxes": [{
                    "integersOnly": true,
                    "maximum": 6,
                    "minimum": 1,
                    "reversed": true,
                    "axisAlpha": 0,
                    "dashLength": 5,
                    "gridCount": 10,
                    "position": "bottom",
                }],
                "startDuration": 0.5,
                "graphs": [{
                    "balloonText": "place taken by Germany in [[category]]: [[value]]",
                    "bullet": "round",
                    "title": "告警",
                    "valueField": "germany",
                    "fillAlphas": 0
                }, {
                    "balloonText": "place taken by UK in [[category]]: [[value]]",
                    "bullet": "round",
                    "title": "United Kingdom",
                    "valueField": "uk",
                    "fillAlphas": 0
                }],
                "chartCursor": {
                    "cursorAlpha": 0,
                    "zoomable": false
                },
                "categoryField": "name",
                "categoryAxis": {
                    "gridPosition": "start",
                    "axisAlpha": 0,
                    "fillAlpha": 0.05,
                    "fillColor": "#000000",
                    "gridAlpha": 0,
                    "position": "bottom"
                },
                
                "export": {
                    "enabled": false,
                    "position": "bottom-right"
                }
            });

            }
        },
    }
</script>

<style scoped>
    #chartdiv_interlAlarm {
        width	: 100%;
        height	: 5rem;
    }	
</style>