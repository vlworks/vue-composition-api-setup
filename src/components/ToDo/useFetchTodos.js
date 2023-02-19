import { onMounted, ref } from "vue";

const defaultOptions = {
  limit: 7,
};
export default function useFetchTodos(userOptions = {}) {
  const options = { ...defaultOptions, ...userOptions };
  const listTodos = ref([]);
  const fetchTodos = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${options.limit}`)
      .then((response) => response.json())
      .then((json) => (listTodos.value = json));
  };

  onMounted(fetchTodos);

  return {
    listTodos,
  };
}
