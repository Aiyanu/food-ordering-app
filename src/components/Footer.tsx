import React from "react";
import styles from "../styles/Footer.module.css"
import Image from "next/image";

export default function Footer() {
  return <div className={styles.container}>
    <div className={styles.item}>
      <Image src={"/img/bg.png"} fill={ true} alt="" />
    </div>
    <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
          OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE PIZZA
        </h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>
          FIND OUR RESTAURANT
        </h1>
        <p className={styles.text}>
          1654 R. Don Road #304
          <br /> New York 85022
          <br /> (602) 867-1010
        </p>
        <p className={styles.text}>
          1654 R. Don Road #304
          <br /> New York 85022
          <br /> (602) 867-1010
        </p>
        <p className={styles.text}>
          1654 R. Don Road #304
          <br /> New York 85022
          <br /> (602) 867-1010
        </p>
        <p className={styles.text}>
          1654 R. Don Road #304
          <br /> New York 85022
          <br /> (602) 867-1010
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY TO FRIDAY
          <br /> 9:00 -22:00
        </p>
        <p className={styles.text}>
          SATURDAY AND SUNDAY
          <br /> 12:00 -24:00
        </p>
      </div>
    </div>
  </div>;
}
