<template>
    <li class="user">
        <img 
            class="avatar" 
            :cover="true" 
            :src="user.avatar" 
            alt="Avatar" 
        />

        <div class="title">
            <span class="fullname">
                {{ user.fullname }}
            </span>

            <Documents 
                :documents="user.documents"
                :rating="rating"
                :reviews="reviews"
            />
        </div>

        <div class="text">
            {{ user.description }}
        </div>
    </li>
</template>

<script lang="ts" setup>
    const props = defineProps<{ user: any }>()
    const { data }: any = await useFetch(`/api/reviews/${ props.user.id }`)
    const { rating, reviews } = data.value
</script>

<style lang="scss" scoped>
    .user {
        background-color: #e8e8e8;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 10px;
        min-height: 160px;
    }

    .avatar {
        width: 140px;
        height: 140px;
        border-radius: 20px;
        position: absolute;
    }

    .title,
    .text {
        padding: 5px;
        margin-left: 145px;
    }

    .fullname {
        font-size: 24px;
        font-weight: bold;
    }

    /* Mobile */
    @media (max-width: 840px) {
        .user {
            display: flex;
            flex-wrap: wrap;
            align-items: start;
        }

        .avatar {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            position: static;
        }

        .title,
        .text {
            margin-left: 0;
        }

        .fullname {
            font-size: 16px;
        }
    }
</style>