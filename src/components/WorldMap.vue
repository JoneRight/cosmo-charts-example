/* 首屏-世界地图 */
<template>
  <section class="map-wrap">
    <div id="world-map"></div>
    <div class="map-legend">
      <div v-bind:class="{ gray: !user }" @click="() => changeMapData('user')">
        <span class="user"></span>
        <span class="red-number">用户({{userValue}})</span>
      </div>
      <div v-bind:class="{ gray: !company }" @click="() => changeMapData('company')">
        <span class="company"></span>
        <span>企业({{companyValue}})</span>
      </div>
      <div v-bind:class="{ gray: !rd }" @click="() => changeMapData('rd')">
        <span class="rd"></span>
        <span>开发者({{rdValue}}个)</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  $user-color: #fbe639;
  $company-color: #45c0f1;
  $rd-color: #9fe6b8;

  // .red-number {
  //   color: #f52340;
  // }

  .map-wrap {
    background-color: rgb(250, 250, 250);
    padding: 10px;
    border-radius: 12px;
    position: relative;
    #world-map {
      width: 100%;
      height: 11.3rem;
    }
    .map-info {
      color: #f52340;
      font-size: 14px;
      display: inline-block;
      position: absolute;
      right: 0.6rem;
      top: 0.3rem;
      .detail {
        margin-bottom: 0.3rem;
        padding-bottom: 0.24rem;
        border-bottom: 1px solid #ccc;
        p {
          margin-top: 0.16rem;
        }
        span {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
    .map-legend {
      position: absolute;
      top: 1rem;
      width: 100%;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      >div {
        width: 20%;
        display: inline-block;
        margin-right: 0.4rem;
        cursor: pointer;
        user-select: none;
        span:nth-child(1) {
          width: 0.6rem;
          height: 0.36rem;
          margin-right: 0.2rem;
          display: inline-block;
          vertical-align: middle;
        }
        span:nth-child(2) {
          font-size: 16px;
          color: #f52340;
          font-weight: bold;
          vertical-align: middle;
        }
        .user {
          background-color: $user-color;
        }
        .company {
          background-color: $company-color;
        }
        .rd {
          background-color: $rd-color;
        }
      }
    }

    .gray {
      opacity: 0.4;
    }
  }

  @media screen and (min-width: 3000px) {
    .map-wrap #world-map {
      width: 100%;
      height: 12.9rem;
    }
  }
</style>

<script>
  import '../../static/ammap/ammap.css'
  import '../../static/ammap/ammap.js'
  import '../../static/ammap/maps/js/worldLow.js'
  import '../../static/ammap/lang/zh.js'
  import '../../static/ammap/themes/black.js'
  import { positionConfig, areaConfig } from '../constants/mapConfig'
  import { mapState } from 'vuex'

  export default {
    name: 'hello',
    data() {
      return {
        positionConfig,
        areaConfig,
        user: true,
        rd: true,
        company: true,
      }
    },
    computed: {
      ...mapState({
        userValue: state => state.worldMap.user,
        rdValue: state => state.worldMap.rd,
        companyValue: state => state.worldMap.company
      })
    },
    created() {
      this.$axios.all([
        this.$axios({
          url: '/screen/report/list',
          params: {
            level_one: 'platform_resource_management_apability',
            level_two: 'developer_management_capability',
            index_en: 'num_platform_users'
          }
        }),
        this.$axios({
          url: '/screen/report/list',
          params: {
            level_one: 'platform_resource_management_apability',
            level_two: 'developer_management_capability',
            index_en: 'num_connections_thirdparty_developers'
          }
        }),
        this.$axios({
          url: '/screen/report/list',
          params: {
            level_one: 'platform_resource_management_apability',
            level_two: 'num_eterprise_uses_of_platform_service',
            index_en: 'num_connections_thirdparty_developers'
          }
        })
      ]).then(res => {
        let list1 = res[0].data.list.splice(1);
        let list2 = res[1].data.list.splice(1);
        let list3 = res[2].data.list.splice(1);
        this.$store.commit('worldMap/setUser', res[0].data.list[0].stat_result);
        this.$store.commit('worldMap/setRd', res[1].data.list[0].stat_result);
        // this.$store.commit('worldMap/setCompany', res[2].data.list[0].stat_result);
        this.areaConfig.forEach((item, index) => {
          let isOk = false; // 节约性能
          list1.forEach((data, i) => {
            if (item.code === data.category_en) {
              item.value = data.stat_result;
              list1.splice(i, 1);
              isOk = true;
            }
          });
          if (isOk) {
            isOk = false;
            return;
          }
          list2.forEach((data, i) => {
            if (item.code === data.category_en) {
              item.value = data.stat_result;
              list2.splice(i, 1);
              isOk = true;
            }
          });
          if (isOk) {
            isOk = false;
            return;
          }
          list3.forEach((data, i) => {
            if (item.code === data.category_en) {
              item.value = data.stat_result;
              list3.splice(i, 1);
            }
          });
        })
      }).then(() => {
        this.drawLine(this.positionConfig, this.areaConfig);
      })

    },

    methods: {
      changeMapData(type) {
        this[type] = !this[type]
        if (!this[type]) {
          this.filterMapConfig(type)
        } else {
          this.addMapConfig(type)
        }
        this.drawLine(this.positionConfig, this.areaConfig)
      },

      filterMapConfig(type) {
        const newPositionConfig = {}
        for (let i in this.positionConfig) {
          if (i.indexOf('-' + type) === -1) {
            newPositionConfig[i] = this.positionConfig[i]
          }
        }
        this.positionConfig = newPositionConfig
        this.areaConfig = this.areaConfig.filter(config => config.code.indexOf('-' + type) === -1)
      },

      addMapConfig(type) {
        for (let i in positionConfig) {
          if (i.indexOf('-' + type) !== -1) {
            this.positionConfig[i] = positionConfig[i]
          }
        }
        const newAreaConfig = areaConfig.filter(config => config.code.indexOf('-' + type) !== -1)
        this.areaConfig = this.areaConfig.concat(newAreaConfig)
      },

      drawLine(innserPositionConfig, innerAreaConfig) {
        let _this = this;
        function generateMap () {
          var minBulletSize = 15;
          var maxBulletSize = 40;
          var min = Infinity;
          var max = -Infinity;
          var userColor = '#fbe639'
          var companyColor = '#45c0f1'
          var rdColor = '#9fe6b8'

          for (var i = 0; i < innerAreaConfig.length; i++) {
            var value = innerAreaConfig[i].value;
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
          }
          const maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
          const minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
          for (var i = 0; i < innerAreaConfig.length; i++) {
            var dataItem = innerAreaConfig[i];
            var value = dataItem.value;
            var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
            if (square < minSquare) {
              square = minSquare;
            }
            if (square > maxSquare) {
              square = maxSquare;
            }
            var size = Math.sqrt(square / (Math.PI * 2));
            var id = dataItem.code;
            var color
            if (id.indexOf('-user') !== -1) {
              color = userColor
            }
            if (id.indexOf('-company') !== -1) {
              color = companyColor
            }
            if (id.indexOf('-rd') !== -1) {
              color = rdColor
            }
            dataProvider.images.push({
              type: "circle",
              width: size,
              height: size,
              color: color,
              longitude: innserPositionConfig[id].longitude,
              latitude: innserPositionConfig[id].latitude,
              title: dataItem.name,
              value: value,
              rollOverScale: 2,
              zoomLevel: 5,
            });
          }

          const myMap = AmCharts.makeChart("world-map", {
            type: "map",
            theme: 'miller',
            color: "black",
            language: "zh",
            imagesSettings: {
              balloonText: "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>",
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
        }

        if (AmCharts.isReady) {
          setTimeout(generateMap, 0);
        } else {
          AmCharts.ready(generateMap);
        }
      }
    }
  }
</script>
