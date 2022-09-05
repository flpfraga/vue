<template>
  <TheHeader v-bind:useRoute="router.path"/>
  <div class="routes-page">
    <router-view>

    </router-view>
  </div>
  <TheFooter />


</template>

<script>

import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
import { useRoute } from 'vue-router';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      routerName: ""
    }
  },
  setup() {
    const router = useRoute()

    return {
      router,
    }

  },
  updated() {
    this.routerName = this.router.path
  }
}
</script>

<style>
#app {
  text-decoration: none;
  margin: 0;
  padding: 0;
  border: 0;

}

button {
  cursor: pointer;
}

.routes-page {
  margin-top: 120px;
}
</style>
