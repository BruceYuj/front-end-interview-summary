function TreeNode(val) {
     this.val = val;
    this.left = this.right = null;
}

function buildTreeFromArr(arr) {
    if(!arr.length) return null;

    let index = 1;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    while(index < arr.length && index+1 < arr.length) {
        let top = queue.shift();
        let left, right;
        if(arr[index] !== null) {
            left = new TreeNode(arr[index]);
            top.left = left;
            queue.push(left);
        }
        if(arr[index+1] !== null) {
            right = new TreeNode(arr[index+1]);
            top.right = right;
            queue.push(right);
        }
        index += 2;
    }
    return root;
}

// console.log(buildTreeFromArr([3,5,1,6,2,0,8,null,null,7,4]));
