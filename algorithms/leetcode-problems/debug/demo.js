var isBalanced = function(root) {
    if(!root) return true;
    if(!root.left && !root.right) return true;


    return Math.abs(height(root.left)-height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);

    function height(root) {
        if(!root) return -1;
        if(!root.left && !root.right) return 0;
        let height = -1;
        let queue = [root];
        while(queue.length) {
            let len = queue.length;
            height++;
            for(let i = 0; i < len; i++) {
                let top = queue.shift();
                if(top.left) queue.push(top.left);
                if(top.right) queue.push(top.right);
            }
        }
        return height;
    }
};

let root = buildTreeFromArr([1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5])
console.log(isBalanced(root));