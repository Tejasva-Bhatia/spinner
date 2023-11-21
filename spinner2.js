const array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 1000;
for (const item of array) {
  setTimeout(() => {
    process.stdout.write(`\r${item}`);
  }, delay);
  delay += 1000;
}
