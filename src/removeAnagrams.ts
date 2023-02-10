const removeAnagrams = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('INVALID_ARGUMENT');
  }

  arr.forEach((item) => {
    if (typeof item !== 'string') {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  });

  // return arr.filter((element, index, array) => {
  //   const copyArr = array;
  //   copyArr.splice(index, 1);

  //   return !copyArr.includes(
  //     element.replace(/[^\w]/g).toLowerCase().split('').sort().join('')
  //   );
  // });

  for (let i = 0; i < arr.length; i += 1) {
    const currentElem =
      arr[i] &&
      arr[i].replace(/[^\w]/g).toLowerCase().split('').sort().join('');

    for (let j = i + 1; j < arr.length; j += 1) {
      if (
        arr[j] &&
        arr[j].replace(/[^\w]/g).toLowerCase().split('').sort().join('') ===
          currentElem
      ) {
        delete arr[i];
        delete arr[j];
      }
    }
  }

  return arr.flat();
};

export default removeAnagrams;
