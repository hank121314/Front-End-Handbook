## Javascript `this`

`this` in javascript might be represented as multiple forms.  
Sometimes it is `window`, sometimes it is `global` and even it is an `undefined`.  
How do we consider its type when we using it?  
Here are some tips to help you :smile:

### Global context

Using `this` in the global context, the type of `this` only depends on Javascript runtime.  
| Runtime | Node strict | Node non-strict | Browser |
| ------- | :---------: | :---------------------------: | ------- |
| this | undefined | current module.exports object | window |

### Function

#### Summary

- Using `this` in function/global context, its type depends on who **call it**.
- If the function does not bind to any instance, `this` will point to `global`(`window` in browser).

#### Example

```javascript
var object = {
  name: 'not window',
  func: function() {
    console.log(this.name);
  }
}
object.func(); // 'not window'

// object.func.call() == object.func()
```

In this example, func is called by `object` with `object.func()`, so this will be `object` and `object`'s name is `'not window'`.  
The console will output `'not window'`.

```javascript
var object = {
  name: 'not window',
  func: function() {
    console.log(this.name);
  }
}
var caller = object.func;
caller(); // undefined

// window.caller.call() == caller()
// global.caller.call() == caller()
```

In this example, the caller is called by global context, global context does not have `name` property.  
The console will output `undefined`.

### Arrow Function

#### Summary

- Arrow functions inherit `this` from the context in which they're **created**.

#### Example

```javascript
var object = {
  name: 'not window',
  func: () => {
    console.log(this.name);
  }
}
object.func(); // undefined
```

In this example, the object is created in the global context, so `this` inherits from global its name is undefined.  
The console will output `undefined`.

```javascript
this.name = 'I am global';

var object = {
  name: 'not window',
  func: () => {
    console.log(this.name);
  }
}
object.func(); // I am global
```

In this example, we assign name to `global` , so `this` inherits from the function context `this` which is `global` and its name is `'I am global'`.
The console will output `'I am global'`.

### Event Listener

#### Summary

Using `this` in event listener, `this` will be equal to `event.currentTarget`(not `event.target`).

- Only if `event.eventPhase === 2(AT_TARGET)` then `event.target === event.currentTarget`.

#### Example

```javascript
<label id="lb">
  Label <input type="checkbox" name="chkbox" id="chkbox">
</label>

var label = document.querySelector('#lb');
var checkbox = document.querySelector('#chkbox');

label.addEventListener('click', function (e) {
  console.log('Target. ', e.target.tagName); // Will console 'LABEL' when capturing, console 'INPUT' when bubbling
  console.log('currentTarget. ', e.currentTarget.tagName); // LABEL
  console.log('this. ', this.tagName); // LABEL
}, false);

checkbox.addEventListener('click', function (e) {
  console.log('Target. ', e.target.tagName); // INPUT
  console.log('currentTarget. ', e.currentTarget.tagName); // INPUT
  console.log('this. ', this.tagName); // INPUT
}, false);
```

### Tips

- regardless of how we call the arrow function, `this` in the arrow function will never change.
- Only new object will create a new `this` (otherwise `this` is `global`/`window`).

### Reference

- [What is the 'global' object in NodeJS](https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs)
- [JavaScript This 系列文：this 與物件的關係](https://wcc723.github.io/javascript/2019/03/18/JS-THIS/)
- [重新認識 JavaScript: Day 15 隱藏在 "事件" 之中的秘密](https://ithelp.ithome.com.tw/articles/10192015)

---

[Back to top](../../readme.md)
