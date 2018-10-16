function removeNthNode(head, n) {
  let currL = 0;
  const returnNode = head;
  while(currL < n){
    head = head.next;
    currL += 1;
  }
}
