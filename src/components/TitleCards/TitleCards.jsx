import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";

function TitleCards({ title, category }) {
  const cardsRef = useRef();
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  /*
  const [movies, setMovies] = useState([]) ;


  const getMovies = async () => {
    try{
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=601822a4&s=${category}`);
      const data = await response.json() ;
      console.log(data)
      console.log(data.Search)

      setMovies(data.Search) ;
    }
    catch(err){
      console.log(err) ;
    }
  }
*/

  useEffect(() => {
    /*
      getMovies() ;
    */
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCards;
