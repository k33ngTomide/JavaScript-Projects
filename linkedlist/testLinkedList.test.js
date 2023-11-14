const Node = require("./node");
const LinkedList = require("./linkedLists");


test("test that size of linked list can be received", () => {
  let list = new LinkedList();
  expect(list.isEmpty()).toBe(true);
})


test("test that Element can be inserted at the head", () => {
  let list = new LinkedList();
  list.insertAtHead(5);

  expect(list.getHead()).toBe(5);

});

test("test that Element at the head can be deleted", () => {
  let list = new LinkedList();
  list.insertAtHead(7);
  list.insertAtHead(6);
  list.insertAtHead(5);

  list.deleteAtHead();
  expect(list.getHead()).toBe(6);
})

test("test that Element can be added at the end", () => {
  let list = new LinkedList();
  list.insertAtEnd(7);
  list.insertAtEnd(6);
  list.insertAtEnd(5);

  expect(list.getHead()).toBe(7);
  expect(list.getLast()).toBe(5);
})

test("test that size of linked list can be received", () => {
  let list = new LinkedList();
  list.insertAtEnd(30);
  list.insertAtEnd(40);
  list.insertAtEnd(90);
  list.insertAtEnd(10);
  list.insertAtEnd(12);

  expect(list.getSize()).toBe(5);
})

// test("test that deleteEnd removes the element at the end", () => {
  // let list = new LinkedList();
  // list.insertAtEnd(7);
  // list.insertAtEnd(6);
  // list.insertAtEnd(5);
  // list.deleteEnd();
// 
  // expect(list.getSize()).toBe(2);
// })

test("that duplicate can be removed", () => {
  let list = new LinkedList();
  list.insertAtEnd(1);
  list.insertAtEnd(1);
  list.insertAtEnd(1);
  list.insertAtEnd(2);
  list.insertAtEnd(2);
  list.insertAtEnd(3);
  list.insertAtEnd(3);
  list.insertAtEnd(4);
  list.insertAtEnd(4);


  let newList = new LinkedList();
  newList.insertAtEnd(1);
  newList.insertAtEnd(2);
  newList.insertAtEnd(3);
  newList.insertAtEnd(4);

  list.removeDuplicate();

  expect(list.getSize()).toBe(4);

})


test("that search method return true if value is present", () => {
  let list = new LinkedList();
  list.insertAtEnd(50);
  list.insertAtEnd(10);
  list.insertAtEnd(90);
  list.insertAtEnd(4);
  list.insertAtEnd(16);

  expect(list.contain(10)).toBe(true);

})

test("that for union", () => {
  let listA = new LinkedList();
  listA.insertAtEnd(22);
  listA.insertAtEnd(18);
  listA.insertAtEnd(56);

  let listB = new LinkedList();
  listB.insertAtEnd(14);
  listB.insertAtEnd(12);
  listB.insertAtEnd(22);

  let listC = new LinkedList();
  listC.insertAtEnd(22);
  listC.insertAtEnd(18);
  listC.insertAtEnd(56);
  listC.insertAtEnd(14);
  listC.insertAtEnd(12);

  expect(listA.union(listB).getSize()).toBe(listC.getSize());
  expect(JSON.stringify(listA.union(listB))).toBe(JSON.stringify(listC));
  
})

