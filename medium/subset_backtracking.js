function subsets(arr) {
  let res = [];
  let arrL = arr.length;
  function backtrack(start, subArray){
    if(subArray.length <= arrL) res.push(subArray.slice());
    for(let i = start; i < arrL; i ++){
      subArray.push(arr[i]);
      backtrack(i + 1, subArray);
      subArray.pop();
    }
  }
  backtrack(0, []);
  return res;
}


console.log(subsets([1,2,3]));
