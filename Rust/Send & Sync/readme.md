## Send

### Summary

Allowing Transference of Ownership Between Threads with Send

### Description

A type is `Send` if it is safe to send it to another thread.  
`Send` allows an object to be used by two threads A and B at **different** times.  
Thread A can create and use an object, then send it to thread B, so thread B can use the object while thread A cannot.  

## Sync

### Summary

Allowing Access from Multiple Threads with Sync

### Description

A type is `Sync` if it is safe to share between threads (`T` is `Sync` if and only if `&T` is `Send`).  
`Sync` allow an object to be used by two threads at the **same** times.  
This is trivial for non-mutable objects, but mutations need to be synchronized.  


## Tips

- Any struct that does not contain any reference can be `Send + 'static`
- Any struct that contain references with a lower-bound lifetime of `'a` can be `Send + 'a`

## Reference

- [Send and Sync](https://doc.rust-lang.org/nomicon/send-and-sync.html)
- [Understanding the Send trait - StackOverflow](https://stackoverflow.com/questions/59428096/understanding-the-send-trait)

---

[Back to top](../../readme.md)