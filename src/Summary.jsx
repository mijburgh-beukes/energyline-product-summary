import './Summary.css'

export default function Summary ({ data }) {
  console.log(data)

  const { productFeatures } = data
  
  return (
    <main>
      <div className="container">

        <div className="summary-header">
          <h1>Product Summary</h1>
          <img src={data.productImage} alt={`Render of Energyline 65 ${data.productCode}`}/>
          <h2>{data.productCode}</h2>
        </div> {/* summary-header */}
        
        <div className="summary-body">
          
          <div className="summary-body-description">
            <p>{data.productDescription}</p>
            <h3>Features</h3>
            <ul>{productFeatures.map(feat => <li>{feat}</li>)}</ul>
          </div>
          
          <div className="summary-body-config">
            <h3 className="config-head">Configuration</h3>

            <h4 className="config-category">Mounting method</h4>
            <p className="config-option">{data.mountingMethod}</p>

            <h4 className="config-category">Fixture length</h4>
            <p className="config-option">{data.fixtureLength}</p>

            <h4 className="config-category">Direct distribution</h4>
            <p className="config-option">{data.directDistribution}</p>

            <h4 className="config-category">Direct lumens</h4>
            <p className="config-option">{data.directLumens}</p>
          </div>
        
        </div> {/* summary-body */}
      
      </div> {/* container */}
    </main>
  )
}