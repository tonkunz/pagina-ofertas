import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'

function ListItem(props) {
    const { offer } = props

    function truncate(str, range) {
        return str.length > range ? `${str.substring(0, range)}...` : str;
    }

    return (
        <li className="col-lg-4 app-list-li">
            <div className="card">
                <img
                    src={offer.image.url}
                    className="card-img"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {truncate(offer.title, 45)}
                    </h5>

                    <p className="card-text">
                        {ReactHtmlParser(truncate(offer.description, 150))}
                    </p>
                    <h6>Preço: R${offer.price}</h6>
                    <h6>Preço de mercado: R${offer.market_price}</h6>
                    <Link to={`/offers/${offer.id}`} className="btn btn-primary">Comprar</Link>
                </div>
            </div>
        </li>
    )
}

export default ListItem