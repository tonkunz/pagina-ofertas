import React, { useState, useEffect } from 'react'

// Our Components
import ListItem from './ListItem'

// Api
import { getOffers } from '../services/api'

function OffersList() {
    const [offers, setOffers] = useState([])

    // ComponentDidMont
    useEffect(() => {
        getOffers()
            .then(data => setOffers(data))
    }, [])

    return (
        <div className="container">
                <ul className="row">
                    {offers.map(offer => (
                        <ListItem
                            key={offer.id}
                            offer={offer}
                        />)
                    )}
                </ul>
        </div>
    )
}

export default OffersList