## HTML Capturing and Bubbling

### Event Phase

An event will have three kinds of phase:

1. Capturing
2. At target
3. Bubbling

#### Capture

The event object propagates through the target’s ancestors **from the Window to the target’s parent**. This phase is also known as the capturing phase.

#### At Target

The event object arrives at the event object’s event target. This phase is also known as the at-target phase. If the event type indicates that the event doesn’t bubble, then the event object will halt after completion of this phase.

#### Bubble

The event object propagates through the target’s ancestors in reverse order, starting with the **target’s parent and ending with the Window**. This phase is also known as the bubbling phase.

![Capture and Bubble flows](./HTML%20Capture%20and%20Bubble.svg)

### Example

For the example, please try.
[HTML Capture and Bubble.html](./index.html)

In this example, If we click google.com, the console will output

```javascript
"list capture phase", "Capture"
"list_item capture phase", "Capture"
"list_item_link capture phase", "Target"
"list_item_link bubble phase", "Target"
"list_item bubble phase", "Bubble"
"list bubble phase", "Bubble"
```

Some resources might tell you when the event is in the target phase, the order of capture and bubble depends on how you register the event listener.  
But based on commit [Fire capture before bubble handlers at target](https://github.com/chromium/chromium/commit/f73b047b99026f22c60f4541cab98346e9871f65) after chromium 89.0.4359.0, regardless of how you register the event listener, the capture will always fire before the bubble handlers.

### event.stopPropagation()

We can use `event.stopPropagation()` to stop the propagation.

Where you call `event.stopPropagation()` where the event should stop.

```javascript
ul.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log('list capture phase', phase[event.eventPhase]);
}, true);
```

If we add `event.stopPropagation()` at `ul.addEventListener(..., true)`, the console will only output `"list capture phase", "Capture"`.  
That means event propagation stops at the list capture phase since we add `event.stopPropagation()` at the list capture listener.

But If several listeners are attached to the same element for the same event type, `event.stopPropagation` will not prevent it to get trigger.

```javascript
ul.addEventListener('click', function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('list capture phase 1', phase[event.eventPhase]); // list capture phase 1
}, true);
ul.addEventListener('click', function (event) {
  console.log('list capture phase 2', phase[event.eventPhase]); // list capture phase 2
}, true);
```

### event.stopImmediatePropagation()

In the section above, it mentions if several listeners are attached to the same element for the same event type, `event.stopPropagation` will not do the work.

Here introduce another function to do this work, `event.stopImmediatePropagation`.  
We can use `event.stopImmediatePropagation` to stop not only the propagation but also the listener with the same element for the same event type.

```javascript
ul.addEventListener('click', function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  console.log('list capture phase 1', phase[event.eventPhase]); // list capture phase 1
}, true);
ul.addEventListener('click', function (event) {
  console.log('list capture phase 2', phase[event.eventPhase]);
}, true);
```

### Reference

- [Capturing event listeners are called during bubbling phase for shadow hosts #685](https://github.com/whatwg/dom/issues/685)
- [W3C UI Event](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
- [DOM Standard](https://dom.spec.whatwg.org/#dispatching-events)
- [DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

---

[Back to top](../../../readme.md)
