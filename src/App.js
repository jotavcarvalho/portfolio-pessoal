import React, { useState } from 'react';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import Sun from './assets/sun.png';
import Moon from './assets/moon.png';
import Sobre from './Componentes/Sobre';
import Tecnologias from './Componentes/Tecnologias';
import Projetos from './Componentes/Projetos';
import './App.css';

export default function App() {
    const [temaAtual, setTemaAtual] = useState(true);
    const [imagemBotao, setImagemBotao] = useState(Moon);

    const alterarTema = () => {
        setTemaAtual(!temaAtual);
        temaAtual ? setImagemBotao(Sun) : setImagemBotao(Moon);
    }

    return (
        <div>
            <Header temaAtual={temaAtual} alterarTema={alterarTema} imagemBotao={imagemBotao} />
            <Banner temaAtual={temaAtual} />
            <Sobre temaAtual={temaAtual} />
            <Tecnologias temaAtual={temaAtual} />
            <Projetos temaAtual={temaAtual} />
        </div>
    );
}
