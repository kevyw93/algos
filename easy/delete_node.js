function deleteNode(head) {
  head.val = head.next.val;
  head.next = head.next.next;
  return head;
}

// const derp = {val: 4, next: null};
// console.log(deleteNode({val: 5, next: derp}));
