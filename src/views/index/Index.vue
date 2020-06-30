<template>
  <section class="board-wrap">
    <div class='board-header'>
      <p class='header-title'>
        COSMOPlat工业互联网平台
      </p>
      <p class='header-s-title'>
        Industrial Internet Platform of COSMOPlat
      </p>
    </div>
    <div class="content">
      <div class="content-left">
        <div class="industrial-app">
          <div class="special-border"></div>
          <div class="content-title">
            <p class="font">工业APP</p>
            <p class="info">
              总数 : <span class="number"><count-to ref="industrialApp" :startVal='0' :endVal='industrialApp' :duration='3000'></count-to></span>个
            </p>
          </div>
          <IndustrialApp />
        </div>
        <div class="industrial-model">
          <div class="special-border"></div>
          <div class="content-title">
            <p class="font">工业机理模型和微服务</p>
            <p class="info">
              工业机理模型 : <span class="number maring-right-10">{{industrialModel}}</span>
              微服务 : <span class="number"><count-to :startVal='0' :endVal='industrialModelVal' :duration='3000'></count-to></span>
            </p>
          </div>
          <IndustrialModel />
        </div>
      </div>
      <div class="content-center">
        <div class="board-info">
          <span class='info-name'> 产权专利 : </span>
          <span class='info-value'><count-to :startVal='0' :endVal='495' :duration='3000'></count-to></span>
          <span class="info-seperate">
            |
          </span>
          <span class='info-name'>平台交易额 : </span>
          <span class='info-value'><count-to :startVal='0' :endVal='3133' :duration='3000'></count-to></span>
          <span class='info-name'>亿元</span>
          <span class="info-seperate">
            |
          </span>
          <span class='info-name'>不入库率 : </span>
          <span class='info-value'><count-to :startVal='0' :endVal='69' :duration='3000'></count-to></span>
          <span class='info-name'>%</span>
          <router-link class="common-button padding-lr-30 cosmo-enter" :to="{ path: 'appliances' }">
            详情
          </router-link>
        </div>
        <div class="board-map">
          <WorldMap />
        </div>
        <div class="equipment-wrap">
          <div class="industrial-equipment">
            <div class="content-title-button">
              <p class="font float-left">工业设备</p>
              <div class="button-wrap float-right">
                <router-link class="common-button" :to="{ path: 'chart' }">
                  互联工厂
                </router-link>
                <router-link class="common-button" :to="{ path: 'logistics' }">
                  物流
                </router-link>
                <router-link class="common-button" :to="{ path: 'industrialPlant' }">
                  详情
                </router-link>
              </div>

            </div>
            <p class="info">
              总数 : <span class="number"><v-count refVal="equipmentIndustrial" :endVal="equipmentIndustrial"></v-count><!--<count-to :startVal='0' :endVal='equipmentIndustrial' :duration='3000'></count-to>--></span>个
            </p>
            <EquipmentIndustrial />
          </div>
          <div class="business-equipment">
            <div class="content-title-button">
              <p class="font float-left">商业设备</p>
              <div class="button-wrap float-right">
                <router-link class="common-button" :to="{ path: 'inter'}">详情</router-link>
              </div>
            </div>
            <p class="info">
              总数 : <span class="number"><v-count refVal="equipmentBussiness" :endVal="equipmentBussiness"></v-count><!--<count-to :startVal='0' :endVal='equipmentBussiness' :duration='3000'></count-to>--></span>个
            </p>
            <EquipmentBusiness />
          </div>
          <div class="charge-equipment">
            <div class="content-title-button">
              <p class="font float-left">消费设备</p>
              <div class="button-wrap float-right">
                <router-link class="common-button" :to="{ path: 'yunshang'}">衣联网</router-link>
                <router-link class="common-button" :to="{ path: 'console'}">详情</router-link>
              </div>
            </div>
            <p class="info">
              总数 : <span class="number"><v-count refVal="equipmentConsume" :endVal="equipmentConsume"></v-count><!--<count-to :startVal='0' :endVal='equipmentConsume' :duration='3000'></count-to>--></span>个
            </p>
            <EquipmentConsume />
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="data">
          <div class="special-border"></div>
          <div class="content-title-button margin-top-26">
            <p class="font float-left">数据运算能力</p>
            <div class="button-wrap float-right">
              <router-link class="common-button padding-lr-30" :to="{ path: 'per' }">
                详情
              </router-link>
            </div>
          </div>
          <DataOperation />
        </div>
        <div class="web-security">
          <div class="special-border"></div>
          <div class="content-title-button margin-top-26">
            <p class="font float-left">网络安全</p>
            <div class="button-wrap float-right">
              <router-link class="common-button padding-lr-30" :to="{ path: 'lbip' }">
                详情
              </router-link>
            </div>
          </div>
          <WebSecurity />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $primary-color: #0091e1;
  $red-color: #f52340;
  .board-wrap {
    overflow: hidden;
    p {
      margin: 0;
      line-height: 1;
    }
  }

  .board-header {
    padding: 0.6rem 0 0 0.4rem;
    text-align: center;
    .header-title {
      font-size: 44px;
      color: $primary-color;
      font-weight: 900;
      margin: 0;
    }
    .header-s-title {
      margin-top: 0.3rem;
      font-size: 16px;
      color: $primary-color;
    }
  }

  .content {
    margin-top: 0.5rem;
    overflow: hidden;
    width: 100%;
    >div {
      box-sizing: border-box;
      float: left;
    }
    .content-left{
      width: 20%;
      margin: 0.2rem 1% 0 2%;
      .industrial-app {
        width: 100%;
        height: 8rem;
      }
      .industrial-model {
        margin-top: 0.8rem;
        width: 100%;
        height: 8rem;
      }
    }
    .content-center {
      width: 52%;
      margin: 0 1% 0 1%;
      .board-info {
        text-align: center;
        color: $primary-color;
        position: relative;
        .info-name {
          font-size: 16px;
          vertical-align: middle;
        }
        .info-value {
          font-size: 22px;
          font-weight: 600;
          vertical-align: middle;
        }
        .info-seperate {
          margin: 0 0.2rem;
          vertical-align: middle;
        }
        .cosmo-enter {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 60px;
        }
      }
      .board-map {
        margin-top: 0.4rem;
        width: 100%;
      }
      .equipment-wrap {
        width: 100%;
        padding-bottom: 0.4rem;
        overflow: hidden;
        border: 1px solid #f1f1f1;
        border-width: 1px 1px 0 0;
        >div {
          float: left;
          width: 32%;
          padding: 0 0.2rem;
          box-sizing: border-box;
          border-left: 1px solid #f1f1f1;
        }
      }
    }
    .content-right {
      width: 20%;
      margin: 0.2rem 2% 0 1%;
      .database-type {
        margin-top: 0.4rem;
      }
      .web-security {
        margin-top: 0.5rem;
      }
    }
  }


  // common
  .special-border {
    margin-top: 0.1rem;
    width: 100%;
    height: 2px;
    background-color: #d8d9da;
    position: relative;
  }
  .special-border::before,
  .special-border:after {
    content: '';
    height: 0.2rem;
    width: 0.3rem;
    background-color: #d8d9da;
    position: absolute;
    z-index: 1;
    top: -0.08rem;
  }
  .special-border:before {
    right: 0;
  }
  .special-border:after {
    left: 0;
  }

  .content-title {
    margin-top: 0.4rem;
    overflow: hidden;
    .font {
      font-size: 18px;
      font-weight: bold;
      color: $primary-color;
    }
    .info {
      margin-top: 0.1rem;
      font-size: 12px;
      color: #999;
    }
    .number {
      font-size: 18px;
      color: $red-color;
      font-weight: bold;
    }
  }
  .info {
    margin-top: 0.1rem;
    font-size: 12px;
    color: #999;
    .number {
      font-size: 18px;
      color: $red-color;
      font-weight: bold;
    }
  }


  .content-title-button {
    margin: 0.4rem 0 0.2rem;
    overflow: hidden;
    position: relative;
    .font {
      line-height: 0.6rem;
      font-size: 18px;
      font-weight: bold;
      color: $primary-color;
    }
    .button-wrap {
      vertical-align: middle;
    }
  }

  .common-button {
    text-decoration: none;
    display: inline-block;
    height: 0.6rem;
    line-height: 0.6rem;
    padding: 0 0.28rem;
    background-color: #0091e1;
    border-radius: 6px;
    color: #fff;
    font-size: 12px;
  }

  .common-button:hover {
    background-color: #00aaff;
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  .margin-top-26 {
    margin-top: 0.52rem;
  }

  .maring-right-10 {
    margin-right: 10px;
  }

  .padding-lr-30 {
    padding: 0 0.4rem !important;
  }

  .amcharts-chart-div > a {
    display: none !important;
  }

  @media screen and (min-width: 3000px) {
    .content .content-left{
      width: 20%;
      margin: 0.2rem 1% 0 2%;
      .industrial-app {
        width: 100%;
        height: 6.5rem;
      }
      .industrial-model {
        margin-top: 0.8rem;
        width: 100%;
        height: 6.5rem;
      }
    }
  }
</style>

<script>
  import IndustrialApp from '../../components/IndustrialApp.vue'
  import IndustrialModel from '../../components/IndustrialModel.vue'
  import WorldMap from '../../components/WorldMap.vue'
  import EquipmentIndustrial from '../../components/EquipmentIndustrial.vue'
  import EquipmentBusiness from '../../components/EquipmentBusiness.vue'
  import EquipmentConsume from '../../components/EquipmentConsume.vue'
  import DataOperation from '../../components/DataOperation.vue'
  import WebSecurity from '../../components/WebSecurity.vue'
  import countTo from 'vue-count-to'
  import { mapState } from 'vuex'
  import vCount from '@/components/vCount.vue'

  export default {
    name: 'index',
    components: {
      IndustrialApp,
      IndustrialModel,
      WorldMap,
      EquipmentIndustrial,
      EquipmentBusiness,
      EquipmentConsume,
      DataOperation,
      WebSecurity,
      countTo,
      vCount
    },
    computed: {
      ...mapState({
        industrialApp: state => state.industrialApp.value,
        industrialModel: state => state.industrialModel.model,
        industrialModelVal: state => state.industrialModel.value,
        equipmentIndustrial: state => state.equipment.equipmentIndustrial,
        equipmentBussiness: state => state.equipment.equipmentBussiness,
        equipmentConsume: state => state.equipment.equipmentConsume
      })
    },
    data () {
      return {
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.$axios({
          url: '/screen/report/list',
          params: {
            level_one: 'ecology',
            level_two: 'ecological_value',
            // index_en: 'num_managed_consumer_equipment'
          }
        }).then(res => {
          console.log(res)
          // this.$store.commit('equipment/setConsumeValue', parseInt(res.data.list[0].stat_result));
          // chart.dataProvider = res.data.list.splice(1);
        }).then(() => {
          // chart.validateData(); // 更新数据
        })
      }
    }
  }
</script>
