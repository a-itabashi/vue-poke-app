<script setup lang="ts">
// const props = defineProps(['name', 'id', 'image'])
const props = defineProps({
  name: {
    type: String,
    required: false,
    default: '',
  },
  id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<template>
  <v-card class="pt-2 mx-2 mt-4" min-width="150" :to="{ name: 'detail', params: { id: props.id } }">
    <v-card-subtitle class="text-subtitle-2 font-weight-medium">No.{{ props.id }}</v-card-subtitle>
    <v-card-title class="text-subtitle-1 font-weight-bold">{{ props.name }}</v-card-title>
    <v-img class="mx-auto mt-1 mb-4" width="130px" :src="props.image"></v-img>
  </v-card>
</template>

<style scoped>
.v-card-subtitle {
  color: black !important;
  opacity: 1;
}
</style>
