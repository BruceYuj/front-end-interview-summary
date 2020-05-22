function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function makeTreeFromArr(arr) {
  if(!arr.length) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let index = 1;

  while(queue.length) {
    let len = queue.length;

    for(let i = 0; i < len; i++) {
      let top = queue.shift();
      if(index < arr.length && arr[index] !== null) {
        top.left = new TreeNode(arr[index]);
        queue.push(top.left);
      }
      index++;
      if(index < arr.length && arr[index] !== null) {
        top.right = new TreeNode(arr[index]);
        queue.push(top.right);
      }    
      index++;  
    }
  }

  return root;
}