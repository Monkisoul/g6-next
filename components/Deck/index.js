import { useState, useEffect } from "react";
// import "./styles.scss";
import Card from "../cards";

const Deck = (props) => {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const response = await fetch(`/api/${props.path}`);
    const data = await response.json();
    console.log(data);
    setCards(data.hand);
  };

  useEffect(() => {
    const settime = setTimeout(() => {
      fetchCards();
    }, 1000);
    return ()=>{
      clearTimeout(settime)
    }
  }, [props.path]);

  return (
    <div>
      {cards.length === 0 ? (
        <div className="loader"> </div>
      ) : (
        <div>
          <h2> {props.title}</h2>
          <div className="deck">
            {" "}
            {cards.map((card, index) => { 
              const number = card.slice(0, -1);
              const symbol = card.slice(-1);
              return (
                <Card
                  symbol={symbol}
                  number={number}
                  key={index}
                  flipped={parseInt(props.flipped) > index}
                />
              );
            })}{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Deck;