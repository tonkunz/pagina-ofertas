import React, { useState, useEffect } from 'react'

// Our Components
import Loading from './Loading'
import ListItem from './ListItem'
import Pagination from './Pagination'

// Api
import { getOffers } from '../services/api'

function OffersList() {
    // Our states
    const [offers, setOffers] = useState([])
    const [loading, setLoading] = useState(true)
    const [curPage, setCurPage] = useState(1)
    const [offersPerPage,] = useState(12)

    // ComponentDidMont
    useEffect(() => {
        getOffers()
            .then(data => setOffers(data))
            .then(() => setLoading(false))
    }, [])

    // Calculate current offers per page
    const lastOfferIndex = curPage * offersPerPage
    const firstOfferIndex = lastOfferIndex - offersPerPage
    const currentOffers = offers.slice(firstOfferIndex, lastOfferIndex)

    // 
    const handlePaginate = (pageNum) => setCurPage(pageNum)


    return (
        <div className="container">
            {loading
                ? <Loading />
                : <ul className="row">
                    {currentOffers.map(offer => (
                        <ListItem
                            key={offer.id}
                            offer={offer}
                        />)
                    )}
                </ul>
            }
            <Pagination
                offersPerPage={offersPerPage}
                totalOffers={offers.length}
                handlePaginate={handlePaginate}
            />
        </div>
    )
}

export default OffersList