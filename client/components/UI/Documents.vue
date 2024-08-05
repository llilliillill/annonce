<template>
    <div class="documents">
        <div class="point" v-if="documents">
            <v-icon icon="mdi-check-decagram" size="17px" color="#337566" />
            <span class="text text-big">Документы проверены</span>
            <span class="text text-small">Проверен</span>
        </div>

        <v-icon v-if="documents && rating" icon="mdi-circle-small" />

        <div class="start" v-if="rating">
            <v-icon icon="mdi-star" size="18px" color="#337566" />
            <span class="text">{{ rating }}</span>
        </div>

        <div class="point" v-if="reviews">
            <v-icon icon="mdi-circle-small" />
            <span class="text">{{ reviews }} отзывов</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        documents: number,
        rating: number,
        reviews: number
    }>()
</script>

<style lang="scss" scoped>
    .point,
    .documents {
        display: flex;
        align-items: center;
        font-family: 'Inter', serif;
        cursor: default;
    }

    .text {
        font-size: 15px;
    }

    .text-big {
        display: block;
    }

    .text-small {
        display: none;
    }

    /* Mobile */
    @media (max-width: 550px) {
        .text-big {
            display: none;
        }

        .text-small {
            display: block;
        }
    }
</style>