import logo from './logo.svg';
import './App.css';

function App() {

  const [first, setFirst ] = useState('');
  const [second, setSecond ] = useState('');
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
    if (operation  == "addition"){
      setResult(parseFloat(first) + parseFloat(second));
    }
    else if (operation  == "subtraction"){
      setResult(parseFloat(first) - parseFloat(second));
    }
    else if (operation  == "multiply"){
      setResult(parseFloat(first) * parseFloat(second));
    }
    else if (operation  == "divide"){
      setResult(parseFloat(first) / parseFloat(second));
    }
    else{
      setResult('');
    }
      
    }
  };

  return (
    <>
      <div className="App">

      </div>
    </>
  );
}

export default App;
