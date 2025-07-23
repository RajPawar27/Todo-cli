import { loadTodos, saveTodos } from './storage.js';

export async function addTodo(task) {
  const todos = await loadTodos();
  task.id = Date.now(); // simple unique ID
  task.createdAt = new Date().toISOString();
  task.done = false;
  todos.push(task);
  await saveTodos(todos);
  return task;
}

export async function listTodos({ status, tag }) {
  let todos = await loadTodos();
  if (status !== 'all') {
    todos = todos.filter(t => status === 'done' ? t.done : !t.done);
  }
  if (tag) {
    todos = todos.filter(t => t.tags?.includes(tag));
  }
  return todos;
}

export async function markDone(id) {
  const todos = await loadTodos();
  const task = todos.find(t => t.id === +id);
  if (!task) throw new Error(`No todo with id ${id}`);
  task.done = true;
  await saveTodos(todos);
  return task;
}

export async function removeTodo(id) {
  let todos = await loadTodos();
  const before = todos.length;
  todos = todos.filter(t => t.id !== +id);
  if (todos.length === before) throw new Error(`No todo with id ${id}`);
  await saveTodos(todos);
}