<template>
<ul>
  <li v-for="(todo, index) in listTodos" :key="todo.id">
    <label>
      <input type="checkbox">
      {{todo.title}}
    </label>
    <button>x</button>
  </li>
</ul>
</template>

<script setup>
  defineProps({
    listTodos: {
      type: Array,
      required: true,
    }
  })
</script>

<style scoped>

</style>