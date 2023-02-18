<script setup>
import TodoCreate from "./todo-create.vue";
import TodoList from "./todo-list.vue";

import useFetchTodos from "./useFetchTodos.js";

const {listTodos} = useFetchTodos();
const addTodo = (title) => listTodos.value.push(
    {id: Math.random().toString(32).substring(2), title, isChecked: false}
)
</script>

<template>
  <div>
    <todo-create @add="addTodo"></todo-create>
    <todo-list :list-todos="listTodos"></todo-list>
  </div>
</template>

<style>

</style>