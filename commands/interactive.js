import inquirer from 'inquirer';
import listTodos from './list.js';
import add from './add.js';
import done from './done.js';
import remove from './remove.js';

export default async function interactive() {
  while (true) {
    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      choices: [
        { name: 'Add a todo',  value: 'add' },
        { name: 'List todos',  value: 'list' },
        { name: 'Mark done',   value: 'done' },
        { name: 'Remove todo', value: 'remove' },
        { name: 'Exit',        value: 'exit' },
      ]
    });
    if (action === 'exit') break;

    // Then call your command functions with further prompts…
    // e.g. ask for text, id, etc.
  }
}