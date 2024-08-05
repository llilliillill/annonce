<template>
    <section class="company">
        <div class="info">
            <h4>О компании</h4>
            <span>{{ store.company?.info }}</span>
        </div>

        <div class="time">
            <v-select
                :flat="true"
                variant="solo"
                label="Режим работы"
                :model-value="'Сегодня с 8:00 до 23:00'"
                hide-details
                disabled
            />
        </div>

        <div class="location">
            <div class="address">
                <h4>Местоположение</h4>
                <span class="text-teal-darken-4">
                    {{ store.company?.location }}
                </span>
            </div>

            <iframe 
                class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.5992695479813!2d39.6673290768806!3d47.24398387115884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b88b4115f1ff%3A0xe2b4196775777d60!2z0JLQvtGA0L7QvdC10LbRgdC60LDRjyDRg9C7LiwgNDIsINCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCAzNDQwMzk!5e0!3m2!1sru!2sru!4v1722600972440!5m2!1sru!2sru" 
                width="200" 
                height="132" 
                style="border:0;"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
    const store = useMainStore()
    const { data } = await useFetch('/api/company')
    store.company = data.value
</script>

<style lang="scss" scoped>
    .company {
        max-width: 560px;
        width: 100;
        margin: 0 auto;
        padding: 10px 0;
    }

    .info,
    .time,
    .location {
        margin-bottom: 30px;
    }

    .map {
        margin-left: 20px;
    }

    .location {
        display: flex;
    }

    /* Mobile */
    @media (max-width: 610px) {
        .company {
            margin: 10px auto;
        }

        .location {
            flex-direction: column;
        }

        .address {
            order: 2;
        }

        .map {
            order: 1;
            margin: 0 0 20px 0;
            width: 100%;
            height: 120px;
        }

        .info,
        .time,
        .address {
            padding: 0 10px;
        }
    }
</style>