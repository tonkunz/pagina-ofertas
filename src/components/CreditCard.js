import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

export default function CreditCard() {
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')
  const [focus, setFocus] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  return (
    <div className="row">
      <div className="col">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
          issuer='visa'
        />
      </div>
      <div className="col mx-3">
        <form className="text-center" onSubmit={e => e.preventDefault()}>

          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              name="number"
              placeholder="Número do cartão"
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              name="name"
              placeholder="Nome do cartão"
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>

          <div className="row">
            <div className="col-sm-8">
              <input
                className="form-control"
                type="tel"
                name="expiry"
                placeholder="Data de validade"
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-3"
          >
            Enviar
        </button>

        </form>
      </div>
    </div >
  )
}