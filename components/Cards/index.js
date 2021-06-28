import { useState } from "react";

import styles from "./styles.module.scss";

const Card = (props) => {
  const isNumber = !isNaN(props.number);
  const [isFlipped, setIsFlipped] = useState(props.flipped);
  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      className={[
        "card",
        isFlipped ? "flipped" : "",
        props.symbol,
        props.number,
      ]
        .filter(Boolean)
        .join(" ")}
      number={props.number}
    >
      <div className={styles.container}>
        <div className={styles.back}></div>
        <div className={styles.front}>
          <div
            className={[styles["card-corner"], styles["top-left"]].join(" ")}
          >
            <div> {props.number}</div>
            <div className={styles.symbol}> {props.symbol}</div>
          </div>

          <div className={styles.symbols}>
            {props.number === "A" ? <div> {props.symbol}</div> : ""}

            {props.number === "K" ||
            props.number === "J" ||
            props.number === "Q" ? (
              <div className={styles.image}></div>
            ) : (
              ""
            )}

            {isNumber &&
              new Array(parseInt(props.number))
                .fill(props.symbol)
                .map((cardSymbol, index) => (
                  <div key={index + props.number + props.symbol}>
                    {cardSymbol}
                  </div>
                ))}
          </div>
          <div
            className={[styles["card-corner"], styles["bottom-right"]].join(
              " "
            )}
          >
            <div>{props.number}</div>
            <div className={styles.symbol}>{props.symbol}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
