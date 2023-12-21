import React from 'react';
import './index.css';

export default function CardTecnologia({ tecnologia, temaAtual }) {

    const Card = "card-container" + (temaAtual ? "" : "-modo-escuro" );

    return (
        <div className={Card}>
            <div className="img-tec">
                {tecnologia.icon}
            </div>
            <div className="nome-tec">
                <p>{tecnologia.nome}</p>
            </div>
        </div>
    )
}
