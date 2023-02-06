import Todo from "./components/Todo";

/*
React Component
returns React Element in JSX (Combination of JavaScript & HTML Syntax) to render what you see in the browser
 */
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo />
        <br/>
      <Todo />
        <br/>
      <Todo />
        <br/>
      <Todo />
    </div>
  );
}

export default App;
