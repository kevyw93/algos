// iterative better solution
var kthSmallest = function(root, k) {
    const stack = [];
    let curr = root;

    let num = 0;
    while(stack.length || curr){
        if(curr){
            stack.push(curr);
            curr = curr.left;
        }else{
            const node = stack.pop();
            num += 1;
            if(num === k) return node.val;
            curr = node.right;
        }
    }

};

// recursive
var kthSmallest = function(root, k) {
    const arr = [];

    function _recursive(node){
        if(!node) return arr;

        const left = _recursive(node.left);
        arr.push(node.val);
        const right = _recursive(node.right);
        return arr;
    }
    return _recursive(root, 0)[k-1];

};
