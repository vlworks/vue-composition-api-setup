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
  <div>
    <form @submit.prevent="submitForm">
      <label>
        <input v-model="title" type="text" name="todo" placeholder="add todo" />
      </label>
      <input type="submit" value="+" />
    </form>
  </div>
</template>

<style scoped></style>
