import React from 'react';
import CV from '../../assets/CV.pdf';
import './index.css';

export default function Banner({ temaAtual }) {

    const banner = "banner" + (temaAtual ? "" : "-modo-escuro");
    const icons = "icones-redes-sociais" + (temaAtual ? "" : "-modo-escuro");
    const titulo = "titulo-principal" + (temaAtual ? "" : "-modo-escuro");
    const btn = "btn-cv" + (temaAtual ? "" : "-modo-escuro");
    return (
        <section className={banner} id="banner">
            <div className="limite-largura banner-content">
                <div className="agrupa-inicio">
                    <div className={icons}>
                        <a href="https://github.com/jotavcarvalho" target='_blank'><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/joaovcarvalho3/" target='_blank'><i class="bi bi-linkedin"></i></a>
                        <a href="mailto:jvjvcarvalho345@gmail.com"><i class="bi bi-envelope"></i></a>
                    </div>
                    <div className={titulo}>
                        <h2>João Carvalho</h2>
                    </div>
                    <div className={btn}>
                        <a href={CV} download="CV.pdf">Baixar CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
