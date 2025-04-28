import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamMember from "./components/TeamMemberCard"
import axios from 'axios'

function App() {
  const [TeamMembers, setTeamMembers] = useState([])

  return (

    <div>
      
      <h3>Title:
        software engineering</h3>
      <p>Name:john</p>


      <h3>Title:
        software engineering</h3>
      <p>Name:madhu</p>
    </div>
    
  )
}

export default App
