import React, { useState } from 'react';
import './Princ.css';

const Index: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cidade, setCidade] = useState('');
  const [estilo, setEstilo] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header className="hero-header">
      <div className="bg-animated" />

      <div className="hero-overlay">
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
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        
        <div className="hero-content">
          <div className="hero-title-container">
            <h1>A ARQUITETURA É A ARTE DE <strong>DESENHAR SONHOS</strong></h1>
          </div>

          <div className="search-container">
            <form className="search-form" onSubmit={handleSearch}>
              <div className="input-group">
                <label htmlFor="local">Localização</label>
                <input 
                  type="text" 
                  id="local" 
                  placeholder="Cidade..." 
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="estilo">Projeto</label>
                <select 
                  id="estilo"
                  value={estilo}
                  onChange={(e) => setEstilo(e.target.value)}
                >
                  <option value="">Selecione o tipo</option>
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="interiores">Interiores</option>
                </select>
              </div>

              <button type="submit" className="search-btn">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;