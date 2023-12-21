import React from 'react';
import './index.css';

export default function CardProjetos({ projeto, temaAtual }) {

    const card = "principal" + (temaAtual ? "" : "-modo-escuro");
    const btn = "btn" + (temaAtual ? "" : "-modo-escuro");
    return (
        <div className={card}>
            <div className="imagem">
                <a href={projeto.urlSite} target='_blank'><img src={projeto.imagem} /></a>
            </div>
            <p>{projeto.nome}</p>
            <p>{projeto.descricao}</p>
            <p>Para esse projeto foram utilizadas as tecnologias:</p>
            <p>{projeto.tecnologias}</p>
            <div className={btn}>
                <a  href={projeto.urlSite} target='_blank'>Visite o Site</a>
                <a  href={projeto.urlCode} target='_blank'>Veja o Código</a>
            </div>
        </div >
    )
}
