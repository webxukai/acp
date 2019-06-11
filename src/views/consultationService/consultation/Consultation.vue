<template>
    <ConsultationConsultation />
</template>

<script>
    // @ is an alias to /src
    import ConsultationConsultation from './components/ConsultationConsultation.vue'

    export default {
        name: 'consultation',
        components: {
            ConsultationConsultation
        },
        data() {
            return {
                name: "",
                psw: ""
            };
        },
    }
</script>
<style lang="stylus" scoped>

</style>