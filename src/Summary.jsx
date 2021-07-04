import './Summary.css'

export default function Summary (data) {
  console.log(data.data.productCode)
  // const { exampleProduct } = data
  
  return (
    <main>
      <div className="container">
        <div className="summary-header">
          <h1>Product Summary</h1>
          <h2>{data.data.productCode}</h2>
        </div>
      </div>
    </main>
  )
}