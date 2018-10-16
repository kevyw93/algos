var buildTree = function(preorder, inorder) {
    const hash = {};
    inorder.forEach((el, i) => {hash[el] = i;});
    function helper(p1, p2, i1, i2){
        if(p1 > p2 || i1 > i2) return null;
        const val = preorder[p1];
        const inOrderIdx = hash[val];
        const nLeft = inOrderIdx - i1 ;
        const newRoot = new TreeNode(val);
        newRoot.left = helper(p1 + 1, nLeft + p1, i1, inOrderIdx - 1);
        newRoot.right = helper(p1 + nLeft + 1,p2, inOrderIdx + 1, i2);
        return newRoot;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
