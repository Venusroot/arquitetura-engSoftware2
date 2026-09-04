import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Projetos.css';
import './Princ.css';

interface Projeto {
  id: number;
  titulo: string;
  arquiteto: string;
  estilo: string;
  localizacao: string;
  imagens: string[];
}

const projetosData: Projeto[] = [
  {
    id: 1,
    titulo: "Residência Horizon",
    arquiteto: "Arq. Sophia Martins",
    estilo: "Minimalista",
    localizacao: "São Paulo, SP",
    imagens: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    titulo: "Loft Industrial Urban",
    arquiteto: "Studio Lucas & Co.",
    estilo: "Industrial",
    localizacao: "Curitiba, PR",
    imagens: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    titulo: "Casa das Árvores",
    arquiteto: "Arq. Beatriz Lima",
    estilo: "Contemporâneo",
    localizacao: "Rio de Janeiro, RJ",
    imagens: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

// Componente individual para cada Card com seu próprio estado de carrossel
const CardProjeto: React.FC<{ projeto: Projeto }> = ({ projeto }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevImage = () => {
    setCurrentImgIndex((prev) =>
      prev === 0 ? projeto.imagens.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) =>
      prev === projeto.imagens.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="projeto-card">
      <div className="carrossel-container">
        <img
          src={projeto.imagens[currentImgIndex]}
          alt={`${projeto.titulo} - Foto ${currentImgIndex + 1}`}
          className="carrossel-img"
        />

        <button className="carrossel-btn prev" onClick={prevImage} aria-label="Imagem anterior">
          ❮
        </button>
        <button className="carrossel-btn next" onClick={nextImage} aria-label="Próxima imagem">
          ❯
        </button>

        <div className="carrossel-dots">
          {projeto.imagens.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentImgIndex ? 'active' : ''}`}
              onClick={() => setCurrentImgIndex(idx)}
            />
          ))}
        </div>
      </div>

      <div className="projeto-info">
        <div className="projeto-tags-container">
          <span className="estilo-tag">{projeto.estilo}</span>
          <span className="local-tag">{projeto.localizacao}</span>
        </div>

        <h3>{projeto.titulo}</h3>
        <span className="arquiteto-nome">{projeto.arquiteto}</span>

        <button className="btn-detalhes">Ver Projeto</button>
      </div>
    </div>
  );
};

const Projetos: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-projetos">
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

      <section id="projetos" className="projetos-container">
        <div className="projetos-content">
          <div className="projetos-header">
            <span className="projetos-tag">Inspire-se</span>
            <h2>Explore projetos criados por <strong>nossos arquitetos</strong>.</h2>
          </div>

          <div className="projetos-grid">
            {projetosData.map((projeto) => (
              <CardProjeto key={projeto.id} projeto={projeto} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;