import './App.css';
import jsonData from './example_data.json';

function App() {

  const exampleProduct = JSON.parse(JSON.stringify(jsonData));

  // You can view the entire example product structure in the browser console.
  console.log(exampleProduct)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h2>Product Description:</h2>
          <div>{exampleProduct.productDescription}</div>
        </p>
      </header>
    </div>
  );
}

export default App;
