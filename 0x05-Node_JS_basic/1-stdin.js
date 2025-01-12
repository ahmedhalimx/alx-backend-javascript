process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', () => {
  const data = process.stdin.read();
  process.stdout.write(`Your name is: ${data}`);
  process.exit();
});

process.on('exit', () => {
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
});
