import React from "react";
// import Accordion from "./component/Accordion";
import Search from "./component/Search";

// const items = [
//   { title: "What is React?", content: "React is a frontend framework" },
//   {
//     title: "Why use React?",
//     content: "It is regularly maintained and optimised",
//   },
//   {
//     title: "Who uses React?",
//     content: "A ton of engineers since it's favouraited amongst them",
//   },
// ];
const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
