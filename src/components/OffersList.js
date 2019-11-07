import React, { useState } from 'react'

// Our Components
import ListItem from './ListItem'
import Pagination from './Pagination'

function OffersList({ offers }) {
    // Our states
    const [curPage, setCurPage] = useState(1)
    const [offersPerPage,] = useState(12)

    // Calculate current offers per page
    const lastOfferIndex = curPage * offersPerPage
    const firstOfferIndex = lastOfferIndex - offersPerPage
    const currentOffers = offers.slice(firstOfferIndex, lastOfferIndex)

    // 
    const handlePaginate = (pageNum) => setCurPage(pageNum)


    return (
        <div className="container">
            <ul className="row">
                {currentOffers.map(offer => (
                    <ListItem
                        key={offer.id}
                        offer={offer}
                    />)
                )}
            </ul>
            <Pagination
                offersPerPage={offersPerPage}
                totalOffers={offers.length}
                handlePaginate={handlePaginate}
            />
        </div>
    )
}

export default OffersList