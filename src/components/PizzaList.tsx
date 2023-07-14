import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
export default function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Do duis laboris consequat voluptate id ut non esse. Consequat eu in
        irure laboris magna elit veniam Lorem laboris. Culpa esse ut fugiat
        fugiat cupidatat. Tempor dolor ex aliqua adipisicing elit consectetur
        mollit dolore voluptate exercitation eiusmod et incididunt.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
      </div>
    </div>
  );
}
