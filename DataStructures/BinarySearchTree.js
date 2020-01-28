class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (val > current.val) {
          if (!current.right) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else if (val < current.val) {
          if (!current.left) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else if (val === current.val) {
          break;
        }
      }
    }
    return this;
  }

  find(val) {
    if (!this.root) {
      return undefined;
    } else {
      let current = this.root;
      while (current) {
        if (val > current.val) {
          current = current.right;
        } else if (val < current.val) {
          current = current.left;
        } else if (val === current.val) {
          break;
        }
      }
      return current;
    }
  }

  BFS() {
    let data = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }
}
