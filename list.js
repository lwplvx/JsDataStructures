function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext = hasNext;
    this.hasPrev = hasPrev;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}
function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}
function insert(element, after) {
    var insertPos = this.find(element);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

// ้ๅๅ่กจ
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    --this.pos;
}
function next() {
    if (this.pos < this.listSize) {
        --this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}
function hasNext() {
    return this.pos < this.List.listSize;
}
function hasPrev() {
    return this.pos >= 0;
}
// ไฝฟ็จ่ฟญไปฃๅจ่ฎฟ้ฎๅ่กจ
// ไฝฟ็จ่ฟญไปฃๅจ้ๅ็ไพๅญ
var names=new List();
names.append('Clayton');
names.append('Raymond');
names.append('Cynthia');
names.append('Bryan');
names.append('Danny');
for(names.front();names.hasNext();names.next())
{
    print(names.getElement());
}
// ไปๅๅๅ้ๅ
for(names.end();names.hasPrev();names.prev())
{
    print(names.getElement());
}

