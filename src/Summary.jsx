import './Summary.css'

export default function Summary ({ data }) {

  const { productFeatures } = data
  
  return (
    <main>
      <div className="container">

        <div className="summary-header">
          <h1 className="summary-h1">Product Summary</h1>
          <img src={data.productImage} alt={`Render of Energyline 65 ${data.productCode}`}/>
          <h2 className="summary-h2">{data.productCode}</h2>
        </div> {/* summary-header */}
        
        <div className="summary-body">
          
          <div className="summary-body-description">
            <p className="summary-body-intro">{data.productDescription}</p>
            <h3 className="summary-h3">Features</h3>
            {/* Map over product features array to automatically list all items */}
            <ul>{productFeatures.map((feat, i) => <li key={i}>{feat}</li>)}</ul>
          </div>
          
          <div className="summary-body-config">
            <h3 className="config-h3">Configuration</h3>

            <h4 className="config-h4">Mounting method</h4>
            <p className="config-option">{data.mountingMethod}</p>

            <h4 className="config-h4">Fixture length</h4>
            <p className="config-option">{`${data.fixtureLength}mm`}</p>

            <h4 className="config-h4">Direct distribution</h4>
            <p className="config-option">{data.directDistribution}</p>

            <h4 className="config-h4">Direct lumens</h4>
            <p className="config-option">{data.directLumens}</p>
          </div>
        
        </div> {/* summary-body */}
      
      </div> {/* container */}
    </main>
  )
}