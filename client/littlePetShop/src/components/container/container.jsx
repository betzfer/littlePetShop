import styles from "./container.module.css";
import baner from "../../assets/baner.jpg"

const Container = () => {
  return (
    <div className={styles.sobre}>
      <img src={baner} alt="" />
    </div>
  );
};

export default Container;
