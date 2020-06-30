<template>
    <div>
        <vehicle></vehicle>
        <carmap></carmap>
        <goodcomment></goodcomment>
    </div>
</template>

<script>
    import vehicle from '@/components/vehicle/vehicle.vue'
    import carmap from '@/components/vehicle/car-map.vue'
    import goodcomment from '@/components/vehicle/good-comment.vue'
    export default {
        components: {
            vehicle,
            carmap,
            goodcomment
        },
        data ()
        {
            return {}
        },
        mounted(){

        },
        methods: {},
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' type="text/scss" scoped>

</style>
