<template>
  <ul class="todo-list">
    <p v-if="listTodos.length === 0" class="flow-text center-align">
      Список задач пуст. Добавьте новую.
    </p>
    <li
      v-for="(todo, index) in listTodos"
      v-else
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
