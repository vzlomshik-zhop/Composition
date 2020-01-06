'use strict';

const pipe = (...fns) => {
  const n = fns.length;
  let event_handler = (e) => undefined;
  const fn = (x) => {
    try {
      let a = x;
      for (let i = n - 1; i >= 0; i--)
        a = fns[i](a);
      return a;
    } catch (e) {
      return event_handler(e);
    }
  }
  fn.on = (type, new_handler) => {
    if (type === "error")
      event_handler = new_handler;
  }
  return fn;
}

module.exports = { compose };
