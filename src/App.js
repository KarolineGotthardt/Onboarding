import Todo from "./components/Todo";

/*
React Component
returns React Element in JSX (Combination of JavaScript & HTML Syntax) to render what you see in the browser
 */
function App() {
  const userName = "Karoline";
  const organizationType = "Todo List";

  return (
    <div>
      <h1>{`${userName}'s ${organizationType}`}</h1>
      <Todo text="Water Plant" />
      <br />
      <Todo text="Learn React" />
      <br />
      <Todo text="View Project Code" />
      <br />
      <Todo text="Ask for Adapter" />
    </div>
  );
}

export default App;
