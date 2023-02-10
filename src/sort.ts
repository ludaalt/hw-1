const sort = (str) => {
  if (typeof str !== 'string') {
    throw new Error('INVALID_ARGUMENT');
  }

  const wordsArr = str.toLowerCase().split(' ');
  wordsArr.sort((a, b) => a.length - b.length);

  for (let i = 0; i < wordsArr.length; i += 1) {
    wordsArr[i] = wordsArr[i]
      .split('')
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join('');
  }

  return wordsArr.join(' ');
};

export default sort;
