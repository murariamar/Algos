class PrioriyQueue {
  constructor() {
    this.values = [];
  }

  enuque(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    function bubbleUp() {
      let elementIndex = this.values.length - 1;
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      while (
        parentIndex >= 0 &&
        this.values[parentIndex].priority >= this.values[elementIndex].priority
      ) {
        [this.values[parentIndex], this.values[elementIndex]] = [
          this.values[([elementIndex], this.values[parentIndex])]
        ];
        elementIndex = parentIndex;
        parentIndex = Math.floor((elementIndex - 1) / 2);
      }
    }
    bubbleUp();
    return this.values;
  }

  dequeue() {
    const root = this.values[0];
    const endElement = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = endElement;
      bubbleDown();
    }

    function bubbleDown() {
      let idx = 0;
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild;
        let rightChild;
        let swapIdx = null;
        if (leftChildIdx < this.values.length) {
          leftChild = this.values[leftChildIdx];
          rightChild = this.values[rightChildIdx];
          if (leftChild.priority < endElement.priority) {
            swapIdx = leftChildIdx;
          }
        }
        if (leftChildIdx < this.values.length) {
          rightChild = this.values[rightChildIdx];
          if (
            (!swapIdx && rightChild.priority < endElement.priority) ||
            (swap && rightChild.priority < leftChild.priority)
          ) {
            swapIdx = rightChildIdx;
          }
        }
        if (swapIdx) {
          [this.values[idx], this.values[swapIdx]] = [
            this.values[swapIdx],
            this.values[idx]
          ];
          idx = swapIdx;
        } else {
          break;
        }
      }
    }
    return root;
  }
}

class Node {
  constructor(val, priority) {
    this.priority = priority;
    this.val = val;
  }
}
