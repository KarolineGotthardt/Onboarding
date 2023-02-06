import Todo from "./components/Todo";

/*
React Component
returns React Element in JSX (Combination of JavaScript & HTML Syntax) to render what you see in the browser
 */
function App() {
  const userName = "Karoline";
  const todoName = "Todo List";
  const userTodos = [
    "Water Plant",
    "Watch React Tutorial",
    "View Project Code",
    "Ask for Adapter",
  ];

  return (
    <div>
      <h1>{`${userName}'s ${todoName}`}</h1>
      <Todo text={userTodos[0]} />
      <br />
      <Todo text={userTodos[1]} />
      <br />
      <Todo text="View Project Code" />
      <br />
      <Todo text="Ask for Adapter" />
    </div>
  );
}

export default App;
