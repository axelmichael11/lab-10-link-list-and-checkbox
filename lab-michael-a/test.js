'use strict';


const expect = require('expect');
const Sll = require('./index.js');

describe('testing the remove and reverse node methods', () => {
  describe('testing the constructor function', ()=> {
    it('should be passing through the first head..', (done) => {
      let head = new Sll(5);
      // expect(head).toEqual(new Sll(5));
      expect(head.value).toEqual(5);
      done();
    });
  });


  describe('testing the remove node method', () =>{
    it('should be removing the third node in the list'), (done) => {
      let head = new Sll(0);
      let test1 = new Sll(1);
      let test2 = new Sll(2);
      let test3 = new Sll(3);


      let newHead = new Sll(0);

      newHead.appendNode(test1);
      newHead.appendNode(test3);


      head.appendNode(test1);
      head.appendNode(test2);
      head.appendNode(test3);

      head.removeNode(test2);


      console.log(head);
      // let sum = head.forEach((node, list) => {
      //   console.assert(list === head);
      //   sum += node.value;
      // });
      expect(head.next.next.value).toEqual(3);
      expect(head).toEqual(newHead);
      // expect(head.next.value == 87);
      // expect(head.next.next.value == 67);
      // expect(head.next.next.next == null);

      done();
    };
  });

  describe('testing the reverse() node method', () =>{
    it('should be removing the third node in the list'), (done) => {
      let head = new Sll(0);
      let test1 = new Sll(1);
      let test2 = new Sll(2);
      let test3 = new Sll(3);


      head.appendNode(test1);
      head.appendNode(test2);
      head.appendNode(test3);

      head.removeNode(test2);

      let reversed = test3;

      reversed.appendNode(test2);
      reversed.appendNode(test1);
      reversed.appendNode(head);

      
      expect(head).toEqual(reversed);

      done();
    };
  });
});
