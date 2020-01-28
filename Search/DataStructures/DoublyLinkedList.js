class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const nodeToRemove = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeToRemove.prev;
      this.tail.next = null;
      nodeToRemove.prev = null;
    }
    this.length--;
    return nodeToRemove;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const nodeToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToRemove.next;
      this.head.prev = null;
      nodeToRemove.next = null;
    }
    this.length--;
    return nodeToRemove;
  }

  unShift(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let count;
    let current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (index !== count) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (index !== count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, value) {
    const existingNode = this.get(index);
    if (existingNode) {
      existingNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unShift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    const existingNode = this.get(index - 1);
    const node = new Node(val);
    node.prev = existingNode;
    node.next = existingNode.next;
    existingNode.next.prev = node;
    existingNode.next = node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const nodeToRemove = this.get(index);
    const nextNode = nodeToRemove.next;
    const prevNode = nodeToRemove.prev;
    prev.next = nextNode;
    nextNode.prev = prevNode;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    this.length--;
    return nodeToRemove;
  }
}
