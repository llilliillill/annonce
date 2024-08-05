<template>
    <v-avatar v-if="src" size="40px">
        <v-img
            :src="src"
            alt="Avatar"
        />
    </v-avatar>

    <v-avatar 
        v-else 
        color="info" 
        size="40px"
    >
      <v-icon icon="mdi-account-circle" />
    </v-avatar>
</template>

<script lang="ts" setup>
    defineProps<{
        src?: string
    }>()
</script>