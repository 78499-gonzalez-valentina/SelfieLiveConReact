import foto from '../assets/img/Valu Selfieminii.png';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className='navbar'> 
        <img src={foto} alt="logo"></img>
        <ul>
            <li>Inicio</li>
            <li>Servicio</li>
            <li>Como Funciona</li>
            <li>Eventos</li>
            <li>Contacto</li>
        </ul>
      
        <CartWidget />
    </div>
  )
}

export default NavBar;