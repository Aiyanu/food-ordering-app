import React from "react";
import styles from "../styles/PizzaCard.module.css"
import Image from "next/image";

export default function PizzaCard() {
  return <div className={styles.container}>
    <Image src={"/img/pizza.png"} alt="" width={"150"} height={"150"} />
    <h1 className={styles.title}>FIORI DI ZUCCA</h1>
    <span className={styles.price}>$19.90</span>
    <p className={styles.desc}>
    Aliquip reprehenderit fugiat occaecat mollit laborum minim veniam do.
    </p>
  </div>;
}
