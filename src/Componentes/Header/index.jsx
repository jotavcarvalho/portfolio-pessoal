import React, { useEffect, useState } from 'react';
import './index.css';

export default function Header({ temaAtual, alterarTema, imagemBotao }) {

    // criando state e verificando tema ao realizar o scroll
    const [isScrolled, setIsScrolled] = useState(false);

    // scroll do menu
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY > 100);
        })
    }, [])

    // caso haja o scroll a class scroll-menu + o tema sera aplicado, caso não haja o scroll permanece a classe original (tema-claro e tema-escuro)
    const temaClaro = isScrolled ? "scroll-menu tema-claro" : "tema-claro";
    const temaEscuro = isScrolled ? "scroll-menu tema-escuro" : "tema-escuro";


    // ... (importações e código anterior)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={temaAtual ? temaClaro : temaEscuro} id="header">
            <div className="limite-largura header-content">
                <div className={temaAtual ? 'logo tema-claro' : ' logo-modo-escuro tema-escuro'}>
                    <h2><a href="#banner">{"<João"} <span>Carvalho</span>{"/>"}</a></h2>
                </div>
                <div className={`icon ${isMenuOpen ? 'icon-menu-open' : ''}`} onClick={toggleMenu}>
                    <div className='hamburguer-menu'></div>
                </div>
                <nav className={`menu-link ${isMenuOpen ? 'open-menu' : 'close-menu'}`}>
                    <ul className={`list-itens ${temaAtual ? 'tema-claro' : 'tema-escuro'}`} onClick={() => setIsMenuOpen(false)}>
                        <li><a href="#banner">Home</a></li>
                        <li><a href="#sobre">Sobre Mim</a></li>
                        <li><a href="#tecnologias">Tecnologias</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                    </ul>
                </nav>
                <button className={`botao ${temaAtual ? 'tema-claro' : 'botao-modo-escuro tema-escuro'}`} onClick={alterarTema}>
                    <img src={imagemBotao} alt="Alterar Tema" />
                </button>
            </div>
        </header>
    );
}
