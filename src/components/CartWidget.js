import carrito from '../assets/img/carrito.png'

const CartWidget = () => {
    return (
        <div className='carrito'>
            <img src={carrito} alt="carrito" className='fotoCarrito'></img>
            <p>3</p>
        </div>
    )
}

export default CartWidget;