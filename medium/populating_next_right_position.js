var connect = function(root) {
    if(!root) return ;
   const queue = [];
    queue.push(root);
    while(queue.length){
        let length = queue.length;
        let tempArr = [];
        while(length){
            const first = queue.shift();
            tempArr.push(first);
            if(first.left) queue.push(first.left);
            if(first.right) queue.push(first.right);
            length -= 1;
        }
        tempArr.forEach((el,i) => {el.next = tempArr[i+1];});
    }

};
