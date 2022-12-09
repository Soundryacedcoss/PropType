import './App.css';
import { Child1 } from './TAsk1/Child1';
import { Tsk2Child1 } from './Task2/Tsk2Child1';
import { Tsk3Child1 } from './Task3/Tsk3Child1';
function App() {
  return (
    <div className="App">
        <h2>Props type</h2>
        <Child1/>
        <hr />
        <Tsk2Child1/>
        <hr />
        <Tsk3Child1/>
    </div>
  );
}

export default App;
