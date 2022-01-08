import styles from "../../../styles/jogo.module.css";
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Jogo() {
  const router = useRouter()
  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState([]);
  
  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePortasValida = portas >= 3 && portas <= 50
    const temPresenteValido = temPresente >= 1 && temPresente <= portas
    
    setValido(qtdePortasValida && temPresenteValido)
  },[portas, router.query.portas, router.query.temPresente])

  // validação 

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  },[router?.query])
 

  console.log(router?.query)

  // através do recurso router criou a navegação através da query( useRouter do next.js)
  // pasta e arquivo criados com []=> [dentro.tsx] => exemplo 

  function renderizarPortas() {
    return  portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
          {valido ?
          renderizarPortas():
          <h1>Valores Inválidos</h1>
        
        }
          </div>
          <div className={styles.botoes}>
              <Link href={"/"} passHref>
                  <button>Reniciar Jogo</button>
              </Link>

          </div>
    </div>
  );
}
