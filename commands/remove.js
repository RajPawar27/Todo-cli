// commands/remove.js
import chalk from 'chalk';
import { removeTodo } from '../lib/tasks.js';

export default async function remove(id) {
  try {
    await removeTodo(id);
    console.log(
      chalk.yellow('✔ Removed todo with id:'),
      chalk.bold(id)
    );
  } catch (err) {
    console.error(chalk.red('✖ Error:'), err.message);
    process.exit(1);
  }
}
