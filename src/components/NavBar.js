import './NavBar.css'

import { NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/habilidades'>Habilidades</NavLink>
            </li>
            <li>
                <NavLink to='/projeto'>Projetos</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar