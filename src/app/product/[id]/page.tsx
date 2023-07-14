"use client";
import React, { useState } from "react";
import styles from "../../../styles/Product.module.css";
import Image from "next/image";

export default function Product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Ea laboris labore magna esse est fugiat enim magna. Incididunt fugiat do nulla exercitation et irure elit officia ipsum aliqua nostrud. Occaecat nulla consequat nulla excepteur qui. Incididunt aute consectetur culpa do ipsum occaecat ullamco voluptate cillum. In non adipisicing et adipisicing in nulla incididunt ipsum et laboris ullamco officia. Esse aute incididunt eu enim ullamco laborum. Anim veniam ut anim ut cupidatat consectetur laborum do deserunt commodo adipisicing ut laborum elit.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src={pizza.img}
            alt=""
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src={"/img/size.png"} fill={true} alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src={"/img/size.png"} fill={true} alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src={"/img/size.png"} fill={true} alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional Ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="double"
              id="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="cheese"
              id="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="spicy"
              id="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="garlic"
              id="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
              </div>
              <div className={styles.add}>
                  <input type="number" defaultValue={1} className={styles.quantity} />
                  <button className={styles.button}>Add to Cart</button>
              </div>
      </div>
    </div>
  );
}
