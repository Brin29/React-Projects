import "./CoffeCard.css"

export default function CoffeCard({img, name, price, rating, votes, popular, available}){
  return(
    <div className="container-card">
      {popular ? (<span className="popular"> Popular</span>) :  null}
      <img className="imagen" src={img}/>
      <div className="nombre-precio">
        <span className="nombre">{name}</span>
        <span className="precio">{price}</span>
      </div>
      <div className="rating-votes">
        <span className="rate">{rating}</span>
        <span className="votos">({votes} votes)</span>
        {!available ? <span className="disponible">Sold out</span> : null}
      </div>
    </div>
  )
}

CoffeCard.propTypes