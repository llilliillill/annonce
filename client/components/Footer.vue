<template>
    <v-footer color="#e8e8e8">
        <div class="wrapper">
            <span class="title">© {{ store.header?.title }} 2023</span>

            <div class="all-links">
                <NuxtLink class="link" to="/">Документы</NuxtLink>
                <NuxtLink class="link" to="/company">О компании</NuxtLink>

                <div class="other-links">
                    <NuxtLink class="link" to="/">Продавцам</NuxtLink>
                    <NuxtLink class="link" to="/">Покупателям</NuxtLink>
                    <NuxtLink class="link" to="/">Разместить объявление</NuxtLink>
                    <Language 
                        icon="rus"
                        lang="Русский"
                    />
                </div>
            </div>
        </div>
    </v-footer>
</template>

<script lang="ts" setup>
    const store = useMainStore()
</script>

<style lang="scss" scoped>
    .title {
        font-weight: bold;
        margin-bottom: 20px;
        cursor: default;
    }
    
    .wrapper {
        display: flex;
        margin: 20px 0 30px 20px;
    }

    .link {
        text-decoration: none;
        color: rgb(53, 53, 53);
        font-size: 15px;
        margin-left: 10px;
        margin-bottom: 20px;
    }

    .all-links {
        display: flex;
        flex-direction: row;
    }

    .other-links {
        display: none;
    }

    /* Mobile */
    @media (max-width: 840px) {

        .wrapper {
            flex-direction: column;
        }

        .all-links {
            flex-direction: column;
        }

        .other-links {
            display: flex;
            flex-direction: column;
        }
    }
</style>