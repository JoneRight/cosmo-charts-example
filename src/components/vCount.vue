<template>
  <span class="vCount" :ref="refVal"></span>
</template>

<script>
    export default {
      name: "vCount",
      props: ['refVal', 'endVal'],
      data() {
        return {
          interVal: ''
        }
      },
      mounted() {
        this.$nextTick(() => {
          var numRun2 = $(this.$refs[this.refVal]).numberAnimate({
            num: this.endVal.toString(),
            speed: 2000,
            symbol: ","
          });
          if (this.endVal === 0) {
            this.$store.dispatch('equipment/setVal');
            setTimeout(() => {
              numRun2.resetData(this.endVal);
            })
          }
          this.interVal = setInterval(() => {
            var temp = Math.round(Math.random() * 5);
            temp = Math.round(Math.random()) ? temp : -temp;
            this.$store.commit('equipment/setVal', {
              name: this.refVal,
              value: this.endVal + temp
            });
            numRun2.resetData(this.endVal);
          }, 4000);
        });
      },
      destroyed() {
        clearInterval(this.interVal)
      }
    }
</script>

<style lang="scss">
  .vCount {
    height: .5rem;
    display: inline-block;
    .mt-number-animate {
      float: left;
      /*font-family: '微软雅黑';*/
      line-height: .4rem;
      height: .4rem;
      /*设置数字显示高度*/
      font-size: .36rem !important;
      /*设置数字大小*/
      overflow: hidden;
      display: inline-block;
      position: relative;
    }

    .mt-number-animate .mt-number-animate-dot {
      width: .20rem;
      /*设置分割符宽度*/
      line-height: .4rem;
      float: left;
      text-align: center;
    }

    .mt-number-animate .mt-number-animate-dom {
      width: .24rem;
      /*设置单个数字宽度*/
      text-align: center;
      float: left;
      position: relative;
      top: 0;
    }

    .mt-number-animate .mt-number-animate-dom .mt-number-animate-span {
      width: 100%;
      float: left;
    }
  }
</style>
