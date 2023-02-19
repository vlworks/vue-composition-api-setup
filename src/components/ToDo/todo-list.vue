<template>
  <ul class="todo-list">
    <li
      v-for="(todo, index) in listTodos"
      :key="todo.id"
      class="todo-list-item"
    >
      <todo-item
        :index="index"
        :todo="todo"
        @checked="(id) => emit('checked', id)"
        @delete="emit('delete', index)"
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
  },
});

const emit = defineEmits(["checked", "delete"]);
</script>

<style scoped>
.todo-list-item {
  margin: 10px 0;
}
</style>
