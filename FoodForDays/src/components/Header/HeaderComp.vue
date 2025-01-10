<template>
  <div class="header">
    <h2>MealsForDays</h2>
    <ul class="header__nav">
      <router-link
        v-for="(routerLink, index) in routerLinks"
        :key="index"
        :to="{ name: routerLink.name }">
        <li>{{ routerLink.slot }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
const routerLinks = [
  {
    name: "home",
    slot: "Home",
  },
  {
    name: "meals",
    slot: "Meals",
  },
  {
    name: "settings",
    slot: "Settings",
  },
  {
    name: "history",
    slot: "History",
  },
  {
    name: "about",
    slot: "About",
  },
];
</script>

<style scoped>
.header {
  background-color: var(--clr-dark-grey);
  color: var(--clr-white);
  display: flex;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
  margin-bottom: 1rem;

  &__nav {
    list-style: none;
    display: flex;
  }

  &__nav > a {
    color: white;
    margin-left: 1rem;
  }

  .router-link-active {
    text-decoration: underline;
    color: rgb(86, 254, 86);
  }
}
</style>
