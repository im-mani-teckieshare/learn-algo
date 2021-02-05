function findFeatured(arr) {
  let result = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {})
  console.log(result)
}


let arr = ['black', 'black', 'black', 'red', 'yellow', 'yellow', 'yellow', 'black'];

findFeatured(arr);