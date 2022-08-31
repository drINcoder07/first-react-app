import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = "John";
  const lastName = "Wick";
  const age = 28;
  const job = "Web Developer";
  const inputPlaceholder = "Enter your details";
  const mArr = [0, 1, 2, 3, 4]

  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }

  const detailsInputBox = <input placeholder={inputPlaceholder}></input>;

  return (
    <div className="App">
      <h3>Full Name: {getFullName(firstName, lastName)}</h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>

      <input placeholder={inputPlaceholder}></input>

      {detailsInputBox}

      {mArr[0]} 
    </div>
  );
}

export default App;
