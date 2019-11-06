import React from 'react'

function ListItem(props) {
    const { offer } = props

    return (
        <li className="col-md-3 card" style={{ width: '18rem' }}> 
            {
                // todo: <img src={} className="card-img-top" alt="..." />
            }
            <div className="card-body">
                <h5 className="card-title">{offer.title}</h5>
                <p className="card-text">

                </p>
            </div>



                {offer.id}
                <p>{offer.title}</p>
                <p>{offer.price}</p>
            
        </li>
    )
}

export default ListItem