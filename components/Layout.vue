<template>
  <div class="page">
    <header class="page-header">
      <h1>M.X</h1>
    </header>
    <main class="page-main">
      <Content />
    </main>
  </div>
</template>

<script lang="ts" setup>
// import { ref, computed, watch, defineAsyncComponent } from 'vue'
// import { useRoute, useData } from 'vitepress'
</script>

<style>
.page-header {
  height: 64px;
  border-bottom: 1px solid rgb(222, 224, 227);
  display: flex;
  align-items: center;
  padding: 0 40px;
}

.page-main {
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 24px 10%;
  padding: 30px 40px 40px;
}

@media screen and (max-width: 480px) {
  .page-main {
    padding: 16px;
    margin: 20px;
  }
}
</style>