import { LinkedList, Node } from "./index.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");
list.append("snake");
list.append("turtle");

console.log(list.pop());
console.log(list.toString());