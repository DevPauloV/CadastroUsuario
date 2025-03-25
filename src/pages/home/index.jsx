
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
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (

        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
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
