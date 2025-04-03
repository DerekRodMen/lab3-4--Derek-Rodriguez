

import './App.css'
 import Home from './Components/Home'
import Login from './Components/Login'
import {useContext} from 'react'

import { AuthContext } from './Context/AuthContext'
 
 function App() {
 
    
 const { user } = useContext(AuthContext)
 
 
   return (
     <>
 
 <h2>Login</h2>

        
          <div>
          {
            !user ?    
              <Login/>
              : 
            
              <Home/>
            
        }
        </div>
       
          
 
                 
     </>
   )
 }
 
 export default App