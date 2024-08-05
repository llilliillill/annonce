<template>
    <section class="wrapper">
        <div v-if="store.user" class="user">
            <span class="username">
                {{ store.user.username }}
            </span>

            <v-btn 
                variant="outlined" 
                @click="store.logout()"
            >
                выход
            </v-btn>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const store = useMainStore()
</script>

<style lang="scss" scoped>
    .wrapper {
        height: 600px;
    }

    .user {
        width: 400px;
        margin: 20px auto;
        border-radius: 5px;
        border: 2px solid grey;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .username {
        font-weight: bold;
        padding: 10px;
    }
</style>