//USE JAVASCRIPT BUILT IN ARRAY METHODS

class Set {
  constructor(list = []) {
    //create empty array to store set
    this.values = [];
    //use built-in methods to construct set
    list.forEach(a => this.insert(a));
  }

  length() {
    return this.values.length;
  }

  insert(val) {
    if (!this.values.includes(val)) {
      this.values.push(val);
    }
  }

  remove(val) {
    if (this.values.includes(val)) {
      this.values.splice(this.values.indexOf(val), 1);
    }
  }

  has(val) {
    return this.values.includes(val);
  }

  union(set) {
    return new Set([...this.values, ...set.values]);
  }

  intersect(set) {
    return new Set(this.values.filter(x => set.has(x)));
  }

  difference(set) {
    let set1 = this.values.filter(x => !set.has(x));
    let set2 = set.values.filter(x => !this.has(x));
    return new Set([...set1, ...set2]);
  }
}

let myGroceryList = [
  "apples",
  "bananas",
  "milk",
  "cheese",
  "toothpaste",
  "salsa",
  "tortilla chips"
];
let setA = new Set(myGroceryList);
let setB = new Set();

setB.insert("ranch");
setB.insert("apples");
setB.insert("toilet paper");
setB.insert("ranch");
setB.insert("love");

setB.remove("ranch");

setB.has("ranch");
setB.has("love");

setUnion = setA.union(setB);
setIntersect = setA.intersect(setB);
setDifference = setA.difference(setB);

console.log(setA);
console.log(setB);
console.log(setUnion);
console.log(setIntersect);
console.log(setDifference);
console.log(setA.length());
