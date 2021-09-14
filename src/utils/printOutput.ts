import chalk from 'chalk';
import boxen from 'boxen';

type OutputOptions = {
  type: 'error' | 'success'
  title: string;
  content: string;
  remarks?: string;
}

const printOutput = ({
  type, title, content, remarks,
}: OutputOptions): void => {
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
