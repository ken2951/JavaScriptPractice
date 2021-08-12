const multiply = (x, y, z) => {
  return x * y * z;
};

// console.log(multiply(1, 2, 3));

const zerocho = {
  name: {
    first: "현영",
    last: "조",
  },
  gender: "m",
};

console.log(zerocho.name.last);
console.log(zerocho.name["last"]);
console.log(zerocho["name.last"]);
console.log(zerocho["name[last]"]);
