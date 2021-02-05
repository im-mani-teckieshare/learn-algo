//[Red,yellow,blue] [[10,20,5],[25,10,14],[14,5,10]]

function minCost(cost) {
  let min = 0;
  let noOfHouse = cost.length;
  let dp = [];
  dp.length = noOfHouse;
  dp.fill([]);
  dp[0].push(cost[0][0]);
  dp[0].push(cost[0][1]);
  dp[0].push(cost[0][2]);
  for (let i = 1; i < cost.length; i++) {
    dp[i] = [];
    let prevCost = dp[i - 1];
    dp[i].push(Math.min(prevCost[1], prevCost[2]) + cost[i][0]);
    dp[i].push(Math.min(prevCost[0], prevCost[2]) + cost[i][1]);
    dp[i].push(Math.min(prevCost[1], prevCost[0]) + cost[i][2]);
  }

  let i = noOfHouse - 1;
  min = Math.min(dp[i][0], dp[i][1], dp[i][2])


  return min;

}

console.log(minCost([[10, 20, 5], [4, 10, 14], [14, 5, 10]]));