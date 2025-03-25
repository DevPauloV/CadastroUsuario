
import './style.css'
import Trash from 'C:\Users\vitor\dev-cadastrousuario\src\trash.svg'


function Home() {


  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      <div>
        <div>
          <p>Nome:</p>
          <p>Idade:</p>
          <p>Email:</p>
        </div>
      </div>
      <button>
        <img src={Trash} />
      </button>



    </div>

  )
}

export default Home
