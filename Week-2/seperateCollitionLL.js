class Node {
    constructor(key, value) {
          this.key = key;
          this.value = value;
          this.next = null;
    }
}

class LinkedList {
    constructor() {
          this.head = null;
    }

    append(key, value) {
          const newNode = new Node(key, value);
          if (this.head === null) {
                this.head = newNode;
          } else {
                let current = this.head;
                while (current.next) {
                      current = current.next;
                }
                current.next = newNode;
          }
    }

    find(key) {
          let current = this.head;
          while (current) {
                if (current.key === key) {
                      return current.value;
                }
                current = current.next;
          }
          return undefined;
    }

    remove(key) {
          if (!this.head) {
                return;
          }

          if (this.head.key === key) {
                this.head = this.head.next;
                return;
          }

          let current = this.head;
          let prev = null;

          while (current && current.key !== key) {
                prev = current;
                current = current.next;
          }

          if (current) {
                prev.next = current.next;
          }
    }
}

class HashTableArray {
    constructor(size) {
          this.size = size;
          this.table = new Array(size).fill(null).map(() => new LinkedList());
    }

    hash(key) {
          let hash = 0;
          for (let i = 0; i < key.length; i++) {
                hash += key.charCodeAt(i);
          }
          return hash % this.size;
    }

    put(key, value) {
          let index = this.hash(key);
          this.table[index].append(key, value);
    }

    get(key) {
          let index = this.hash(key);
          return this.table[index].find(key);
    }

    remove(key) {
          let index = this.hash(key);
          this.table[index].remove(key);
    }

    contains() {
          console.log(this.table);
    }
}

// Example usage
const hashTable = new HashTableArray(10);

hashTable.put("John", 25);
hashTable.put("Jane", 30);
hashTable.put("Doe", 35);
hashTable.put("oDe", 35);
hashTable.get("John");
hashTable.remove("Doe");
hashTable.contains();