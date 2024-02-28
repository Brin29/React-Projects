export default function CoffeCard({img, name, price, rating, votes, popular, available}){
  return(
    <div>
      <img src={img}/>
      <span>{name}</span>
      <span>{price}</span>
      <span>{rating}</span>
      <span>{votes}</span>
      <span>{popular}</span>
      <span>{available}</span>
    </div>
  )
}

CoffeCard.propTypes