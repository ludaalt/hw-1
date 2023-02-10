const getNumberProps = (obj) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new Error('INVALID_ARGUMENT');
  }
  const res: any = [];

  for (const prop in obj) {
    if (typeof obj[prop] === 'number') {
      res.push(prop);
    }
    if (typeof obj[prop] === 'object') {
      res.push(getNumberProps(obj[prop]));
    }
  }

  return [].concat(...res).sort();
};

export default getNumberProps;
