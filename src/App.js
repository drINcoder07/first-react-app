import './App.css';

function App() {

  const blogArr = [
    {
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    },
    {
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    },
    {
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    }
  ]

  const blogCards = blogArr.map((item, pos) => {
    console.log(item);

    return (
      <div className='blogCard' key={pos}>
      <h3>{item.title}</h3>
      <p>{item.description}
      </p>
      </div>
    )
  })

  // const styles = 

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
