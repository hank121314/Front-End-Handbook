## Explicit

### Implicit conversion

In the expression, if the type of `T1` is not acceptable, but `T2` can be accepted T1 will do a conversion.

Here are some situations that will do the implicit conversion.

- `T1` is passed to a function which only accepts `T2`.
- `T1` uses an operator only `T2` can use.
- `T1` is constructed by `T2`(ex. classA a = 1).
- `T1` is a switch expression(`T2` is an integer)
- `T1` is an if expression

### Order of the conversions

1. zero or one standard conversion sequence;
2. zero or one user-defined conversion(one non-explicit single-argument constructor);
3. zero or one standard conversion sequence;