import styles from "./style.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
export function SinginButton() {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#84d361" />
      User Name
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#EBA417" />
      Sing in with Github
    </button>
  );
}
