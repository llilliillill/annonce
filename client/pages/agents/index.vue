<template>
    <section v-if="store.user" class="agents">
        <AgentsList
            :users="store.users"
        />
    </section>

    <section class="agents" v-else>
        <span class="error">
            Вы не авторизованны!
        </span>
    </section>
</template>

<script lang="ts" setup>
    const store = useMainStore()
    const { data }: any = await useFetch('/api/users')
    store.users = data.value
</script>

<style lang="scss" scoped>
    .agents {
        display: flex;
        justify-content: center;
        margin: 10px 0;
        min-height: 600px;
    }

    .error {
        color: red;
        font-weight: bold;
        font-size: 16px;
        padding: 10px;
    }
</style>