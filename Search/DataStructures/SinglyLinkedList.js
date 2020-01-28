class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      current = current.next;
      newTail = current;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this.head.val;
  }

  unShift(val) {
    const node = new Node(val);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    const counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(val, index) {
    const node = this.get(index);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unShift(val);
    } else if (index === this.length) {
      return !!this.push(val);
    } else {
      const newNode = new Node(val);
      const previous = this.get(index - 1);
      node.next = previous.next;
      previous.next = node;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      const previous = this.get(index - 1);
      previous.next = previous.next.next;
      this.length--;
      return this;
    }
  }

  reverse() {
    this.tail = this.head;
    let current = this.tail.next;
    let prev = this.tail;
    while (current) {
      let temp;
      if (current.next) {
        temp = current.next;
      }
      current.next = prev;
      prev = current;
      current = temp;
    }
    this.head = current;
    this.tail.next = null;
    return this;
  }
}
