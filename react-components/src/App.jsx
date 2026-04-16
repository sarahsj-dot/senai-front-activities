import { useState } from 'react'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import Modal from './components/Modal/Modal'
import DatePicker from './components/DatePicker/DatePicker'
import './App.css'

function App() {

  //Controla se o modal está aberto ou fechado
  const [modalAberto, setModalAberto] = useState(false)

  //Guarda a data selecionada no DatePicker
  const [dataSelecionada, setDataSelecionada] = useState(null)

  // Função chamada quando o usuário confirma o modal
  function handleConfirmar() {
    alert('foi')
    setModalAberto(false)
  }

  return (
    <div className="pagina">

      <h1>Componentes React</h1>
      <p>Demonstração de três formas de estilizar componentes em React</p>

      {/* CSS Puro */}
      <div className="secao">
        <h2>Breadcrumb</h2>

        <Breadcrumb
          paginas={[
            { nome: 'Home', link: '/' },
            { nome: 'Livros', link: '/livros' },
            { nome: 'Gêneros', link: '/livros/generos' },
            { nome: 'Fantasia' }, //página atual
          ]}
        />
      </div>

{/* css module */}
      <div className="secao">
        <h2>Modal</h2>
        {/* Botão que abre o modal */}
        <button
          onClick={() => setModalAberto(true)}
          style={{
            padding: '8px 16px',
            background: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Abrir Modal
        </button>
        <Modal
          aberto={modalAberto}
          titulo="Confirmar ação"
          mensagem="Certeza?"
          onFechar={() => setModalAberto(false)}
          onConfirmar={handleConfirmar}
        />
      </div>

      {/* styled-components*/}
      <div className="secao">
        <h2>DatePicker</h2>
        <DatePicker
          label="Selecione uma data:"
          valor={dataSelecionada}
          onChange={(data) => setDataSelecionada(data)}
        />

        {/* Mostra a data selecionada embaixo, se houver */}
        {dataSelecionada && (
          <p style={{ marginTop: '10px', fontSize: '13px', color: '#555' }}>
            Data escolhida: <strong>{dataSelecionada.toLocaleDateString('pt-BR')}</strong>
          </p>
        )}
      </div>

    </div>
  )
}

export default App
