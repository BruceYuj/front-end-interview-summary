var minimumLengthEncoding = function(words) {
    
    let count = 0;
    let root = new TrieNode();

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        let path = root;
        let isNew = false;
        let old = 0;

        for(let j = word.length - 1; j >= 0; j--) {
            let ch = word.charCodeAt(j) - 97;
            if(!path.next[ch]) {
                let newNode = new TrieNode();
                newNode.count = path.count + 1;
                path.next[ch] = newNode;
                isNew = true;
            } 
            if(path.isEnd) old++;
            path = path.next[ch];
        }
        path.isEnd = true;
        count += (isNew ? 1 + path.count : 0) - old;
    }

    return count;

    function TrieNode() {
        this.isEnd = false;
        this.count = 0;
        this.next = new Array(26);
    }
};
console.log(minimumLengthEncoding(["time", "atime", "btime"]));