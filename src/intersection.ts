const intersection = (arr1, arr2) => {
  if (arr1 === undefined || arr2 === undefined) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  if (intersection.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }

  if (typeof arr1 !== 'object' || typeof arr2 !== 'object') {
    throw new Error('INVALID_ARGUMENT');
  }

  arr1.forEach((item) => {
    if (typeof item !== 'number') {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  });

  arr2.forEach((item) => {
    if (typeof item !== 'number') {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  });

  return Array.from(new Set(arr1.filter((value) => arr2.includes(value))));
};

export default intersection;
