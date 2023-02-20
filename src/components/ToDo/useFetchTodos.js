import { onMounted, ref } from "vue";

const defaultOptions = {
  limit: 7,
};
export default function useFetchTodos(userOptions = {}) {
  const options = { ...defaultOptions, ...userOptions };
  const isLoading = ref(false);
  const listTodos = ref([]);
  const fetchTodos = () => {
    isLoading.value = true;
    fetch(
      `https://jsonplaceholder.typicode.com/todos/?_limit=${options.limit}&_delay=4000`
    )
      .then((response) => response.json())
      .then((json) => {
        listTodos.value = json;
        isLoading.value = false;
      });
  };

  onMounted(fetchTodos);

  return {
    listTodos,
    isLoading,
  };
}
