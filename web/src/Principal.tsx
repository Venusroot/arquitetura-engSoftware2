import React from 'react';
import './Princ.css';

const Index: React.FC = () => {
  return (
    <header className="hero-header">
      <div className="hero-overlay">
        <nav className="navbar">
          <div className="logo">ArqMatch</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        
        <div className="hero-content">
          <h1>A ARQUITETURA É A ARTE DE DESENHAR SONHOS</h1>
        </div>
      </div>
    </header>
  );
};

export default Index;