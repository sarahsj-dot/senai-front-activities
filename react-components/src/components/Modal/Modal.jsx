// =============================================
// Modal.jsx
// Componente de janela modal (popup)
// Aparece na frente da tela com uma mensagem
// e botões de confirmar/cancelar
//
// Estilização: CSS Modules (Modal.module.css)
// =============================================

// Importo os estilos do arquivo .module.css
// O "styles" é um objeto onde cada chave é uma classe do CSS
// Ex: styles.fundo = a classe .fundo do arquivo
import styles from './Modal.module.css'

// Props que o componente recebe:
// - aberto: boolean que controla se o modal aparece
// - titulo: texto do cabeçalho
// - mensagem: texto do corpo
// - onFechar: função chamada ao clicar em X ou Cancelar
// - onConfirmar: função chamada ao clicar em Confirmar
function Modal({ aberto, titulo, mensagem, onFechar, onConfirmar }) {

  // Se "aberto" for false, não renderizo nada (o modal fica escondido)
  if (!aberto) return null

  return (
    // Fundo escuro que cobre a tela
    // Clicando nele também fecha o modal
    <div className={styles.fundo} onClick={onFechar}>

      {/* 
        A caixa do modal em si
        O e.stopPropagation() evita que clicar dentro da caixa
        feche o modal (pois o clique "subiria" até o fundo)
      */}
      <div className={styles.caixa} onClick={(e) => e.stopPropagation()}>

        {/* Cabeçalho */}
        <div className={styles.cabecalho}>
          <h3>{titulo}</h3>
          <button className={styles.btnFechar} onClick={onFechar}>×</button>
        </div>

        {/* Corpo com a mensagem */}
        <div className={styles.conteudo}>
          <p>{mensagem}</p>
        </div>

        {/* Rodapé com os botões */}
        <div className={styles.rodape}>
          <button className={styles.btnCancelar} onClick={onFechar}>
            Cancelar
          </button>
          <button className={styles.btnConfirmar} onClick={onConfirmar}>
            Confirmar
          </button>
        </div>

      </div>
    </div>
  )
}

export default Modal
