<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const testEnv = import.meta.env.VITE_TEST
const testEnv2 = import.meta.env.TEST
const testEnv3 = import.meta.env.NAME
const testEnv4 = import.meta.env.ALL
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
      环境变量：{{ testEnv }} 这是测试环境
      VITE_TEST: {{ testEnv }} |
      TEST: {{ testEnv2 }} |
      NAME: {{ testEnv3 }}
      ALL: {{ testEnv4 }}
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
