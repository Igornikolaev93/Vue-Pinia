<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useUserStore } from './stores/user'



const user = useUserStore()
const router = useRouter()

function onClick() {
  user.isAuthorized = !user.isAuthorized

  //if (!user.isAuthorized) {
    //router.push('/')
  //}
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/book.png" width="150" height="150" />

    <div class="wrapper">
      <nav>
        
        <RouterLink v-if="user.isAuthorized" to="/Products"> Мои Книги</RouterLink>
      </nav>

      <div style="margin-top: 48px; margin-bottom: 24px;">
      <button @click="onClick">
        {{ user.isAuthorized ? 'Выйти' : 'Авторизоваться' }}
      </button>
  </div>
 
  </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  font-size: 20px;
  font-style: italic;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
   
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    /*font-size: 1rem;*/

    padding: 1rem 0;
    margin-top: 1rem;
  }
}


</style>
