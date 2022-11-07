import React, {useState} from 'react'

const ItemCount = ({stock}) => {

const [contador, setContador] = useState(0)

const agregarContador = () => {
    setContador (contador + 1)
}

const restarContador = () => {
    setContador(contador - 1)
}

    return (
        <div className='cantidad'>
            <p>Stock: {stock}</p>
            <button onClick={restarContador} disabled={contador<=0}>-</button>
            <p>{contador}</p>
            <button onClick={agregarContador} disabled={contador>= stock}>+</button>
        </div>
    )
}

export default ItemCount;