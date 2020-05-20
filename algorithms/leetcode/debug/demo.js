
var maximalRectangle = function(matrix) {
    if(!matrix.length || !matrix[0].length) return 0;

    let m = matrix.length;
    let n = matrix[0].length;
    let ans = 0;

    let heights = new Array(n).fill(0);
    let leftMin = new Array(n).fill(-1);
    let rightMin = new Array(n).fill(n);

    for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          if(matrix[i][j] === '1') heights[i]++;
          else heights[i] = 0;
      }

      let boundary = -1;

      for(let j = 0; j < n; j++) {
          if(matrix[i][j] === '1') {
              leftMin[j] = Math.max(boundary, leftMin[j]);
          } else {
              leftMin[j] = -1;
              boundary = j;
          }
      }


      boundary = n;
      for(let j = n-1; j >= 0; j--) {
          if(matrix[i][j] === '1') {
              rightMin[j] = Math.min(boundary, rightMin[j]);
          } else {
              rightMin[j] = n;
              boundary = j;
          }
      }

      for(let j = 0; j < n; j++) {
          ans = Math.max(ans, heights[j]*(rightMin[j] - leftMin[j]-1));
      }
    }

      return ans;
}


console.log(maximalRectangle([["1","0"]]))