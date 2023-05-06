import './NavBar.css'

import { NavLink} from 'react-router-dom'

function NavBar() {

    const btnMobile = document.getElementById('btn-mobile')

    function  handleClick() {
        const nav = document.getElementById('nav')
        nav.classList.toggle('active')
    }

  return (
   <header id='header'>
        <nav id='nav'>
            <button id='btn-mobile' onClick={handleClick}>
                <span id='hamburguer'></span>
            </button>
            <ul id='menu'>
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
   </header>
  )
}

export default NavBar