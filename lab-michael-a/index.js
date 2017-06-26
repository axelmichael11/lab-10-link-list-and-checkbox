'use strict';

class SLL {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  appendNode(node){
    if(!(node instanceof SLL))
      return null;
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  forEach(callback){
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }

  findMiddle(){
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  removeNode(node){
    if (this === null) return;
    // console.log('CONSOLE LOG THIS',this);
    // if (this ==node) {
    //   this.next = this;
    //   return;
    // }

    let current = this;
    while (current.next != null) {
      if (current.next== node) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
      // console.log(current);
    }

  }

  reverseNode(head) {
    if (this === null) return;
    // let current = this;
    // previous = temporary = null;
    let previous;
    // console.log(this);
    while (head.next) {
      let next = head.next;
      head.next = previous;
      previous = head;
      head = next;
    }
    head.next = previous;
    return head;
  }

  }
