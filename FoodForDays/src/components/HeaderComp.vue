<template>
  <div class="header">
    <ul class="header__nav">
      <li>
        <nav><router-link :to="{ name: 'home' }">Home</router-link></nav>
      </li>
      <li>
        <nav>
          <nav><router-link :to="{ name: 'meals' }">Meals</router-link></nav>
        </nav>
      </li>
      <li>
        <nav>
          <nav><router-link :to="{ name: 'settings' }">Settings</router-link></nav>
        </nav>
      </li>
      <li>
        <nav>
          <nav><router-link :to="{ name: 'history' }">History</router-link></nav>
        </nav>
      </li>
      <li>
        <nav>
          <nav><router-link :to="{ name: 'about' }">About</router-link></nav>
        </nav>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--clr-dark-grey);
  color: var(--clr-white);
  display: flex;

  &__nav {
    list-style: none;
    display: flex;
  }

  &__nav > li {
    padding: 1rem;
  }
}
</style>
