
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 2000);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 3000);


setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 4000);

// ... fill in the rest yourself ...
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 5000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 6000);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 7000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 8000);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 9000);