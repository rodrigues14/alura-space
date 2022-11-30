import styles from "./PaginaInicial.module.scss"

import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Banner from 'componentes/Banner';
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
        <Rodape />
      </main>
    </>
  )
}