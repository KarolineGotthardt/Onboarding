/*
React Component
returns React Element in JSX (Combination of JavaScript & HTML Syntax) to render what you see in the browser
 */
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="card">
        <h2>TITLE</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
