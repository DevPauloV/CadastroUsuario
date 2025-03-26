
import './style.css'
import Img from '../../assets/trash.svg'


function Home() {

  const users = [
    {
      id: '23324234',
      name: 'Rodolfo',
      age: 33,
      email: 'ro@gmail.com'
    },
    {
      id: '233666634',
      name: 'aline',
      age: 33,
      email: 'aline@gmail.com'
    },
  ]


  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name='nome' type='text' />
        <input placeholder="Idade" name='idade' type='number' />
        <input placeholder="E-mail" name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (

        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Img} />
          </button>
        </div>
      ))}

    </div>

  )
}

export default Home
