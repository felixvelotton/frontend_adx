import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header" style={{ backgroundImage: "url('/assets/Banner.jpg')" }}>
        <div className="branding">
          <img src="/assets/logo.png" alt="Logo" className="logo" />
          <h1>ADX</h1>
          <h2>Associação Itabirana de Damas e Xadrez</h2>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#novidades">Novidades</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#cadastro">Cadastro</a></li>
            <li><a href="#quem-somos">Quem Somos</a></li>
          </ul>
        </nav>
      </header>

      {/* Destaques */}
      <section id="novidades" className="section destaque">
        <h2>Torneio de Iniciantes</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img src="/assets/torneio.png" alt="Torneio de Iniciantes" />
      </section>

      {/* Galeria */}
      <section id="galeria" className="section">
        <h2>Galeria de Fotos</h2>
        <div className="gallery">
          <img src="/assets/galeria1.jpg" alt="Galeria 1" />
          <img src="/assets/galeria2.jpg" alt="Galeria 2" />
          <img src="/assets/galeria3.jpg" alt="Galeria 3" />
          <img src="/assets/galeria4.png" alt="Galeria 4" />
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="section projetos">
        <h2>Projetos ADX</h2>
        <div className="projetos-container">
          <div className="projeto-item">
            <img src="/assets/projeto1.jpg" alt="Projeto 1" />
            <h3>Projeto 1</h3>
            <p>Descrição do projeto 1.</p>
          </div>
          <div className="projeto-item">
            <img src="/assets/projeto2.jpg" alt="Projeto 2" />
            <h3>Projeto 2</h3>
            <p>Descrição do projeto 2.</p>
          </div>
          <div className="projeto-item">
            <img src="/assets/projeto3.jpg" alt="Projeto 3" />
            <h3>Projeto 3</h3>
            <p>Descrição do projeto 3.</p>
          </div>
        </div>
      </section>

      {/* Cadastro */}
      <section id="cadastro" className="section cadastro">
        <h2>Cadastro de Alunos</h2>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Celular" />
          <button type="submit">CADASTRE-SE</button>
        </form>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="section quem-somos">
        <h2>Quem Somos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ backgroundImage: "url('/assets/chessboard.jpg')" }}>
        <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
        <p>Associação Itabirana de Damas e Xadrez</p>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
