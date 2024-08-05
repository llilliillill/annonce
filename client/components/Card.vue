<template>
    <v-card class="card" elevation="0">
        <v-img
            height="322px"
            :src="product.image"
            cover
        >
            <Toolbar 
                :views="product.views"
                :data="product.data"
            />
        </v-img>

        <v-card-title>
            {{ product.price }} ₽
        </v-card-title>

        <v-card-title>
            {{ product.description }}
        </v-card-title>

        <v-card-actions>
            <CardActions 
                :product_id="product.id"
                :status="product.status" 
            />
        </v-card-actions>
    </v-card>
</template>

<script lang="ts" setup>
    defineProps<{
        product: any
    }>()
</script>

<style lang="scss" scoped>
    .card {
        width: 415px;
        height: 475px;
        margin: 5px;
        padding: 10px;
    }

    .v-card-title {
        padding: 5px 10px;
        font-size: 18px;
    }
</style>