import React from 'react'
import ReactHtmlParser from 'react-html-parser'

function ListItem(props) {
    const { offer } = props

    function truncate(str, range) {
        return str.length > range ? `${str.substring(0, range)}...` : str;
    }

    return (
        <li className="col-md-3 card" style={{ width: '18rem' }}>
            {
                // todo: <img src={} className="card-img-top" alt="..." />
            }
            <div className="card-body">
                <h5 className="card-title">
                    {truncate(offer.title, 50)}
                </h5>

                <span className="card-description text-justify">
                    {ReactHtmlParser(truncate(offer.description, 150))}
                </span>

                <p>{offer.price} - {offer.market_price}</p>

            </div>
        </li>
    )
}

export default ListItem