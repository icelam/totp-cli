import chalk from 'chalk';
import boxen from 'boxen';

/**
 * @typedef PrintOptions - Pretty print options
 * @prop type Type of print
 * @prop title Title to print in box
 * @prop content Content to print in box
 * @prop remarks Remarks to print in box
 */
type PrintOptions = {
  type: 'error' | 'success'
  title: string;
  content: string;
  remarks?: string;
}

/**
 * Pretty print console output in a box
 * @param options print options
 * @returns Objects containing `type`, `name`, `secret` and `issuer`
 */
const printOutput = (options: PrintOptions): void => {
  const {
    type, title, content, remarks,
  } = options;
  let output = '';
  output += chalk[type === 'success' ? 'cyan' : 'red'](title);
  output += '\n\n';

  output += chalk.white(content);

  if (remarks) {
    output += '\n\n';
    output += chalk.grey(remarks);
  }

  const boxedOutput = boxen(
    output,
    {
      margin: 1,
      padding: 1,
      borderColor: type === 'success' ? 'green' : 'red',
    },
  );

  console.log(boxedOutput);
};

export default printOutput;
