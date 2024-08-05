<template>
    <Head>
        <Title>Авторизация</Title>
    </Head>

    <section>
        <v-app>
            <Header />

            <div class="wrapper">
                <slot />
            </div>

            <Footer />
        </v-app>
    </section>
</template>

<style lang="scss" scoped>
    .wrapper {
        margin-top: 64px;
    }
</style>