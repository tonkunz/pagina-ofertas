import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import Loading from './templates/Loading'

import { handleSingleOffer } from '../store/actions/offers'

export default function OfferPage() {
  // Get url id
  const { id } = useParams()

  // Component state
  const [loading, setLoading] = useState(true)

  const offer = useSelector(state => state.singleOffer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleSingleOffer(id)).then(() => setLoading(false))
  }, [dispatch, id])

  return (
    <div className="container">
      {loading
        ? <Loading />
        : <>
          <div className="row">
            <div className="col-md-8">

              <img
                className="img-fluid offer-img"
                src={offer.images[0].url}
                alt="img..."
              />

            </div>
            <div className="col-md-4 text-center">
              <h3 className="text-justify mt-2">{offer.title}</h3>
              <p className="h5 pt-md-3">
                Por apenas
                 </p>
              <p className="display-4">
                R${offer.price}
              </p>

              <Link className="btn btn-danger btn-lg btn-block" to="/checkout">
                Comprar
                </Link>
            </div>
          </div>
          <hr />
          <div className="row py-3">
            <h5 className="">Descrição: </h5>
            <p className="lead">{ReactHtmlParser(offer.description)}</p>
          </div>
        </>
      }
    </div>
  )
}