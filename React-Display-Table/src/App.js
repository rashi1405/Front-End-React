import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [show, setShow] = useState(false);

  const showTable = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="App">
      <button onClick={showTable}>Click Here</button>
      {show && <Child />}
    </div>
  );
}

export default App;
