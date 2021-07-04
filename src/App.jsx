import './App.css';
import jsonData from './example_data.json';
import Summary from './Summary'

function App() {

  const exampleProduct = JSON.parse(JSON.stringify(jsonData));

  // You can view the entire example product structure in the browser console.
  console.log(exampleProduct)

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </nav>
      </header>
      <Summary data={exampleProduct}/>
    </div>
  );
}

export default App;
