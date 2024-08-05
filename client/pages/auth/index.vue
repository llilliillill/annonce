<template>
    <section class="auth">
        <v-sheet class="mx-auto" width="400">
            <v-form 
                validate-on="submit lazy" 
                @submit.prevent="onSubmit"
            >
                <span class="error">
                    {{ errors.username }}
                </span>

                <v-text-field
                    :flat="true"
                    v-model="username"
                    variant="solo-filled"
                    label="Пароль"
                    hide-details
                />

                <span class="error">
                    {{ errors.password }}
                </span>

                <v-text-field
                    :flat="true"
                    v-model="password"
                    variant="solo-filled"
                    label="Пароль"
                    hide-details
                />
        
                <v-btn
                    :loading="loading"
                    class="mt-2"
                    text="Submit"
                    type="submit"
                    block
                />
            </v-form>
        </v-sheet>
    </section>
</template>

<script lang="ts" setup>
    const store = useMainStore()
    const router = useRouter()

    definePageMeta({
        layout: 'empty'
    })

    const errors = reactive({
        username: '',
        password: ''
    })

    const loading = ref<boolean>(false)
    const username = ref<string>('')
    const password = ref<string>('')

    const onSubmit = async () => {
        errors.username = username.value !== '' ? '' : 'Введите имя пользователя'
        errors.password = password.value !== '' ? '' : 'Введите пароль'

        if (username.value !== '' && password.value !== '') {
            loading.value = true

            const user = await store.login(
                username.value,
                password.value
            )

            if (user) {
                username.value = ''
                password.value = ''
                loading.value = false
                router.push('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .auth {
        min-height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error {
        color: red;
        font-weight: bold;
        margin-top: 5px;
    }

    .v-text-field {
        padding: 0;
    }
</style>