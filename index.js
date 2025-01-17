export class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(value){
        let node = new Node(value);

        let current;

        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;

    }

    prepend(value){
        let node = new Node(value);

        let current;

        if(this.head == null){
            this.head = null;
        } else {
            current = this.head;
            this.head = node;
            node.next = current;
        }

        this.size++;
    }

    getSize(){
        return this.size;
    }

    getHead(){
        return this.head;
    }

    tail(){
        let current = this.head;

        while(current.next){
            current = current.next
        }
        return current;
    }

    at(index){
        let current = this.head;
        let count = 0;
        while (current != null) {
            if (count === index) return current;
            count++;
            current = current.next;
        }

        return current;
    }

    pop(){
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
        }
        this.size--;
    }

    contains(value){
        let current = this.head;

        while(current){
            if (current.value === value){
                return true;
            }
            current = current.next;
        }

        return false;
    }

    find(value){
        let current = this.head;

        for(let i = 0; i < this.size; i++){
            if(current.value === value){
                return i;
            }
            current = current.next;
        }

        return null;
    }

    toString(){
        let current = this.head;
        let string = '';

        for(let i = 0; i< this.size; i++){
            string += ` ( ${current.value} ) ->`;
            current = current.next;
        }

        string += " null";

        return string;
    }

    insertAt(value, index){
        let node = new Node(value);
        let current;

        if(index > this.size){
            return console.log("index doesnt exist");
        
        }

        if(index == 0){
            this.prepend(value);
        } else {
            current = this.at(index - 1);
            let temp = current.next;
            current.next = node;
            node.next = temp;

        }

        this.size++;
    }

    removeAt(index){
        let current;

        if(index == 0){
            current = this.head;
            this.head = current.next;
        } else {
            current = this.at(index - 1);
            if(current.next.next == null){
                current.next = null;
            }
            let temp = current.next.next;
            current.next = temp;
        }

        this.size--;
    }
}

export class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}