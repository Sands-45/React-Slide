import React, { useState } from "react";
import Main from "./components/main"

const App = () => {
  const [tasks, setTask] = useState([
    {
      title: "Hello 👋",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam omnis fuga eum illo dolore odit, enim exercitationem quos ipsa numquam, ratione eveniet magni debitis illum molestias amet velit maxime",
    },
    {
      title: "Content 2 ✌",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam omnis fuga eum illo dolore odit, enim exercitationem quos ipsa numquam, ratione eveniet magni debitis illum molestias amet velit maxime",
    },
    {
      title: "Item 3 👌",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam omnis fuga eum illo dolore odit, enim exercitationem quos ipsa numquam, ratione eveniet magni debitis illum molestias amet velit maxime",
    },
    {
      title: "Item 4 🤏",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam omnis fuga eum illo dolore odit, enim exercitationem quos ipsa numquam, ratione eveniet magni debitis illum molestias amet velit maxime",
    },
    {
      title: "Item 5 🖐",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam omnis fuga eum illo dolore odit, enim exercitationem quos ipsa numquam, ratione eveniet magni debitis illum molestias amet velit maxime",
    },
  ]);
  return (
    <div>
		<Main tasks={tasks}/>
	</div>
  );
};

export default App;
