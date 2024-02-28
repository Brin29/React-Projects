import "./Header.css"

export default function Header (){
  return(
    <div className="header">
      <h1>Our Collection</h1>
      <p>Introducion our Coffe Collection, a selection of unique coffes from diferent roast types and origins, expertly roasted in small batches and shipped fresh weekly</p>
      <div>
        <button>All Products</button>
        <button>Available Now</button>
      </div>
    </div>
  )
}