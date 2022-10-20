import React from "react"

const Hijo = ({datos}) => {
    return (
        <div>Hijo

            {
                datos.map(person => <p>{person.name}</p>)
            }
        </div>
    )
}

export default Hijo