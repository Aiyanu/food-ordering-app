import Image from "next/image";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return <div className={styles.container}>
    <div className={styles.item}>
      <div className={styles.callButton}>
        <Image width={32} height={32}  src="/img/telephone.png" alt="telephone"/>
      </div>
      <div className={styles.text}>
        <div className={styles.texts}>Order Now</div>
        <div className={styles.texts}>012 345 678</div>
      </div>
    </div>
  </div>;
}
