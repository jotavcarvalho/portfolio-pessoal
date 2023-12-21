import React from 'react';
import './index.css';

export default function Sobre({ temaAtual }) {

  const sobre = "sobre" + (temaAtual ? "" : "-modo-escuro");
  const sobreTitle = "titulo" + (temaAtual ? "" : "-modo-escuro");
  const paragrafoSobre = "paragrafo" + (temaAtual ? "" : "-modo-escuro");
  return (
    <section className={sobre} id="sobre">
      <div className="limite-largura sobre-content">
        <h2 className={sobreTitle}>Sobre Mim</h2>
        <p className={paragrafoSobre}>
          <p className="agrupa-inicio">
            Programador Front-end, estudante de Gestão da tecnologia da informação.
            <p>Conhecimento das tecnologias <span className='span-tecnologias'>React</span>, <span className='span-tecnologias'> HTML</span>,
              <span className='span-tecnologias'> CSS</span>, <span className='span-tecnologias'> JavaScript</span>,
              <span className='span-tecnologias'> Git</span>, <span className='span-tecnologias'> MySQL</span> e
              <span className='span-tecnologias'> SQL Server</span>.</p>
            <p>Em desenvolvimento no estudo de <span className='span-tecnologias'>API Rest</span>.</p>
          </p>
        </p>
      </div>
    </section>
  )
}
