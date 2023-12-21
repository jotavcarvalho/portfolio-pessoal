import React from 'react';
import { tecnologias } from '../../Colecoes/colecao-tecnologias';
import CardTecnologia from '../CardTecnologia';
import './index.css';

export default function Tecnologias({temaAtual}) {

    const tecnologiaBg = "tecnologia" + (temaAtual ? "" : "-modo-escuro");
    const titleTec = "titulo" + (temaAtual ? "" : "-modo-escuro");
    const showTec = "container-tecnologias" + (temaAtual ? "" : "-modo-escuro");

  return (
    <section className={tecnologiaBg} id="tecnologias">
      <div className="limite-largura tecnologias-content">
        <h2 className={titleTec}>Tecnologias</h2>
        <div className={showTec}>
          {
            tecnologias.map((tecnologia) => (
              <CardTecnologia temaAtual={temaAtual}
              key={ tecnologia.id }
              tecnologia={ tecnologia }
              />
            ))}
        </div>
      </div>
    </section>
  )
}
