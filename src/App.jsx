import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Link, useLocation } from 'react-router-dom'
//import axios from 'axios'

//everything will be within only 1 component
function App() {//the main function everything will reside in
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const location = useLocation(); /*This hook returns the current location object.
   Useful if you'd like to perform some side effect whenever the current location changes.*/
  const { pathname } = location; /** "pathname" is the path of the URL => allows */

  //I need two useEffect() functions, one for each API I need to render to the webpage
  useEffect(() => {
    const fetchPosts = async() =>{
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/postsLinks")
      const data = response.data;
      setPosts(data)
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    const fetchUsers = async() =>{
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      const data = response.data;
      setUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <>
      <div>
        <nav>
          <Link to= '/' className={ pathname === '/' ? 'selected' : ''}>Home</Link>
          <Link to></Link>
          <Link></Link>

        </nav>

      </div>
    </>
  )
}

export default App
