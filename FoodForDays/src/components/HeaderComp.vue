<template>
  <div class="header">
    <ul class="header__nav">
      <router-link
        v-for="(routerLink, index) in routerLinks"
        :key="index"
        :to="{ name: routerLink.name }"
        ><li>{{ routerLink.slot }}</li></router-link
      >
    </ul>
  </div>
</template>

<script setup>
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

  &__nav {
    list-style: none;
    display: flex;
  }

  &__nav > a {
    padding: 1rem;
    color: white;
  }

  .router-link-active {
    text-decoration: underline;
    color: rgb(86, 254, 86);
  }
}
</style>
