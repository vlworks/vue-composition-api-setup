<script setup>
import TodoCreate from "./todo-create.vue";
import TodoList from "./todo-list.vue";
import UtilsPreloader from "../Utils/utils-preloader.vue";

import useFetchTodos from "./useFetchTodos.js";

const { listTodos, isLoading } = useFetchTodos();
const addTodo = (title) =>
  listTodos.value.push({
    id: Math.random().toString(32).substring(2),
    title,
    isChecked: false,
  });
const checkedTodo = (id) =>
  listTodos.value.map((item) => {
    console.log(id);
    if (item.id === id) {
      item.isChecked = !item.isChecked;
    }
  });
const deleteTodo = (index) => listTodos.value.splice(index, 1);
</script>

<template>
  <div>
    <div class="section"><h3 class="center-align">TODO List</h3></div>
    <div class="section"><todo-create @add="addTodo"></todo-create></div>
    <div class="section">
      <utils-preloader v-if="isLoading"></utils-preloader>
      <todo-list
        v-else
        :list-todos="listTodos"
        @checked="checkedTodo"
        @delete="deleteTodo"
      ></todo-list>
    </div>
    <div class="divider"></div>
    <div class="section"></div>
  </div>
</template>

<style></style>
