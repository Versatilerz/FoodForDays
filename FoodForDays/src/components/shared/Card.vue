<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background-color: var(--clr-white);
  border: var(--border-primary);
  border-radius: 10%;
  padding: 1rem;
  display: inline-block;
}
</style>
