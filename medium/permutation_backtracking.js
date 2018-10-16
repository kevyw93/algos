
var permute = function(nums) {
  const res = [];
  const lengthOfNums = nums.length;
  function backtrack(idx){
      if(idx === lengthOfNums - 1) res.push(nums.slice());
      for(let i = idx; i < lengthOfNums; i ++){
          [nums[i], nums[idx]] = [nums[idx], nums[i]];
          backtrack(idx + 1);
          [nums[idx], nums[i]] = [nums[i], nums[idx]];
      }
  }
  backtrack(0);
  return res;
};

permute([1,2,3,4]);
