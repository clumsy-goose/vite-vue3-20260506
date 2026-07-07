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
const envScope = import.meta.env.ENVSCOPE
const branch = import.meta.env.BRANCH
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p class="hint">Edit <code>components/HelloWorld.vue</code> to test HMR</p>

    <h3>环境变量</h3>
    <div class="env-list">
      <div class="env-item">
        <span class="env-key">VITE_TEST</span>
        <span class="env-val">{{ testEnv || '未设置' }}</span>
      </div>
      <div class="env-item">
        <span class="env-key">TEST</span>
        <span class="env-val">{{ testEnv2 || '未设置' }}</span>
      </div>
      <div class="env-item">
        <span class="env-key">NAME</span>
        <span class="env-val">{{ testEnv3 || '未设置' }}</span>
      </div>
      <div class="env-item">
        <span class="env-key">ALL</span>
        <span class="env-val">{{ testEnv4 || '未设置' }}</span>
      </div>
      <div class="env-item">
        <span class="env-key">当前环境为：</span>
        <span class="env-val">{{ envScope || '未设置' }}</span>
      </div>
      <div class="env-item">
        <span class="env-key">所属分支为：</span>
        <span class="env-val">{{ branch || '未设置' }}</span>
      </div>
    </div>
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
.hint {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1em;
}
h3 {
  font-size: 1rem;
  margin: 1em 0 0.5em;
  color: #333;
}
.env-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75em;
}
.env-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em 0.875em;
  background: #f5f5f5;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: background 0.2s;
}
.env-item:hover {
  background: #e8e8e8;
}
.env-key {
  font-weight: 600;
  color: #555;
  margin-right: 0.75em;
}
.env-val {
  color: #2c5aa0;
  font-family: monospace;
}
.env-val:empty::before {
  content: '未设置';
  color: #999;
}
</style>
