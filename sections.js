function c(k) {
  let count = 0;
  for (let i = 1; i <= k*2; i++) {
    for (let j = 1; j <= k*2; j++) {
      if (k ** 3 === i * i * j * j) count += 1;
    }
  }

  return count;
}

const result = c(4);
console.log(result);