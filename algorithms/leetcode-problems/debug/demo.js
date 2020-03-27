var numDistinct = function(s, t) {
    let n = s.length;
    let m = t.length;

    let memo  = new Array(m+1).fill(0);
    let memo1 = new Array(m+1).fill(0);
    memo[m] = 1;

    for(let i = n-1; i >= 0; i--){
        for(let j = m-1; j >= 0; j--) {
            let tmp = memo[j];
            if(s[i] === t[j]) tmp += memo[j+1];   
            memo1[j] = tmp;   
        }
        [memo, memo1] = [memo1, memo]
    }


    return memo[0];

};

console.log(numDistinct("rabbbi", "bbi"));