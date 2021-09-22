
import { useEffect, useState } from 'react';
import './App.css';
import Books from './component/Books/Books';
import Device from './component/Device/Device';

const books = [
  { name: 'Small Giants', author: 'Bo' },
  { name: 'Build to sell', author: 'john' },
  { name: 'Grind it', author: 'Ray' },
  { name: 'Shoe Dog', author: 'Bo' },
]

function App() {
  const [steps, setSteps] = useState(0);
  const handalStepsCount = () => {
    // const newStepsCount = steps + 1;
    // setSteps(newStepsCount);
    //console.log(steps);

    setSteps(steps + 1);
  }

  // state console log kortay  chilay useEffect ar moday kortay hobay and [state k bsitay hobay]

  useEffect(() => {
    console.log(steps);
  }, [steps])

  return (
    <div className="App">
      <h2>My Steps : {steps} </h2>
      <button onClick={handalStepsCount}> Walk</button>
      <Device name="phone" price="15454" />
      <Books books={books} />
    </div>
  );
}

export default App;
