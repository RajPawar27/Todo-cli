// commands/done.js
import chalk from 'chalk';
import { markDone } from '../lib/tasks.js';

export default async function done(id) {
  try {
    const task = await markDone(id);
    console.log(
      chalk.green('✔ Marked done:'),
      chalk.bold(task.text),
      chalk.dim(`[id: ${task.id}]`)
    );
  } catch (err) {
    console.error(chalk.red('✖ Error:'), err.message);
    process.exit(1);
  }
}
