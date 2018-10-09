function deleteNode(head) {
  head.val = head.next.val;
  head.next = head.next.next;
}

const derp = {val: 4, next: null};
deleteNode({val: 5, next: derp});
