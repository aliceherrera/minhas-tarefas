import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Assistir a aula 4',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar conta Net',
    descricao: 'Baixar fatura',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Ir à academia',
    descricao: 'Treino C',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quotcategoria&quot e &quottermo&quot</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
