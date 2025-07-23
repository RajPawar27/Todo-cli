// commands/add.js
import chalk from 'chalk';
import { addTodo } from '../lib/tasks.js';

export default async function add(text, opts) {
  const task = await addTodo({
    text,
    due: opts.due,
    priority: opts.priority,
    tags: opts.tag || []
  });
  console.log(chalk.green('✔ Added:'), chalk.bold(task.text));
}