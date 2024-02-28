import "./Main.css"
import { useEffect, useState } from "react"
import CoffeCard from "./CoffeCard"

export default function Main (){
  const [coffes, setCoffe] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
    .then(res => res.json())
    .then(json => {
      json.forEach(el => {
        let coffe = {
          id: el.id,
          name: el.name,
          image: el.image,
          price: el.price,
          rating: el.rating,
          votes: el.votes,
          popular: el.popular,
          available: el.available
        }
        // setCoffe(coffes => [...valorAnterior, nuevoValor]) destructuring para no mutar el array
        setCoffe(coffes => [...coffes, coffe])
      })
    })
    }, [])
    
  return (
    <>
    <div className="main-card">
      {coffes.length === 0 ? 
        (<h2>Cargando...</h2>) : 
        ( 
          coffes.map((el) => {
            return (
              <CoffeCard 
              key={el.id} 
              img={el.image} 
              name={el.name} 
              price={el.price} 
              rating={el.rating}
              votes={el.votes}
              popular={el.popular}
              available={el.available}
              />
            )
          })
        )
      }
    </div>
  </>
  )
}