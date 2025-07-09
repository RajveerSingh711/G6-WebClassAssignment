console.log("SCRIPT STARTS");

// //CURRYING FUNCTION

// function sumofthreeNumbers(a, b, c) {
//   console.log(a + b + c);
//   return a + b + c;
// }

// sumofthreeNumbers(2, 4, 6);

// function subwayOrder(bread, patty, cheese) {
//   console.log(`My bread ${bread} with patty: ${patty} and cheese:${cheese}`);
// }

// subwayOrder("MULTIGRAIN", "ALOO", "WITH CHEESE");

// function subwayOrder2(bread) {
//   return function (patty) {
//     return function (cheese) {
//       console.log(
//         `My bread ${bread} with patty: ${patty} and cheese:${cheese}`
//       );
//     };
//   };
// }

// subwayOrder2("ORIGANO", "CHICKEN", "WITH CHEESE");

//event - if we click a button in the web page or scrolling the page or we hovering any thing that is event every function that is working in our web page is called event
//addevenlistener - it is a function that is used to listen to the event and perform some action when the event occurs

//event listener

//DOM- Document Object Model - it is a tree like structure that

// const container1 = document.getElementById("container1");

// container1.addEventListener("click", () => {
//   console.log("THIS IS THE CONTAINER 1");
// });

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", () => {
  console.log("RED DIV CALLED");
},true);

parent.addEventListener("click", () => {
  console.log("GREEN DIV CALLED");
},true);

child.addEventListener("click", () => {
  console.log("BLUE DIV CALLED");
},true);


//if we add true event capturing occur from top to bottom else bubbling occurs from bottom to top