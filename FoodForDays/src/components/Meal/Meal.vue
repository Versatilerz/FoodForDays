<template>
  <Card>
    <h1>{{ title }}</h1>
    <img src="https://media.s-bol.com/xjllvKKL9JAE/nr09XE/550x550.jpg" />
  </Card>
</template>

<script setup lang="ts">
interface Meal {
  title: string;
  img?: string;
  description?: string;
}

const props = defineProps<Meal>();
</script>
