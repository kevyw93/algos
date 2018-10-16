// optimize using an array 
var minDistance = function(word1, word2) {
    const hash = {};
    function _recursive(idx1, idx2){
        if(idx1 < 0 && idx2 < 0) return 0;
        if(idx1 < 0 && idx2 >= 0) return idx2 + 1;
        if(idx2 < 0 && idx1 >= 0) return idx1 + 1;
        if (hash[[idx1,idx2]]) return hash[[idx1,idx2]];
        if(word1[idx1] === word2[idx2]) {
           hash[[idx1,idx2]] = _recursive(idx1 - 1, idx2 - 1);
        }else{
            hash[[idx1, idx2]] = 1 + Math.min(_recursive(idx1 - 1, idx2), _recursive(idx1, idx2-1), _recursive(idx1-1,idx2-1));
        }
        return hash[[idx1,idx2]];

    }
    return _recursive(word1.length - 1, word2.length - 1);
};

console.log(minDistance("horse", "ros") === 3);
console.log(minDistance("insertion", "execution") === 5);
console.log(minDistance("couple", "tuple") === 2);
console.log(minDistance("mother", "mom") === 4);
console.log(minDistance("father", "faith") === 3);
