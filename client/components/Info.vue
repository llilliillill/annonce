<template>
    <v-contain class="info">
        <section class="content">

            <div class="wrapper">
                <v-img 
                    class="logo" 
                    :src="store.header?.logo"
                />

                <h4 class="title">Наследие</h4>

                <Documents 
                    class="documents" 
                    :documents="1"
                    :rating="rating"
                    :reviews="reviews"
                />

                <button @click="store.noPhone()" class="show-number">
                    {{ store.getPhone }}
                </button>
            </div>

            <div class="links">
                <NuxtLink active-class="active" class="link" to="/products">Товары и услуги</NuxtLink>
                <NuxtLink active-class="active" class="link" to="/agents">Агенты</NuxtLink>
                <NuxtLink active-class="active" class="link" to="/company">О компании</NuxtLink>
            </div>
        </section>
    </v-contain>
</template>

<script lang="ts" setup>
    const store = useMainStore()
    const { data }: any = await useFetch(`/api/reviews/1`)
    const { rating, reviews } = data.value
</script>

<style lang="scss" scoped>
    .info {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #e8e8e8;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 560px;
    }

    .wrapper {
        display: flex;
        justify-content: start;
        flex-direction: column;
    }

    .logo {
        width: 120px;
        height: 120px;
        margin: 0 auto;
    }

    .title {
        font-size: 24px;
        text-align: center;
        padding-top: 22px;
    }

    .show-number {
        background-color: #337566;
        color: white;
        border-radius: 10px;
        padding: 15px;
        width: 236px;
        margin: 0 auto;
    }

    .documents {
        padding: 5px 0 23px 0;
        margin: 0 auto;
    }

    .links {
        display: flex;
        padding: 30px 0;
        justify-content: center;
    }

    .link {
        text-decoration: none;
        margin-left: 5px;
        border: 1px solid #e8e8e8;
        color: rgb(95, 95, 95);
        background-color: #e8e8e8;
        padding: 5px 10px;
        border-radius: 10px;
        white-space: nowrap;
    }

    .active {
        border: 1px solid rgb(95, 95, 95);
    }

    /* Mobile */
    @media (max-width: 550px) {
        .wrapper {
            display: none;
        }

        .links {
            padding: 10px 0;
        }
    }
</style>