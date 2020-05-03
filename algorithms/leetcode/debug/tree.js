function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function makeTreeFromArr(arr) {
    let n = arr.length;
    if(n === 0) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while(queue.length && i < n) {
        let len = queue.length;

        for(let j = 0; j < len; j++) {
            let parent = queue.shift();
            if(arr[i+j*2] !== null) {
                parent.left = new TreeNode(arr[i+j*2]);
            }
            if(arr[i+j*2+1] !== null) {
                parent.right = new TreeNode(arr[i+j*2+1]);
            }
        }
        i += len*2;
    }

    return root;
}