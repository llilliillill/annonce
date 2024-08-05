<template>
    <Head>
        <Title>Annoncé</Title>
    </Head>
   
    <section>
        <v-app>
            <Header />

            <div class="wrapper">
                <Info />

                <slot />
            </div>

            <Footer />
        </v-app>
    </section>
</template>

<style scoped>
    .wrapper {
        margin-top: 63px;
    }
</style>