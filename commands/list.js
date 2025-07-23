// commands/list.js
import chalk from 'chalk';
import { listTodos } from '../lib/tasks.js';

export default async function list(opts) {
  try {
    const tasks = await listTodos(opts);
    if (tasks.length === 0) {
      console.log(chalk.blue('ℹ No todos found.'));
      return;
    }

    for (const t of tasks) {
      const status = t.done
        ? chalk.green('[✔]')
        : chalk.red('[ ]');
      const due = t.due
        ? chalk.yellow(`(due: ${t.due})`)
        : '';
      const priorityColor = t.priority === 'high'
        ? chalk.red
        : t.priority === 'low'
          ? chalk.green
          : chalk.yellow;
      const priority = chalk.dim(`[${priorityColor(t.priority)}]`);
      const tags = t.tags?.length
        ? chalk.magenta(`#${t.tags.join(' #')}`)
        : '';

      console.log(
        `${status} ${chalk.bold(t.text)} ${due} ${priority} ${tags} ${chalk.dim(`[id: ${t.id}]`)}`
      );
    }
  } catch (err) {
    console.error(chalk.red('✖ Error:'), err.message);
    process.exit(1);
  }
}
