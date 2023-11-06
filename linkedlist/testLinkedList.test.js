const Node = require("./node");
const LinkedList = require("./linkedLists");


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
  list.insertAtEnd(7);
  list.insertAtEnd(6);
  list.insertAtEnd(5);

  expect(list.getSize()).toBe(3);
})

test("test that size of linked list can be received", () => {
  let list = new LinkedList();
  expect(list.isEmpty()).toBe(true);
})