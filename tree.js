var resData = [
  { id: "1", level: 1 },
  { id: "2", level: 1 },
  { id: "2-1", level: 2 },
  { id: "2-1-1", level: 3 },
  { id: "2-2", level: 2 },
  { id: "3", level: 1 },
  { id: "3-1", level: 2 },
  { id: "3-1-1", level: 3 },
  { id: "4", level: 1 },
  { id: "4-1", level: 2 },
  { id: "5", level: 1 },
  { id: "5-1", level: 2 },
  { id: "5-2", level: 2 },
  { id: "5-2-1", level: 3 },
  { id: "5-2-2", level: 3 },
  { id: "5-2-2-1", level: 4 },
  { id: "5-2-2-1-1", level: 5 },
  { id: "5-3", level: 2 },
  { id: "6", level: 1 },
  { id: "7", level: 1 }
  { id: "7-1", level: 2 }
];

var convert = nodes => {
  const stack = [];
  const result = [];
  let current = result;

  let depth = 1;

  nodes.forEach(node => {
    if (node.level === depth) {
      // sibling
      current.push({ ...node });
    } else if (depth < node.level) {
      // child
      depth++;
      current[current.length - 1].child = [{ ...node }];
      stack.push(current);

      current = current[current.length - 1].child;
    } else {
      // parent
      var loop = depth - node.level;
      while (loop--) {
        current = stack.pop();
        depth--;
      }

      current.push({ ...node });
    }
  });

  return result;
};

console.log(JSON.stringify(convert(resData), null, 2));
