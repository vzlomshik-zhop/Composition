'use strict';

const pipe = (...fns) => {
  const n = fns.length;
  let i = 0;
  while (i < n && typeof(fns[i]) === "function")
    i++;
  if (i != n)
    throw "Error";
  return (x) => {
    let a = x;
    for (let i = 0; i < n; i++)
      a = fns[i](a);
    return a;
  }
}

module.exports = { pipe };
