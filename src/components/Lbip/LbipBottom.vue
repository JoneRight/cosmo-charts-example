<template>
  <div class="LbipBottom">
    
      <WebSecurity />
      
  </div> 
</template>

<script>
  import WebSecurity from './LbipWebSecuritys.vue'
  export default{
    name:'LbipBottom',
    data(){
      return {}
    },
    components: {
      WebSecurity
    }
  } 
</script>

<style scoped>
.LbipBottom{
  width: 100%;
  margin: 0 auto;
}

</style>