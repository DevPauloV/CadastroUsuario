
import './style.css'
import Img from '../../assets/seo-social-web-network-internet_262_icon-icons.com_61518.png'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'


// react hook - useRef


function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  async function createUsers() {

    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value 

      
    })

    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''

    getUsers() 
  }


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name='nome' type='text' ref={inputName} />
        <input placeholder="Idade" name='idade' type='number' ref={inputAge} />
        <input placeholder="E-mail" name='email' type='email' ref={inputEmail} />
        <button onClick={createUsers} className='button-default' type='button'>Cadastrar</button>
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
