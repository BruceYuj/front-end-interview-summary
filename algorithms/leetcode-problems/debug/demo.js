/**
 * @param {string} formula
 * @return {string}
 */
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    let stack = [];
    let atom = '';
    for(let i = 0; i < formula.length; i++) {
        let ch = formula.charCodeAt(i);
        if(formula[i] !== ')') {
            if(formula[i] == '(') {
                if(atom !== '') stack.push(atom);
                atom = '';
                stack.push('(');
            }else if(ch >= 65 && ch <= 90) {
                if(atom !== '')  stack.push(atom)
                atom = formula[i];
            }else {
                atom += formula[i];
            }
        } else {
            let tmp = [];
            if(atom !== '') {
                stack.push(atom);
                atom = '';
            }
            let j = i+1;
            while(j < formula.length && formula.charCodeAt(j) >= 48 && formula.charCodeAt(j) < 58) {
                j++;
            }
            while(stack[stack.length-1] !== '(') {
                let top = stack.pop();
                tmp.push(top + ',' + formula.slice(i+1, j));
            }
            stack.pop();
            for(let j = 0; j < tmp.length; j++) stack.push(tmp[j]);
            i = j-1;
        }

    }
    if(atom !== '') stack.push(atom);

    let map = {};

    for(let i = 0; i < stack.length; i++) {
        let tmp = stack[i].split(',');
        let atom = tmp[0];
        let times = 1;
        let j = 0;
        while(j < tmp[0].length && (tmp[0].charCodeAt(j) < 48 || tmp[0].charCodeAt(j) >= 58)) {
            j++;
        }
        if(j < tmp[0].length) {
            atom = tmp[0].slice(0, j);
            times = parseInt(tmp[0].slice(j, tmp[0].length));
        }
        for(let k = 1; k < tmp.length; k++) {
            times *= parseInt(tmp[k]);
        }
        if(map[atom]) map[atom] += times;
        else map[atom] = times;
    }
    stack = [];
    for(let elem in map) {
        stack.push(elem + (map[elem] > 1 ? map[elem] : ''));
    }

    return stack.sort().join('');

};


console.log(countOfAtoms('(NB3)33'));
console.log(countOfAtoms('Mg(OH)2'));
console.log(countOfAtoms('K4(ON(SO3)2)2'));
console.log(countOfAtoms('(Cm39)5(Ga28Sb45Rb8)20(Bk13Fr29As)45'))
