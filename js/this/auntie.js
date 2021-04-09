// assign name property to module.exports
this.name = '全域阿婆';

var auntie = {
  name: '漂亮阿姨',
  callName: function () {
    console.log('1', this.name);
    // The arrow function below bind to callName function context
    setTimeout(() => {
      console.log('3', this.name);
      console.log('4', this);
    }, 10);
  },
  callName2: () => {
    console.log('2', this.name);
    setTimeout(() => {
      console.log('5', this.name);
      console.log('6', this);
    }, 10);
  },
};

var callName = auntie.callName;
auntie.callName();
auntie.callName2(); // arrow function bind to this(module.exports);
callName();

/**
 * 1 漂亮阿姨
 * 2 全域阿婆
 * 1 undefined by callName (global context)
 * 3 漂亮阿姨
 * 4 漂亮阿姨 object
 * 5 全域阿婆
 * 6 全域阿婆 object
 * 3 undefined by callName (global context)
 * 4 global object by callName (global context)
 */
