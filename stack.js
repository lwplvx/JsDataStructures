function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function pop() {
    if (this.top > 0) {
        var ele = this.dataStore[--this.top];
        if (this.top === 0) {
            this.clear();
        }
        return ele;
    }
    return undefined;
}
function peek() {
    var ele = this.dataStore[this.top - 1];
    return ele;
}
function clear() {
    this.dataStore = [];
    this.top = 0;
}
function length() {
    return this.top;
}
// 测试
var s = new Stack();
s.push("David");
s.push("Bryan");
console.log("length: " + s.length());
s.pop();
s.peek();
s.pop();
console.log("length: " + s.length());