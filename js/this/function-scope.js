var func = function () {
  this.name = 'InFunc';

  var func2 = function () {
    console.log('1.', this.name);
    setTimeout(() => {
      console.log('2.', this.name);
    }, 10);
    return { name: 'InFunc' };
  };

  var func3 = {
    name: 'func3',
    func: func2,
  };

  var func4 = {
    name: 'func4',
  };

  func2();
  func3.func();
  func2.bind(func4)();

  /**
   * 1. InFunc
   * 1. func3
   * 1. func4
   * 2. InFunc
   * 2. func3
   * 2. func4
   */
  return this;
};

const func_context = func();
// `this` referring to your module.exports
console.log(this === func_context); // false
// this in function context referring to global
console.log(global === func_context); // true