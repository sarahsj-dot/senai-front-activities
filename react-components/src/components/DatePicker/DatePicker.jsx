// =============================================
// DatePicker.jsx
// Componente de seleção de data
// Mostra um input que ao clicar abre um calendário
//
// Estilização: styled-components (CSS dentro do JS)
// Com styled-components criamos componentes que já
// vêm com estilo embutido, sem arquivo CSS separado
// =============================================

import { useState } from 'react'
import styled from 'styled-components'

// =============================================
// Aqui criamos os componentes estilizados
// A sintaxe é: styled.tag`css aqui`
// =============================================

// Container geral do componente
const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
`

// Label acima do input
const Label = styled.label`
  font-size: 13px;
  font-weight: bold;
  color: #444;
`

// O "input" clicável que mostra a data escolhida
const InputData = styled.button`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  width: 200px;
  color: ${(props) => props.$temValor ? '#333' : '#aaa'};

  /* Muda a borda quando está aberto */
  border-color: ${(props) => props.$aberto ? '#3498db' : '#ccc'};

  &:hover {
    border-color: #3498db;
  }
`

// Caixa do calendário que aparece embaixo do input
const Calendario = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 100;
  width: 240px;
`

// Wrapper com position relative pra o calendário se posicionar certo
const Wrapper = styled.div`
  position: relative;
`

// Cabeçalho do calendário com mês/ano e botões de navegar
const NavCalendario = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const BtnNav = styled.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  padding: 2px 8px;
  font-size: 14px;

  &:hover {
    background: #f0f0f0;
  }
`

const MesAno = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`

// Grid dos dias da semana e dos números
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`

// Célula de dia da semana (Dom, Seg, etc)
const DiaSemana = styled.div`
  text-align: center;
  font-size: 11px;
  color: #999;
  padding: 4px 0;
  font-weight: bold;
`

// Célula de número do dia
// Recebe props pra mudar de aparência conforme o estado
const Dia = styled.button`
  aspect-ratio: 1;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => props.$vazio ? 'default' : 'pointer'};
  font-size: 12px;
  background: ${(props) => {
    if (props.$selecionado) return '#3498db' // azul se selecionado
    if (props.$hoje) return '#eaf4fd'        // azul clarinho se for hoje
    return 'transparent'
  }};
  color: ${(props) => {
    if (props.$vazio) return 'transparent'
    if (props.$selecionado) return 'white'
    return '#333'
  }};

  &:hover {
    background: ${(props) => props.$vazio || props.$selecionado ? undefined : '#f0f0f0'};
  }
`

// =============================================
// Funções auxiliares pra trabalhar com datas
// =============================================

// Nomes dos meses em português
const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const DIAS_SEMANA = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

// Monta o array de dias que aparecem no calendário
// Inclui espaços vazios no início pra alinhar com o dia da semana certo
function montarGrade(ano, mes) {
  const primeiroDia = new Date(ano, mes, 1).getDay() // 0=Dom, 6=Sáb
  const totalDias = new Date(ano, mes + 1, 0).getDate()

  const grade = []

  // Adiciona espaços vazios antes do dia 1
  for (let i = 0; i < primeiroDia; i++) {
    grade.push(null)
  }

  // Adiciona os dias do mês
  for (let d = 1; d <= totalDias; d++) {
    grade.push(d)
  }

  return grade
}

// Formata a data pra exibir no input (ex: 25/06/2025)
function formatarData(data) {
  if (!data) return ''
  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0') // +1 porque janeiro = 0
  const ano = data.getFullYear()
  return `${dia}/${mes}/${ano}`
}

// =============================================
// Componente principal
// =============================================

// Props:
// - label: texto da label acima do input
// - valor: Date selecionado (ou null)
// - onChange: função chamada quando o usuário escolhe uma data
function DatePicker({ label, valor, onChange }) {

  const hoje = new Date()

  // Estado pra controlar se o calendário está aberto
  const [aberto, setAberto] = useState(false)

  // Estado pra controlar qual mês/ano está sendo exibido no calendário
  const [mes, setMes] = useState(hoje.getMonth())
  const [ano, setAno] = useState(hoje.getFullYear())

  // Monta o array de células do calendário
  const grade = montarGrade(ano, mes)

  // Vai pro mês anterior
  function irMesAnterior() {
    if (mes === 0) {
      setMes(11)
      setAno(ano - 1)
    } else {
      setMes(mes - 1)
    }
  }

  // Vai pro próximo mês
  function irProximoMes() {
    if (mes === 11) {
      setMes(0)
      setAno(ano + 1)
    } else {
      setMes(mes + 1)
    }
  }

  // Quando o usuário clica em um dia
  function selecionarDia(dia) {
    const dataSelecionada = new Date(ano, mes, dia)
    onChange(dataSelecionada)
    setAberto(false) // fecha o calendário
  }

  // Verifica se um dia é o mesmo que a data selecionada
  function ehSelecionado(dia) {
    if (!valor || !dia) return false
    return (
      valor.getDate() === dia &&
      valor.getMonth() === mes &&
      valor.getFullYear() === ano
    )
  }

  // Verifica se um dia é hoje
  function ehHoje(dia) {
    if (!dia) return false
    return (
      hoje.getDate() === dia &&
      hoje.getMonth() === mes &&
      hoje.getFullYear() === ano
    )
  }

  return (
    <Container>
      {label && <Label>{label}</Label>}

      <Wrapper>
        {/* Input clicável que abre/fecha o calendário */}
        <InputData
          type="button"
          $aberto={aberto}
          $temValor={!!valor}
          onClick={() => setAberto(!aberto)}
        >
          {valor ? formatarData(valor) : 'Selecione uma data'}
        </InputData>

        {/* Calendário — só aparece quando aberto=true */}
        {aberto && (
          <Calendario>

            {/* Cabeçalho com navegação de mês */}
            <NavCalendario>
              <BtnNav onClick={irMesAnterior}>‹</BtnNav>
              <MesAno>{MESES[mes]} {ano}</MesAno>
              <BtnNav onClick={irProximoMes}>›</BtnNav>
            </NavCalendario>

            {/* Grid dos dias */}
            <Grid>
              {/* Dias da semana no topo */}
              {DIAS_SEMANA.map((d) => (
                <DiaSemana key={d}>{d}</DiaSemana>
              ))}

              {/* Números dos dias */}
              {grade.map((dia, index) => (
                <Dia
                  key={index}
                  $vazio={!dia}
                  $selecionado={ehSelecionado(dia)}
                  $hoje={ehHoje(dia)}
                  onClick={() => dia && selecionarDia(dia)}
                >
                  {dia || ''}
                </Dia>
              ))}
            </Grid>

          </Calendario>
        )}
      </Wrapper>
    </Container>
  )
}

export default DatePicker
