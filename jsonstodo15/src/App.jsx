import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Loader = () => {
  return <div>Loading...</div>; // Customize this loader as needed
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching Todos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/todos', { title: newTodo, completed: false });
      setTodos(prevTodos => [...prevTodos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding Todo:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (id, title) => {
    try {
      setLoading(true);
      const updatedTodo = { title, completed: false };
      const response = await axios.put(`http://localhost:3001/todos/${id}`, updatedTodo);
      setTodos(prevTodos => prevTodos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (error) {
      console.error('Error updating Todo:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3001/todos/${id}`);
      setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting Todo:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add</button>
      {loading ? (
        <Loader />
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <input
              value={todo.title}
              onBlur={(e) => updateTodo(todo.id, e.target.value)}
            />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
