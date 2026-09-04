import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Sobre.css';
import './Princ.css';

const Sobre: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          Arq<strong>Match</strong>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>

      <section id="sobre" className="sobre-container">
        <div className="sobre-content">
          
          <div className="sobre-header">
            <span className="sobre-tag">Conectando Ideias</span>
            <h2>Transformamos a busca por arquitetura em uma <strong>experiência simples</strong>.</h2>
          </div>

          <div className="sobre-stats">
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <h3>Curadoria</h3>
              <p>Profissionais verificados com portfólio para o seu projeto.</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">Match</div>
              <h3>Inteligente</h3>
              <p>Encontre especialistas que combinam com o seu estilo.</p>
            </div>

            <div className="stat-card">
              <div className="stat-number">Agilidade</div>
              <h3>Direta</h3>
              <p>Comunicação sem intermediários para tirar o projeto do papel.</p>
            </div>
          </div>

          <div className="sobre-grid">
            <div className="sobre-imagem">
              <img 
                src="https://images.unsplash.com/photo-1668911494509-14baf3b42fda?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Design de interior moderno" 
              />
            </div>

            <div className="sobre-texto">
              <h3>Nossa missão é aproximar pessoas dos seus espaços dos sonhos.</h3>
              <p>
                O <strong>ArqMatch</strong> nasceu para simplificar a contratação de serviços de arquitetura e design de interiores.
              </p>
              <p>
                Reunimos os melhores talentos do mercado em uma única plataforma, permitindo filtrar por localização, estilo de projeto e conversar com quem entende a sua visão.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Sobre;