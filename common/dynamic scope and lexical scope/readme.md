## Scope

### What is scope?

Scope refers to the visibility of variables and methods in one part of a program to another part of that program.


- local scope: Variables or methods that have local scope (and for object-oriented programming, this includes instances of classes) are accessible only in the current block of code.
- global scope: All of the variables defined at the very beginning of a program are available to the entire program.

```cpp
int add(int a, int b) {// ⌝               ⌝
  return a + b;        // | local scope   |
}                      // ⌟               |  
//                                        | global scope
int main() { // ⌝                         |
  int a = 0; // |  local scope            |
  return a;  // |                         |
}            // ⌟                         ⌟
```

### Lexical scope
In this scoping a variable always refers to its top level environment.  
```cpp
void func() {
    int x = 5;

    void func2() {
        printf("%d", x);
    }
}
```
`func2` use variable `x` is in the same local scope `func`, so the console will output `5`.  
No matters how the function is getting executed, it will always refer to the variable in its scope.


### Dynamic scope
In this scoping a variable refers dynamically.  
```cpp
void func2() {
  printf("%d", x);
}

void func() {
  int x = 5;
  func2();
}
```
In `func2` scope, there is no variable `x`, but when we execute `func2` in `func`, `func2` can use the variables in `func` scope.   
The console will still output `5` in dynamic scope languages.

In general, dynamic scope defines their scope at runtime :smile: . 


### Reference 
- [Static and Dynamic Scoping](https://www.geeksforgeeks.org/static-and-dynamic-scoping/)
- [Introduction to Programming/Scope -Wikiversity](https://en.wikiversity.org/wiki/Introduction_to_Programming/Scope)
- [What is lexical scope? -Stack Overflow](https://stackoverflow.com/questions/1047454/what-is-lexical-scope)


---

[Back to top](../../readme.md)