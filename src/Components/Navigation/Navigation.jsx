import { Link } from "react-router-dom"

import s from './Navigation.module.css'
export const Navigation = ()=>{
    return (
        <nav className={s.container}>
            <Link to="/generate">Генерировать Qr-код</Link>
            <Link to="/scan">Сканировать Qr-код</Link>
            <Link to='/'> История генерирования</Link>
            <Link to='/'> История сканирования</Link>
            <Link to='/generatehistory'> Полная история</Link>
            <Link to='/scanhistory'> Полная история сканирования</Link>
            
        </nav>
    )
} 
