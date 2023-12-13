class HashTable {
    constructor(size) {
          this.size = size;
          this.keys = new Array(size);
          this.values = new Array(size);
    }

    hash1(key) {
          let hashValue = 0;
          for (let i = 0; i < key.length; i++) {
                hashValue += key.charCodeAt(i);
          }
          return hashValue % this.size;
    }

    hash2(key) {
          // Using a prime number smaller than the size for simplicity
          const prime = 7;
          return prime - (key.charCodeAt(0) % prime);
    }

    doubleHashing(key, attempt) {
          const hash1 = this.hash1(key);
          const hash2 = this.hash2(key);
          return (hash1 + attempt * hash2) % this.size;
    }

    put(key, value) {
          let attempt = 0;
          let index = this.doubleHashing(key, attempt);

          while (this.keys[index] !== undefined) {
                // Collision: use double hashing to find the next index
                attempt++;
                index = this.doubleHashing(key, attempt);
          }

          this.keys[index] = key;
          this.values[index] = value;
    }

    get(key) {
          let attempt = 0;
          let index = this.doubleHashing(key, attempt);

          while (this.keys[index] !== key) {
                attempt++;
                index = this.doubleHashing(key, attempt);

                if (this.keys[index] === undefined) {
                      return undefined;
                }
          }
          return this.values[index];
    }
}

const hashTable = new HashTable(10);

hashTable.put("John", 25);
hashTable.put("Jane", 30);
hashTable.put("Doe", 35);
hashTable.put("oDe", 40);

console.log(hashTable.get("John")); 
console.log(hashTable.get("Jane")); 
console.log(hashTable.get("Doe"));  
console.log(hashTable.get("oDe"));