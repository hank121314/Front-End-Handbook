## constexpr

### Introduction

> constexpr indicates that the value, or return value, is constant and, where possible, is computed at compile time.                      -from Microsoft Docs


### Syntax

```cpp
constexpr literal-type identifier = constant-expression ;
constexpr literal-type identifier { constant-expression } ;
constexpr literal-type identifier ( params ) ;
constexpr ctor ( params ) ;
```