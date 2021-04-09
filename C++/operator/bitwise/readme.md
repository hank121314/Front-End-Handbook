## Instructions on bitwise in C++

### Prevent branch prediction

#### Example:

1. with branch prediction:

```cpp
/** 
* Sum from an array which elements is bigger than 128;
*/
int sum = 0;
if (data[c] >= 128) {
sum += data[c];
}
```

2. without branch prediction:

```cpp
int sum = 0;
// in 32 bits machine digits will be 31;
int digits = std::numeric_limits<int>::digits;
/** 
* if data[c] - 128 is bigger than -1 and its shift right for 31 bits,
* it will become 0.
* Because >> will shift byte right with its highest bit, positive interger 
* highest bits will always be 0. And according to 
* std::numeric_limits<int>::digits;,
* we know that integer can only contain 31 bits. 
* So we just change all 31 bits to 0.
* For negative integer, highest bit is 1, So we change all 31 bits to 1 = -1;
* In short, res will be 0 if data[c] >= 128 and will be -1 if data[c] < 128;
*/
int res = (data[c] - 128) >> digits;
/**
* As mentioned above, res will always be 0 or -1, 
* 0 do ~(Not operator) will become -1,
* -1 do ~ will become 0.
* if -1 do & with some element it will be same as previous,
* Example -1 & 123
* ===========================================================
*     -1	11111111111111111111111111111111	-0x1
* &	123	00000000000000000000000001111011	0x7b
* =	123	00000000000000000000000001111011	0x7b
* ===========================================================
* if 0 do & with some element it will turn it into 0.
* ===========================================================
* 0	        000000000000000000000000	0x0
* &	999999	000011110100001000111111	0xf423f
* =	0	      000000000000000000000000	0x0
* ===========================================================
*/
sum += ~res & data[c];
```

---

[Back to top](../../../readme.md)