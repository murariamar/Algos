class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }
    const current = this.first;
    this.first = current.next;
    this.size--;
    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return current.val;
  }
}
