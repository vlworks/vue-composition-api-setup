<template>
<ul>
  <li v-for="(todo, index) in listTodos" :key="todo.id">
    <todo-item
        :index="index"
        :todo="todo"
        @checked = "(id) => emit('checked', id)"
        @delete = "(index) => emit('delete', index)"
    ></todo-item>
  </li>
</ul>
</template>

<script setup>
  import TodoItem from "./todo-item.vue";

  defineProps({
    listTodos: {
      type: Array,
      required: true,
    }
  })

  const emit = defineEmits(['checked', 'delete'])
</script>

<style scoped>

</style>