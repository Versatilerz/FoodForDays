<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background-color: var(--clr-white);
  border: var(--border-primary);
  box-shadow: var(--box-shadow);
  border-radius: 12px;
  padding: 1rem;
  display: inline-block;
}
</style>
