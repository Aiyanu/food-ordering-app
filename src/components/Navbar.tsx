import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            width={32}
            height={32}
            src="/img/telephone.png"
            alt="telephone"
          />
        </div>
        <div className={styles.text}>
          <div className={styles.texts}>Order Now</div>
          <div className={styles.texts}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link style={{textDecoration:"none",color:"white"}} href={"/"}>HomePage</Link>
          </li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={"/img/logo.png"} alt="" width={160} height={69} />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href={"/cart"}>
            <Image src={"/img/cart.png"} alt="" width={30} height={30} />
            <div className={styles.counter}>2</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
