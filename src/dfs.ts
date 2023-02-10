const dfs = (graph) => {
  if (typeof graph !== 'object') {
    throw new Error('INVALID_ARGUMENT');
  }

  const res: any = [];
  const rootNode: any = Object.keys(graph)[0];
  res.push(rootNode);

  const initNodes = graph[rootNode];

  function trav(initNodes) {
    for (let i = 0; i < initNodes.length; i += 1) {
      const initNode = initNodes[i];

      if (graph[initNode].length === 0) {
        if (!res.includes(initNode)) {
          res.push(initNode);
        }
      } else {
        for (let j = 0; j < graph[initNode].length; j += 1) {
          if (!res.includes(initNode)) {
            res.push(initNode);
          }
          trav(graph[initNode]);
        }
      }
    }
  }

  trav(initNodes);

  return res;
};

export default dfs;
