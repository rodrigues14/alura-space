import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import styles from "./PaginaInicial.module.scss"
import Banner from '../../componentes/Banner';
import Rodape from "../../componentes/Rodape";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
      </main>
      <Rodape />
      
    </>
  )
}