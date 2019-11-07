import React from 'react'
import { useParams } from "react-router-dom"

export default function OfferPage({ teste }) {
  let { id } = useParams()

  // Just for tests
  return (
    <h5>Offer id: {id} - {teste}</h5>
  )
}