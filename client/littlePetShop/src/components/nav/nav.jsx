import styles from "./nav.module.css";
import logo from "../../assets/loguinho.jpg";

const Nav = () => {
  return (
    <div className={styles.bar}>
      <div>
        <img src={logo} alt="logo da devSteam" width={"72"} />
      </div>
      <input type="text" placeholder="Buscar" />
    </div>
  );
};

export default Nav;
