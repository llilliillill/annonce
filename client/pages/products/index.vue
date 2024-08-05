<template>
    <v-contain>
        <v-select
            :flat="true"
            :model-value="store.selectValue"
            :items="store.selectItems"
            variant="solo-filled"
            hide-details
        />
    </v-contain>

    <v-contain class="products">
        <Card
            v-for="product in store.products"
            :key="product.id"
            :product="product"
        />
    </v-contain>
</template>

<script lang="ts" setup>
    const store = useMainStore()
    const { data }: any = await useFetch('/api/products')
    store.products = data.value
</script>

<style lang="scss" scoped>
    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 10px 0 100px 0;
    }

    .v-select {
        padding: 0;
        width: 438px;
        height: 56px;
        margin: 20px auto 0 auto;
    }

    /* Mobile */
    @media (max-width: 840px) {
        .wrapper {
            display: none;
        }

        .links {
            padding: 5px 0;
        }

        .v-select {
            width: 370px;
            font-size: 16px;
        }
    }
</style>