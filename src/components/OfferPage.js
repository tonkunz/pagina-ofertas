import React from 'react'
import { useHistory, useParams } from "react-router-dom"

export default function OfferPage({ teste }) {
  let history = useHistory()
  let { id } = useParams()

  // Just for tests
  return (
    <h5>Offer id: {id} - {teste}</h5>
  )
}