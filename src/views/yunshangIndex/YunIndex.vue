<template>
  <section class="board-wrap">
    <div class='board-header'>
      <p class='header-title'> 
        衣联生态平台
      </p>
      <p class='header-s-title'>
        U-YUNSH Internet Eco-Network Platform
      </p>
    </div>
    <div class="content">
      <div class="content-left">
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>衣联生态</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="industrial-app">
          <div class="special-border"></div>
          <div class="content-title">
            <p class="font">服装品牌智能衣物总体销售情况</p>
            <p class="info">
              总数 : <span class="number"><count-to :startVal='0' :endVal='83' :duration='3000'></count-to></span>万件
            </p>
          </div>
          <!-- 服装品牌智能衣物销售情况 -->
          <BrandClothesSalesSituation/>
        </div>
        <div class="industrial-model">
          <div class="special-border"></div>
          <div class="content-title">
            <p class="font">服装在售量和智能衣物占有量</p>
            <p class="info">
              总数 : <span class="number"><count-to :startVal='0' :endVal='41012' :duration='3000'></count-to></span>件
            </p>
            <p class="info">
              智能衣物总数 : <span class="number"><count-to :startVal='0' :endVal='18216' :duration='3000'></count-to></span>件
            </p>
          </div>
          <SmartClothesRatio />
        </div>
      </div>
      <div class="content-center">
        <div class="board-info">
          <span class='info-name'> 门店数量 : </span>
          <span class='info-value'><count-to :startVal='0' :endVal='11120' :duration='3000'></count-to></span>
          <span class="info-seperate">
            |
          </span>
          <span class='info-name'> 加盟品牌 : </span>
          <span class='info-value'><count-to :startVal='0' :endVal='10' :duration='3000'></count-to></span>
          <span class='info-name'>家</span>
          <span class="info-seperate">
            |
          </span>
          <span class='info-name'>衣联网交易额 : </span>
          <span class='info-value'><count-to :startVal='0' :endVal='569000000' :duration='3000'></count-to></span>
          <span class='info-name'>元</span>
          <span class="info-seperate">
            |
          </span>
          <span class='info-name'> 硬件总量 : </span>
          <span class='info-value'><count-to :startVal='0' :endVal='116' :duration='3000'></count-to></span>
          <span class='info-name'>万件</span>
        </div>
        <div class="board-map">
          <Map/>
        </div>
        <div class="digital_jump">
          <div>
            <InTimeData/>
          </div>
          <div>
            <InTimeOnLine/>
          </div>
        </div>
        
      </div>
      <div class="content-right">
        <div class="store-amount">
          <div class="special-border"></div>
          <div class="content-title-button margin-top-26">
            <p class="font float-left">门店增量</p>
          </div>
          <p class="info">
            总数 : <span class="number"><count-to :startVal='0' :endVal='11120' :duration='3000'></count-to></span>
          </p>
          <StoreAmountTrend/>
        </div>
        <div class="user-amount">
          <div class="special-border"></div>
          <div class="content-title-button margin-top-26">
            <p class="font float-left">用户增量</p>
          </div>
          <p class="info">
              总数 : <span class="number"><count-to :startVal='0' :endVal='53' :duration='3000'></count-to></span>万
            </p>
            <UserAmountTrend/>
        </div>
        <div class="goods-amount">
          <div class="special-border"></div>
          <div class="content-title-button margin-top-26">
            <p class="font float-left">智能设备销量</p>
            <div class="button-wrap float-right">
              <router-link class="common-button padding-lr-30" :to="{ path: 'smartoperate' }">
                详情
              </router-link>
            </div>
          </div>
          
          <p class="info">
            总数 : <span class="number"><count-to :startVal='0' :endVal='116' :duration='3000'></count-to></span>万件
          </p>
          <SmartProductsSalesTrend/>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
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
    padding: 0.2rem 0 0 0.4rem;
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
      width: 21%;
      margin: 0.2rem 0% 0 2%;
      .breadcrumb {
        position: absolute;
        left: 1.8rem;
        top: 0.6rem;
      }
      .industrial-app {
        width: 100%;
        height: 7.5rem;
      }
      .industrial-model {
        margin-top: 0.8rem;
        width: 100%;
        height: 7.5rem;
      }
    }
    .content-center {
      width: 52%;
      margin: 0 1% 0 1%;
      .board-info {
        text-align: center;
        color: $primary-color;
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
      }
      .board-map {
        margin-top: 0.4rem;
        width: 100%;
      }
      .digital_jump {
        width: 100%;
        padding-bottom: 0.4rem;
        overflow: hidden;
        border: 1px solid #f1f1f1;
        border-width: 1px 1px 0 0;
        margin-top: .5rem;
        >div {
          float: left;
          width: 45%;
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
  import countTo from 'vue-count-to'
  // 云裳
  import BrandClothesSalesSituation from '../../components/yunshangComp/BrandClothesSalesSituation.vue'
  import SmartClothesRatio from '../../components/yunshangComp/SmartClothesRatio.vue'
  import Map from '../../components/yunshangComp/Map.vue'
  import StoreAmountTrend from '../../components/yunshangComp/StoreAmountTrend.vue'
  import UserAmountTrend from '../../components/yunshangComp/UserAmountTrend.vue'
  import SmartProductsSalesTrend from '../../components/yunshangComp/SmartProductsSalesTrend.vue'
  import InTimeData from '../../components/yunshangComp/InTimeData.vue'
  import InTimeOnLine from '../../components/yunshangComp/InTimeOnLine.vue'
  
  export default {
    name: 'index',
    components: {
      countTo,
      // 云裳
      SmartClothesRatio,
      BrandClothesSalesSituation,
      Map,
      StoreAmountTrend,
      UserAmountTrend,
      SmartProductsSalesTrend,
      InTimeData,
      InTimeOnLine,
    },
    data () {
      return {}
    }
  }
</script>
