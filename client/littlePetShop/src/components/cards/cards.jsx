import styles from "./cards.module.css";

const Card = ({ title }) => {
  return (
    <div className={styles.card}>
      <img
        src={`/src/assets/produtos/${title}.jpg`}
        alt=""
        width={250}
        height={300}
      />
      <div className={styles.info}>
          </div>
        </div>
  );
};

export default Card;
