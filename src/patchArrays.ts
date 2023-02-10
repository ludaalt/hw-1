// @ts-nocheck

const patchArrays = (): void => {
  Array.prototype.count = function () {
    return this.length;
  };

  Array.prototype.insert = function (index, element) {
    if (typeof index !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    if (index < 0) {
      this.unshift(element);
      return this;
    }
    if (index > this.length) {
      this.push(element);
      return this;
    }
    this.splice(index, 0, element);
    return this;
  };

  Array.prototype.remove = function (element) {
    for (let i = 0; i < this.length; i += 1) {
      if (this[i] === element) {
        this.splice(i, 1);
        return this;
      }
    }

    return this;
  };
};

export default patchArrays;
