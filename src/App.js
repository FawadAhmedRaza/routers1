import './App.css';
import React from 'react'
import{BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes';
import Navbar from './components/navbar';

const App=()=>{
  return(

    <Router>
    <AppRoutes/>
    <Navbar/>
    </Router>
      )

}

export default App;