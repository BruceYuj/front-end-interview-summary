function foo() {
    var name = "极客时间"
    let test1 = 1
    const test2 = 2

    var innerBar = {
        setName: function(newName) {
            name = newName
        },
        getName: function() {
            console.log(test1)
            return name
        }
    }

    return innerBar
}

var bar = foo()
bar.setName("abc")
bar.getName()
console.log(bar.getName())