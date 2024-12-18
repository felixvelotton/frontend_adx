import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: '',
  });

  const [cadastros, setCadastros] = useState([]); // Estado para armazenar os cadastros

  // Atualiza o estado conforme os campos do formulário são preenchidos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Envia os dados do formulário ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://backend-adx.vercel.app/cadastros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Cadastro realizado com sucesso!');
        console.log('Novo cadastro:', result);

        // Limpa o formulário
        setFormData({ nome: '', email: '', celular: '' });

        // Atualiza a lista de cadastros
        fetchCadastros();
      } else {
        alert('Erro ao realizar o cadastro.');
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      alert('Erro ao conectar ao servidor.');
    }
  };

  // Busca os cadastros do backend
  const fetchCadastros = async () => {
    try {
      const response = await fetch('https://backend-adx.vercel.app/cadastros');
      const data = await response.json();
      setCadastros(data);
    } catch (error) {
      console.error('Erro ao buscar cadastros:', error);
    }
  };

  // Carrega os cadastros assim que a página é carregada
  useEffect(() => {
    fetchCadastros();
  }, []);

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
        <form onSubmit={handleSubmit} className="cadastro-form">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="celular"
            placeholder="Celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
          <button type="submit">CADASTRE-SE</button>
        </form>

        <h2>Cadastros Realizados</h2>
        <ul>
          {cadastros.map((cadastro) => (
            <li key={cadastro.id}>
              {cadastro.nome} - {cadastro.email} - {cadastro.celular}
            </li>
          ))}
        </ul>
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
