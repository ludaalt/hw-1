const sum = (...argv) => {
  if (argv.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  argv.forEach((item) => {
    if (typeof item !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
  });

  return argv.reduce((partialSum, a) => partialSum + a, 0);
};

export default sum;
