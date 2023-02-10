const bfs = (graph) => {
  if (typeof graph !== 'object') {
    throw new Error('INVALID_ARGUMENT');
  }
  const result: any = [];
  const queue: any = [];
  const start: any = Object.keys(graph)[0];
  const visited = new Set([start]);

  queue.push(start);
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    if (node && !graph[node]) {
      continue;
    }

    const neighbors =
      node &&
      graph[node].filter(
        (neighbor) => !visited.has(neighbor) && visited.add(neighbor)
      );

    queue.push(...neighbors);
  }
  return result;
};

export default bfs;
