const removeNthFromEnd = function(head, n) {
  if (!head) {
    return null;
  }
  
  const map = new Map();
  let index = 0;
  let h = head;
  
  while (h) {
    map.set(index, h);
    index++;
    h = h.next;
  }
  
  const indexToRemove = index - n;
  if (indexToRemove === 0) {
    return map.get(0).next;
  }
  
  map.get(indexToRemove - 1).next = map.get(indexToRemove).next;
  return head;
};