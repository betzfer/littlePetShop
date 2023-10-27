import styles from "./nav.module.css";
import logo from "../../assets/loguinho.jpg";

const Nav = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.q}>
        <img src={logo} alt="logo da devSteam" width={"72"} />
        <li>Sobre Nós</li>
        <li>Adoção</li>
        <li>Loja</li>
      </div>
      <input type="text" placeholder="Buscar" />
    </div>
  );
};

export default Nav;
