import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserDetails from './components/UserDetails'
import Repositories from './components/Repositories'
import axios from 'axios'



function App() {

  const [inputValue, setInputValue] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])


  useEffect(() => {
    setLoading(true)
    if (username) {
      const getUser = async () => {
        const res = await axios.get(`https://api.github.com/users/${username}`)
        setUser(res.data)
        if (User) {
          setLoading(false)
        }
        console.log(res.data);
      }
      getUser()
    }
  }, [username])

  useEffect(() => {
    if (username) {
      const getRepos = async () => {
        const res = await axios.get(`https://api.github.com/users/${username}/repos`)
        setRepos(res.data)
        console.log(res.data);
      }
      getRepos()
    }
  }, [username, user])



  const searchaHandler = () => {
    setUsername(inputValue)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="search">
          <input className='searchbar' type="text" placeholder='Search a User...' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
          <button onClick={searchaHandler}>Search</button>
        </div>
        {
          username ? <>
            <UserDetails user={user} />
            <Repositories repos={repos} />
          </> :
            <h1>No User</h1>
        }
      </div>
    </div>
  )
}

export default App
