// find first bad version given a version and a isBadVersion callback

// recursive
function isBadVersionFunction(isBad, totalVersion){

  function binarySearch(left, right){
    if(left === right) return left;
    const mid = Math.floor((left + right)/2);
    return isBad(mid) ? binarySearch(left, mid) : binarySearch(mid + 1, right);
  }

  return binarySearch(0, totalVersion);
}

// iterative

var solution = function(isBadVersion) {
    return function(n) {
        if(n === 1) return 1;
        let left = 1;
        let right = n;
        while(left <= right){
            if(left === right) return left;
            const mid = left + Math.floor((right - left) / 2);
            if(!isBadVersion(mid)){
        		if(isBadVersion(mid+1)) return mid+1;
        		else left = mid+1;
        	}else {
        		if(mid===left) return mid;
        		else right = mid;
        	}
        }
    };
};
