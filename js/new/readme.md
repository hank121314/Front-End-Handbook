## Function with `new`

### Summary

If function return object, `new` will return the object that function return.  
If the function does not have a return statement or it returns a value of a type other than object, new will return it **self**.

### Example
```javascript
var Creator = function() {
  this.name = 'Creator 1';

  return {}
}
const person = new Creator();
console.log(person.name); // undefined
```
In this example, `new Creator()` return an object literal with an empty property, so the person will be that empty property.  

```javascript
var Creator = function() {
  this.name = 'Creator 1';

  return 1
}
const person = new Creator();
console.log(person.name); // Creator 1
```
In this example, `new Creator()` return a number that is not an object. so the person will be itself.



### Reference

[ECMAScript Language Specification 13.2.2](https://262.ecma-international.org/5.1/#sec-13.2.2)


---

[Back to top](../../readme.md)