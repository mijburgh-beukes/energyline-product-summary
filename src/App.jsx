import './App.css';
import jsonData from './example_data.json';
import Summary from './Summary'

function App() {

  const exampleProduct = JSON.parse(JSON.stringify(jsonData));

  // You can view the entire example product structure in the browser console.
  console.log(exampleProduct)

  return (
    <div className="App">
      <Summary data={exampleProduct}/>
    </div>
  );
}

export default App;
