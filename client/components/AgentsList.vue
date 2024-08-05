<template>
    <ul class="agent-list">
        <AgentsItem 
            v-for="user in users"
            :key="user.id"
            :user="user" 
        />
    </ul>
</template>

<script lang="ts" setup>
    defineProps<{
        users: object[]
    }>()
</script>

<style lang="scss" scoped>
    .agent-list {
        max-width: 600px;
        list-style: none;
    }
</style>