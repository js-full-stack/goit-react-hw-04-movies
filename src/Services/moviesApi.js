import axios from 'axios';
const API_KEY = 'a97e0a0a9b37b258134862ba760da91a';
axios.defaults.baseURL = 'https://api.themoviedb.org';
const URL = `/3/trending/movie/day?api_key=${API_KEY}`;

// axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

const fetchPopularMovies = () => {
  return axios.get(URL).then(res => res.data.results);
};

export default { fetchPopularMovies };

// const fetchTodos = () => {
//     return axios.get('/todos').then(response => response.data);
//   };

//   const addTodo = todo => {
//     return axios.post('/todos', todo).then(response => response.data);
//   };

//   const deleteTodo = todoId => {
//     return axios.delete(`/todos/${todoId}`);
//   };

//   const updateTodo = (todoId, update) => {
//     return axios
//       .patch(`http://localhost:3000/todos/${todoId}`, update)
//       .then(({ data }) => data);
//   };

//   export default { fetchTodos, addTodo, deleteTodo, updateTodo };
