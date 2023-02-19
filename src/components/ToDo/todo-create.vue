<script setup>
import { ref } from "vue";
const title = ref("");

const emit = defineEmits(["add"]);
function submitForm() {
  emit("add", title.value);
  title.value = "";
}
</script>

<template>
  <div class="todo-create">
    <form class="todo-create-form" @submit.prevent="submitForm">
      <label>
        <input
          v-model="title"
          type="text"
          name="todo"
          placeholder="Add todo"
          autocomplete="off"
          required
        />
      </label>
      <input
        type="submit"
        value="+"
        class="btn-floating btn-small waves-effect waves-light green"
        title="Add todo"
      />
    </form>
  </div>
</template>

<style scoped>
.todo-create-form {
  display: flex;
  align-items: center;
}

.todo-create-form label {
  width: 100%;
}
</style>
