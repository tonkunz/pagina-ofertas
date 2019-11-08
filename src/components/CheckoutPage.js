import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import CreditCard from './CreditCard'

export default function CheckoutPage() {
  const offer = useSelector(state => state.singleOffer)

  return (
    <div className="container">
      {!offer
        ? <h2>Oh, isso é meio constrangedor... mas não achamos a oferta, tente novamente...</h2>
        : <div className="row">
          <div className="col-md-7 my-sm-3">
            <h4 className="text-center mb-3">Pagamento</h4>
            <CreditCard />
          </div>
          <div className="col-md-5 text-center">
            <h4 className="my-sm-3">Resumo da compra</h4>
            <ol>
              <li key={offer.id}>
                <p>{offer.title}</p>
                <span>Price: R${offer.price}</span>
              </li>
            </ol>
            <hr className="py-sm-4" />
            <span className="display-4">
              Total: R${offer.price}
            </span>
          </div>
        </div>
      }
    </div>
  )
}