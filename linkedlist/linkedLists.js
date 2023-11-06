const Node = require("./node")
class LinkedList{

  constructor(){

    this.head = null;

    this.insertAtHead = (value) => {
      let newNode = new Node(value);
      newNode.nextElement = this.head;
      this.head = newNode;
    }

    this.getHead = () => {
      if(this.head !== null){
      return this.head.value;
      }
    }

    this.deleteAtHead = () => {
      if(this.head !== null){
        this.head = this.head.nextElement;
      }
      
    }

    this.insertAtEnd = (value) => {
      if(this.head === null){
        this.insertAtHead(value);
      } else {
        let current = this.head
        while( current.nextElement !== null){
          current = current.nextElement;
        }
        current.nextElement = new Node(value);
      }
    }

    this.getLast = () => {
      if (this.head !== null){
        let current = this.head
        while( current.nextElement !== null){
          current = current.nextElement;
        }
        return current.value;
      }
    }

    this.getSize = () => {
      let size = 0;
      if (this.head !== null){
        let current = this.head
        while( current !== null){
          size += 1;
          current = current.nextElement;
        }
      }
      return size;
    }

    this.delete = (value) => {
      
    }

  }


}

LinkedList.prototype.isEmpty = () => {
  return this.head == null;
}

module.exports = LinkedList