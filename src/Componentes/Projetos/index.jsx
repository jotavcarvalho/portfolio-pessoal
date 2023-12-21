import React from 'react';
import CardProjetos from '../CardProjetos';
import { projetos } from '../../Colecoes/colecao-projetos';
import './index.css';

export default function Projetos({temaAtual}) {
  const projeto = "projetos" + (temaAtual ? "" : "-modo-escuro");
  const showProjetos = "container-projetos" + (temaAtual ? "" : "-modo-escuro");
  const titulo = "titulo-projeto" + (temaAtual ? "" : "-modo-escuro");
  return ( 
    <section className={projeto} id="projetos">
        <div className="limite-largura projetos-content">
        <h2 className={titulo}>Projetos</h2>
        <div className={showProjetos}>
          {
            projetos.map((projeto) => (
              <CardProjetos temaAtual={temaAtual}
              key = {projeto.id}
              projeto = {projeto}
              />

            ))}
        </div>
      </div>
    </section>
  )
}
