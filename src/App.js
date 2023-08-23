import './App.css';
import Button from './components/buttons';
import NumberInput from './components/input';
import { useState } from 'react';
function App() {

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('');

  const handleFirstChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {  //check kung positive or negative yung input
      setFirst(value);
    }
  };

  const handleSecondChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setSecond(value);
    }
  };

  const handleOperations = (operation) => {
    if (operation === 'addition') {
      setResult(parseFloat(first) + parseFloat(second));
    }
    else if (operation === 'subtraction') {
      setResult(parseFloat(first) - parseFloat(second));
    }
    else if (operation === 'multiply') {
      setResult(parseFloat(first) * parseFloat(second));
    }
    else if (operation === 'divide') {
      setResult(parseFloat(first) / parseFloat(second));
    }
    else {
      setResult('');
    }
  };


  return (
    <>
      <div className="App">
        <div className="TitleBg">
          <h1>Allaisa Soriano's Activity</h1>
        </div>
        <div className ="Buttons"> 
          <NumberInput value={first} onChange={handleFirstChange} placeholder="First number" />
          <NumberInput value={second} onChange={handleSecondChange} placeholder="Second number" />
        </div>
        <div className="Operations">
          <Button onClick={() => handleOperations('addition')}>Add</Button>
          <Button onClick={() => handleOperations('subtraction')}>Subtract</Button>
          <Button onClick={() => handleOperations('multiply')}>Multiply</Button>
          <Button onClick={() => handleOperations('divide')}>Divide</Button>

        </div>
        <h1>Answer is: {result}</h1>
      </div>
    </>
  );
}

export default App;
