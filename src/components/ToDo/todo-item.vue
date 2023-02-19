<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
  index: {
    type: String && Number,
    required: true,
  },
});

const emit = defineEmits(["checked", "delete"]);
</script>

<template>
  <div>
    <label :class="{ done: todo.isChecked }">
      <input type="checkbox" @change="emit('checked', todo.id)" />
      {{ todo.title }}
    </label>
    <button @click="emit('delete')">x</button>
  </div>
</template>

<style scoped>
label.done {
  text-decoration: line-through;
}
</style>
