import "./App.css";
import UseReducerExample from "./hooks/UseReducerExample";
import UseStateExample from "./hooks/UseStateExample";
import UseEffectExample from "./hooks/UseEffectExample";
import UseRefExample from "./hooks/UseRefExample";
function App() {
  return (
    <div className="App">
      <UseStateExample />
      <UseReducerExample />
      <UseEffectExample />
      <UseRefExample />
    </div>
  );
}

export default App;
