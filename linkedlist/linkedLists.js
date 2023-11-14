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

    this.deleteEnd = (value) => {
      if (this.head !== null){
        let current = this.head;
        while( current.nextElement !== null){
          current = current.nextElement;
        }
        current = null;
      }
    }

    this.shuffle = () => {

    }


    this.removeDuplicate = () => {

      let compare = this.head.nextElement;
      let current = this.head;

      while(compare){
        
        if(current.value === compare.value){
          current.nextElement = compare.nextElement;
          compare = compare.nextElement;
        } else {
          current = current.nextElement;
          compare = compare.nextElement;
        }
      }
      // 
      // let pointerA = this.head;
      // let pointerB = this.head?.nextElement;

      // while(pointerB){
        // if(pointerA.value === pointerB.value){
          // pointerA.nextElement = pointerB.nextElement;
          // pointerB = pointerB.nextElement;
        // } else {
          // pointerA = pointerA.nextElement;
          // pointerB = pointerB.nextElement
        // }
        // 
      // }
    }

    this.isPresent = (value) => {
      if (this.head !== null){
        let current = this.head;
        while( current !== null){
          if(current.value === value){
            return true;
          }
          current = current.nextElement;
        }
        return false;
      }

    }

    this.union = (list) => {

      if (this.head !== null && list !== null) {
        let current = this.head;
        while (current !== null){
          
        }

      }

    }

  }


}

LinkedList.prototype.isEmpty = () => {
  return this.head == null;
}

module.exports = LinkedList