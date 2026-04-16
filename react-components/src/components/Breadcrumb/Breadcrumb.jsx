// =============================================
// Breadcrumb.jsx
// Componente de navegação "migalha de pão"
// Mostra onde o usuário está dentro do site
// Ex: Home > Produtos > Camisetas
//
// Estilização: CSS puro (classes do App.css)
// =============================================

// O componente recebe uma lista de páginas pelo prop "paginas"
// Cada página tem: { nome, link }
// A última da lista é a página atual (sem link)

function Breadcrumb({ paginas }) {

  return (
    // nav é uma tag semântica do HTML5 pra navegação
    <nav>
      <ul className="breadcrumb">

        {/* Percorro todas as páginas com map */}
        {paginas.map((pagina, index) => {

          // Verifico se é o último item (página atual)
          const eUltimo = index === paginas.length - 1

          return (
            <li key={index}>

              {/* Se for o último item, mostro só o texto sem link */}
              {eUltimo ? (
                <span className="atual">{pagina.nome}</span>
              ) : (
                // Se não for o último, mostro o link + a setinha
                <>
                  <a href={pagina.link}>{pagina.nome}</a>
                  <span className="separador">›</span>
                </>
              )}

            </li>
          )
        })}

      </ul>
    </nav>
  )
}

export default Breadcrumb
