<template>
    <div class="menu-button">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    .menu-button {
        background: #e8e8e8;
        border-radius: 30px;
        height: 48px;
        display: flex;
        align-items: center;
        font-size: 15px;
    }
</style>