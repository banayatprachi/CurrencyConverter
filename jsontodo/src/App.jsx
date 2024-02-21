//npx json-server --watch src/db.json -p 3001


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodoId, setEditTodoId] = useState('');
  const [editedTodo, setEditedTodo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);
  

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('http://localhost:3001/todos')
        .then(response => response.json())
        .then(data => {
          setTodos(data);
          setLoading(false); 
        })
        .catch(error => {
          console.error('Error fetching todos:', error);
          setLoading(false); 
        });
    }, []);
  

  const fetchTodos = () => {
    axios.get('http://localhost:3001/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      axios.post('http://localhost:3001/todos', { title: newTodo, completed: false })
        .then(response => {
          setNewTodo('');
          fetchTodos(); 
        })
        .catch(error => console.error('Error adding todo:', error));
    }
  };

  const updateTodo = (id, todo) => {
    axios.put(`http://localhost:3001/todos/${id}`, { ...todo, completed: !todo.completed })
      .then(response => {
        fetchTodos();
      })
      .catch(error => console.error('Error updating todo:', error));
  };
  
  

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(response => fetchTodos()) 
      .catch(error => console.error('Error deleting todo:', error));
  };

  const startEdit = (id, title) => {
    setEditTodoId(id);
    setEditedTodo(title);
  };

  const cancelEdit = () => {
    setEditTodoId(null);
    setEditedTodo('');
  };

  const saveTodo = (id, updatedTodo) => {
    axios.put(`http://localhost:3001/todos/${id}`, updatedTodo)
      .then(response => {
        fetchTodos();
      })
      .catch(error => console.error('Error saving todo:', error));
  };
  
  const indexOfLastTodo = currentPage * todosPerPage;
const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="bg-purple-50 min-h-screen p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Todos</h1>
      <div className="mt-4 pb-5">
        <input
          type="text"
          className="border p-2"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-teal-300 text-white px-4 py-2 ml-2 rounded"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="w-full max-w-md">
          {currentTodos.map(todo => (
            <li
              key={todo.id}
              className={`flex items-center justify-between border-b border-gray-300 py-2 ${todo.completed ? 'bg-gray-100' : ''}`}
            >
              {editTodoId === todo.id ? (
                <input
                  type="text"
                  className="border p-2"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
              ) : (
                <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                  {todo.title}
                </span>
              )}
              <div>
                {editTodoId === todo.id ? (
                  <>
                    <button
                      className="bg-green-300 text-white px-4 py-2 ml-2 rounded"
                      onClick={() => saveTodo(todo.id, { title: editedTodo, completed: false })}
                      disabled={!editedTodo}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-300 text-white px-4 py-2 rounded"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={`bg-blue-300 text-white px-4 py-2 mr-2 ${todo.completed && 'bg-gray-300 cursor-not-allowed'}`}
                      onClick={() => updateTodo(todo.id, todo)}
                      disabled={loading}
                    >
                      {todo.completed ? 'Incomplete' : 'Complete'}
                    </button>
                    <button
                      className="bg-yellow-300 text-white px-4 py-2 mr-2 rounded"
                      onClick={() => startEdit(todo.id, todo.title)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-300 text-white px-4 py-2 rounded"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
     
      <div className="mt-4 flex">
  {pageNumbers.map((number) => (
    <button
      key={number}
      onClick={() => paginate(number)}
      className={`bg-teal-300 text-white px-3 py-1 mr-2 rounded ${currentPage === number ? 'bg-teal-500' : ''}`}
    >
      {number}
    </button>
  ))}
</div>
    </div>
  );
}

export default App;