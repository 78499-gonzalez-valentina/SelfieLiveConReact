import carrito from '../assets/img/carrito.png'

const CartWidget = () => {
    return (
        <div>
            <img src={carrito} alt="carrito"></img>
            <p>3</p>
        </div>
    )
}

export default CartWidget;