import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import {Routes,Route,Link} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import AddUser from './Components/AddUser';
import View from './Components/view';
import Edit from './Components/Edit';


function App() {
  return (
   
     <div className="App">
      <div className='nav'>
        <ul>
         <Link to='/'><li>Home</li></Link>
         <Link to='/Dashboard'><li>Dashboard</li></Link>
       </ul>
      
      </div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/AddUser' element={<AddUser/>}/>
        <Route path='/View/:id' element={<View/>}/>
        <Route path='/Edit/:id' element={<Edit/>}/>
      </Routes>
      </div>
   
     
   
  );  
}

export default App;
