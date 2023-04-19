const tree = {
  value: 1,
  children: [
    {
      value: "a",
      children: [
        {
          value: "b",
          children: [{ value: "c", children: [] }],
        },
      ],
    },
    {
      value: "d",
      children: [
        {
          value: "e",
          children: [{ value: "f", children: [] }],
        },
      ],
    },
  ],
};
//新建一个队列，把根节点入队
//把队头出队并访问
//把队头的children挨个入队
//重复第二三步  直到队列为空
const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    const n = q.shift();
    console.log(n.value);
    n.children.forEach((i) => {
      q.push(i);
    });
  }
};

bfs(tree);
