//thought: dont check when i == 1 instead check when i2 === k3 so that j = 1

function c(k) {
  let count = 0;
  const k3 = k ** 3;
  const max = Math.sqrt(k3);
  let coords = [];
  for (let i = 1; i <= max; i++) {
    let i2 = i ** 2;
    let iHalf2 = (i2 / 2) ** 2;
    if (i2 * iHalf2 === k3 || i2 === k3) {
      count += 1;
      coords.push([i2, iHalf2]);
    }
    // for (let j = 1; j <= max; j++) {
    //   if (k3 === i2 * j * j) {
    //     count += 1;
    //     coords.push([i,j]);
    //   }
    // }
  }

  return count;
}

const result = c(4);
console.log(result);