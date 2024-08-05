<template>
    <div v-show="status === 0" class="wrapper">
        <span class="text">
            Увеличьте количество просмотров
        </span>

        <button 
            class="button" 
            @click="store.promote(product_id)"
        >
            Продвигать
        </button>
    </div>

    <div v-show="status === 1" class="wrapper">
        <span class="text promotion">
            Объявление продвигается
        </span>
    </div>

    <div v-show="status === 2" class="wrapper">
        <span class="text error">
            Объявление скрыто
        </span>
    </div>
</template>

<script lang="ts" setup>
    const store = useMainStore()

    defineProps<{
        product_id: number,
        status: number
    }>()
</script>

<style lang="scss" scoped>
    .wrapper {
        margin-top: 10px;
        padding: 10px 0;
        border-top: 1px solid grey;
        display: flex;
        align-items: center;
        flex: 1;
    }

    .text {
        font-size: 14px;
        flex: 1;
    }

    .promotion,
    .error {
        display: flex;
        justify-content: center;
    }

    .promotion {
        color: #337566;
    }

    .error {
        color: red;
    }

    .button {
        background-color: #337566;
        color: white;
        font-size: 18px;
        border-radius: 10px;
        padding: 5px 10px;
    }
</style>