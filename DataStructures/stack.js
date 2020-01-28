class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.first) {
      return undefined;
    }

    let current = this.first;
    this.first = current.next;
    current.next = null;
    this.length--;
    if (this.length === 0) {
      this.first = null;
      this.last = null;
    }
    return current;
  }
}
