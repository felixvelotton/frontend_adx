import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="branding">
          <h1 className="adx">ADX</h1>
          <h2 className="asso">Associação Itabirana de Xadrez</h2>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="/iconos/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="/iconos/ficon.png" alt="Facebook" />
          </a>
        </div>
      </header>

      {/* Menu */}
      <nav className="menu">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#destaques">Novidades</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#quem-somos">Quem Somos</a></li>
        </ul>
      </nav>

      {/* Destaques */}
      <section id="destaques" className="section">
        <h1 className="titulo">Destaques</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim placeat accusantium quas sequi.</p>
        <img src="/destaques/destaque.jpg" alt="Destaque" />
      </section>

      {/* Galeria */}
      <section id="galeria" className="section">
        <h1 className="titulo">Galeria de Fotos</h1>
        <div className="gallery">
          <img src="/galeria/galeria4.png" alt="Atividade 1" />
          <img src="/galeria/galeria4.png" alt="Atividade 2" />
          <img src="/galeria/galeria4.png" alt="Atividade 3" />
          <img src="/galeria/galeria4.png" alt="Atividade 4" />
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="section quem-somos">
        <h1>Quem Somos</h1>
        <div className="subsecao">
          <h2>Crença</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="subsecao">
          <h2>Valores</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="subsecao">
          <h2>Missão</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Associação Itabirana de Damas e Xadrez; 2024. Todos os direitos reservados.</p>
        <p>Desenvolvido por Félix Velotto</p>
      </footer>
    </div>
  );
}

export default App;
