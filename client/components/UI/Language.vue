<template>
    <div class="lenguage">
        <v-img v-if="icon" class="flag" :src="rus" />
        <span class="text">{{ lang }}</span>
    </div>
</template>

<script lang="ts" setup>
    import rus from '/assets/img/rus.png'

    defineProps<{
        icon?: string,
        lang: string
    }>()

</script>

<style lang="scss" scoped>
    .lenguage {
        display: flex;
        width: 90px;
    } 

    .flag {
        width: 16px;
        height: 16px;
    }

    .text {
        font-size: 15px;
        cursor: default;
    }
</style>