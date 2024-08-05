<template>
  <section v-if="store.isLoadingApp">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </section>

  <section v-else>
    <Loader />
  </section>
</template>

<script latg="ts" setup>
  const store = useMainStore()

  onMounted(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
    store.isLoadingApp = true
  })
</script>