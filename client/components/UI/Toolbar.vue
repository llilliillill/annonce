<template>
    <div v-if="views && data" class="block-views">
        <div class="views">
            <v-icon icon="mdi-eye" size="23" class="px-3" />
            <span class="text">{{ views }}</span>
        </div>
        <div class="views">
            <v-icon icon="mdi-calendar-blank" size="23" class="px-3" />
            <span class="text">{{ data }} дня</span>
        </div>
        <div class="actions">
            <button class="button">
                Действия
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        views: number,
        data: number
    }>()
</script>

<style lang="scss" scoped>
    .block-views {
        width: 100%;
        display: flex;
        padding: 8px 0;
        position: absolute;
        margin: 0;
    }

    .views {
        background-color: rgba(0, 0, 0, 0.486);
        border-radius: 15px;
        margin-right: 4px;
        padding: 7px 6px;
        display: flex;
        align-items: center;
        color: white;
        cursor: pointer;
    }

    .button {
        text-decoration: none;
        border: 1px solid #b4b4b4;
        background-color: #e8e8e8;
        padding: 5px 10px;
        border-radius: 10px;
        margin-right: 5px;
    }

    .text {
        font-size: 13px;
        margin: 0 8px;
    }

    .actions {
        flex: 1;
        display: flex;
        justify-content: end;
        display: none;
    }

    /* Mobile */
    @media (max-width: 840px) {
        .actions {
            display: flex;
        }
    }
</style>