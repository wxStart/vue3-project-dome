<template>
  <div>我是全局的loading组件: {{ title }}</div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '我是默认的文字'
  }
})
</script>

<style module></style>
