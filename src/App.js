import React, { useState } from "react";
// import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";
// import Accordion from "./component/Accordion";
// import Search from "./component/Search";

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

// const options = [
//   { label: "The Color Red", value: "red" },
//   { label: "The Color Green", value: "green" },
//   { label: "The Color Blue", value: "blue" },
// ];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        selected={selected}
        setSelected={setSelected}
        options={options}
      /> */}
      <Translate />
    </div>
  );
};

export default App;
