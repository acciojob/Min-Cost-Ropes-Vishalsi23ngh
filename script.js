function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort();
	int cost = 0
	int rope = arr[0];
	for (let index = 1; index < arr.length; i++){
		sum = cost + arr[i];
		cost = sum;
	}
  return sum;
}

module.exports=mincost;
