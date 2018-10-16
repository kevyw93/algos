//  you have 2 linked list find the intersection without modifying the linked list


function linkedIntersect(h1, h2){
  let node1 = h1;
  let node2 = h2;
  while(node1 !== node2){
    node1 = node1 ? node1.next : h2;
    node2 = node2 ? node2.next : h1;
  }
  return node1;
}
