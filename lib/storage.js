// lib/storage.js
import fs from 'fs/promises';
import path from 'path';
import os   from 'os';

const DATA_DIR  = path.join(os.homedir(), '.todo-cli');
const DATA_FILE = path.join(DATA_DIR, 'todos.json');

export async function loadTodos() {
  // make sure the dir exists
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    // if the file doesn't exist yet, start with an empty array
    return [];
  }
}

export async function saveTodos(todos) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2));
}
