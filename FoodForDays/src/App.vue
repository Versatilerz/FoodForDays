<template>
  <HeaderComp />
  <Grid :template="gridClass" :gap="2">
    <RouterView />
  </Grid>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import HeaderComp from "./components/Header/HeaderComp.vue";
import Grid from "./components/shared/Grid.vue";
import { computed } from "vue";

const route = useRoute();
const gridClass = computed(() => {
  return typeof route.name === "string" ? route.name : undefined;
});
console.log(gridClass);
</script>
