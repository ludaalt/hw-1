const planEvent = (cb, time) => {
  if (typeof cb !== 'function') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (typeof time !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (time <= 0) {
    return new Promise((res) => res(cb()));
  }

  return new Promise((res) => setTimeout(() => res(cb()), time));
};

export default planEvent;
