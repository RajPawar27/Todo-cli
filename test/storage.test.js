import { loadTodos, saveTodos } from '../lib/storage.js';
import fs from 'fs/promises';

describe('storage layer', () => {
  it('initializes empty on no file', async () => {
    // mock or use a temp directory for homedir
    const todos = await loadTodos();
    expect(Array.isArray(todos)).toBe(true);
  });
});