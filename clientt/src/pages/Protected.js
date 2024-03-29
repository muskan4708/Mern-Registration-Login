
import { Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';


const Protected = ({children}) => {
    const token = document.cookie;
    console.log("token",token)
    if(!token){
     <Navigate to ="/login" replace/>
    }
 return children
 
  
}

export default Protected
