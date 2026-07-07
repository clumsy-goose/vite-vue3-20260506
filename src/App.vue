<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <nav>
    <a href="/helloworld-cloud">Cloud 函数</a>
    <a href="/helloworld-edge">Edge 函数</a>
  </nav>
  <HelloWorld msg="这是测试环境" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
nav {
  margin: 1em 0;
}
nav a {
  margin-right: 1em;
  color: #42b883;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
