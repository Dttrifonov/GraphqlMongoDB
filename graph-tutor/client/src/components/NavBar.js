import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function NavBar() {
   const token  = localStorage.getItem("token")
   const navigate = useNavigate()
    return (
        <nav>
        <div className="nav-wrapper #673ab7 deep-purple">
          <Link to="/" className="brand-logo left">Пословици и поговорки</Link>
          <ul id="nav-mobile" className="right">
            {
              token ?
              <>
               <li><Link to="/profile">Профил</Link></li>
               <li><Link to="/create">Добави поговорка</Link></li>
               <li><button className="red btn" onClick={()=>{
                 localStorage.removeItem("token")
                 window.location.href='/login'
               }}>Logout</button></li>

              </>:
              <>
               <li><Link to="/login">Вход</Link></li>
                <li><Link to="/signup">Регистрация</Link></li>
               </>
            }
            
           
          </ul>
        </div>
      </nav>
    )
}
