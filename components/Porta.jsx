import styles from "../styles/Porta.module.css";

export default function Porta(props) {
  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${styles.selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>3</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}


// div area abraça a div estrutura, div estrutura abraça porta e numero, div porta abraça a div numero
// a div chão faz parte da div area
