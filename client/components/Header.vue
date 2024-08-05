<template>
    <v-app-bar color="#fff7eb" height="64" elevation="0">
        <div class="prepend">

            <!-- Mobile --> 
            <v-icon 
                size="35" 
                icon="mdi-menu" 
                class="menu-icon" 
            />

            <NuxtLink to="/" class="title">
                {{ store.header?.title }}
            </NuxtLink>

            <MenuButton class="category">
                <v-icon icon="mdi-view-grid-outline" size="24" />
                <b>Все категории</b>
            </MenuButton>
        </div>

        <template v-slot:append>
            <v-contain class="menu-buttons">
                <div class="line">
                    <v-chip variant="text">
                        <v-icon icon="mdi-map-marker" class="px-3" />
                        <b>{{ store.header?.city }}</b>
                    </v-chip>
                </div>

                <v-chip variant="text" color="#337566">
                    <b>Разместить объявление</b>
                </v-chip>

                <NuxtLink to="/auth" class="text-decoration-none">
                    <MenuButton class="px-1">
                        <v-icon icon="mdi-menu" size="25" color="black" />
                        <Avatar :src="store.user?.avatar" />
                    </MenuButton>
                </NuxtLink>
            </v-contain>
   
            <!-- Mobile -->
            <NuxtLink to="/auth" class="text-decoration-none">
                <v-icon 
                    size="35" 
                    color="black"
                    icon="mdi-shopping-outline" 
                    class="shop-icon" 
                />
            </NuxtLink>
        </template>
    </v-app-bar>
</template>

<script lang="ts" setup>
    const store = useMainStore()
    const { data }: any = await useFetch('/api/header')
    store.header = data.value
</script>

<style lang="scss" scoped>
    .prepend {
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .title {
        margin: 0 40px;
        font-size: 28px;
        text-align: center;
        text-decoration: none;
        color: black;
        font-family: 'Noto Serif', sans-serif;
        font-weight: 600;
    }

    .menu-icon,
    .shop-icon {
        display: none;
        margin: 0 10px;
    }

    .category,
    .menu-buttons {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    .category {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        padding: 0 12px;
        cursor: pointer;
    }

    .line {
        border-right: 1px solid rgb(182, 182, 182);
    }

    /* Mobile */
    @media (max-width: 840px) {
        .prepend {
            flex: 1;
        }
        
        .title {
            margin: 0 auto;
        }

        .menu-icon,
        .shop-icon {
            display: block;
        }

        .category,
        .menu-buttons {
            display: none;
        }
    }
</style>