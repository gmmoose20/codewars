// function updateLight(current) {
//   //your code here!
//   switch (current) {
//     case "green":
//       // code block
//       return "yellow";
//       break;
//     case "yellow":
//       // code block
//       return "red";
//       break;
//     default:
//       // code block
//       return "green";
//   }
// }

// const updateLight = (current) => {
//   return current === "green"
//     ? "yellow"
//     : current === "yellow"
//     ? "red"
//     : "green";
// };

const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");
