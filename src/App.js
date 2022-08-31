import logo from './logo.svg';
import './App.css';

function App() {
  const blogObj = {
    title: 'Blog Title 1',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
  }

  // const styles = 

  return (
    <div className="App">
      <div className='blogCard'>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}
        </p>
      </div>
      <hr></hr>
      <div className='blogCard'>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}
        </p>
      </div>
      <hr></hr>
      <div className='blogCard'>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}
        </p>
      </div>
    </div>
  );
}

export default App;
