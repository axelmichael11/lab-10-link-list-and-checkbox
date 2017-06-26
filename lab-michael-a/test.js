'use strict';


const expect = require('expect');
const SLL = require('./index.js')

describe('testing the remove and reverse node methods', () => {
  describe('testing the remove node method', () =>{
    it('should be removing the third node in the list'), () => {
      let head = new SLL(4);
      head.appendNode(new SLL(87));
      head.appendNode(new SLL(43));


      let sum = head.forEach((node, list) => {
        console.assert(list === head)
        sum += node.value
      })
      expect(head.value == 4)
      expect(head.next.value == 87)
      // expect(head.next.next.value == 43)
      expect(head.next.next.next == null)

    }
  })
}
