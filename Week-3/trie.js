class Node{
    constructor(){
        this.childeren = new Map()
        this.isEndOfWord = false
    }
}

class trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root
        for(const char of word){
            if(!node.childeren.has(char)){
                node.childeren.set(char,new Node())
            }

            node = node.childeren.get(char)
        }
        node.isEndOfWord = true
    }

    search(word){
        let node = this.root
        for(const char of word){
            if(!node.childeren.has(char)){
                return false
            }
            node = node.childeren.get(char)
        }

        return node.isEndOfWord
    }


}

const t = new trie()
t.insert('sinan')
t.insert("sidan")
console.log(t.search('sin'));
