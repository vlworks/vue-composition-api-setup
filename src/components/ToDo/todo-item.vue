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
  <div class="todo-item">
    <label :class="{ done: todo.isChecked }">
      <input type="checkbox" @change="emit('checked', todo.id)" />
      <span>{{ todo.title }}</span>
    </label>
    <button
      class="todo-item__delete btn-floating btn-small waves-effect waves-light red"
      title="Delete"
      @click="emit('delete')"
    >
      <i class="tiny material-icons">delete_forever</i>
    </button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
}
.todo-item__delete {
  margin-left: auto;
}

label.done > span {
  text-decoration: line-through;
}
</style>
