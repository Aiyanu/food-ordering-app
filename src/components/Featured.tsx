"use client";
import { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

export default function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  const handleArrow = (direction: string) => {
    if (!direction){}
    if ((direction = "l")) {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if ((direction = "r")) {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src={"/img/arrowl.png"}
          alt="left"
          fill={true}
          style={{objectFit:"contain"}}
        />
      </div>
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)`}}>
        {images &&
          images.map((img, index) => (
            <div key={index} className={styles.imgContainer}>
              <Image src={img} alt="" fill={true} style={{objectFit:"contain"}}/>
            </div>
          ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src={"/img/arrowr.png"}
          alt="right"
          fill={true}
        style={{objectFit:"contain"}}/>
      </div>
    </div>
  );
}
