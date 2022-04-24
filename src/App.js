import React from "react";
import Accordion from "./component/Accordion";

const App = () => {

  items = [
    {title: "What is React?",
      content: "React is a frontend framework",},{title: "Why use React?",
        content: "It is regularly maintained and optimised",},{title: "Who uses React?",
          content: "A ton of engineers since it's favouraited amongst them",},
  ]

  return (
    <div>
      <Accordion />
    </div>
  );
};

export default App;
