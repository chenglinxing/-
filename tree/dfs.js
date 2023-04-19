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

//访问根节点
//对根节点的children挨个访问，挨个进行深度优先遍历

const dfs = (root) => {
  console.log(root.value);
  root.children.forEach(dfs);
};

dfs(tree);
