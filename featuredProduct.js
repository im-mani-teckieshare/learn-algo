function findFeatured(arr) {
  let result = [];
  let map = {};
  arr.forEach((curr) => {
    if (curr in map) {
      result[map[curr]].count += 1;
    } else {
      result.push({
        product: curr,
        count: 1
      });
      map[curr] = result.length - 1;
    }
  });
  result.sort((a, b) => {
    if (a.count === b.count) {
      return a.product - b.product;
    }
    return a.count - b.count;
  })
  console.log(result[result.length - 1].product);
}


let arr = ['black', 'black', 'black', 'red', 'yellow', 'yellow', 'yellow', 'yellow', 'black'];

findFeatured(arr);