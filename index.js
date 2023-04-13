function printY(size) {
  // the max width of each row is twice the size of the input `size` - 1
  const maxWidth = size * 2 - 1;
  // to store the final output
  let output = '';
  // counter of current number in the pattern
  let count = 1;
  
  // rows
  for (let i = 1; i <= size; i++) {
    // columns
    for (let j = 1; j <= maxWidth; j++) {
      if (j === i || j === maxWidth - i + 1) {
        output += `${count} `;
        count++;
      } else {
        output += '  ';
      }
    }
    output += '\n';
  }
  console.log(output);
}

printY(1);
printY(2);
printY(3);

// node index.js
