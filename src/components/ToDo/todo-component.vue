<script setup>
import TodoCreate from "./todo-create.vue";
import TodoList from "./todo-list.vue";

import useFetchTodos from "./useFetchTodos.js";

const {listTodos} = useFetchTodos();
const addTodo = (title) => listTodos.value.push(
    {id: Math.random().toString(32).substring(2), title, isChecked: false}
)
const checkedTodo = (id) => listTodos.value.map(item => {
  console.log(id)
  if (item.id === id) {
    item.isChecked = !item.isChecked
  }
} )

const deleteTodo = (index) => listTodos.value.splice(index, 1)

</script>

<template>
  <div>
    <todo-create @add="addTodo"></todo-create>
    <todo-list :list-todos="listTodos" @checked="checkedTodo" @delete="deleteTodo"></todo-list>
  </div>
</template>

<style>

</style>