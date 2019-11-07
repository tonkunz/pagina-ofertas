import React from 'react'

export default function Pagination(props) {
  const { offersPerPage, totalOffers, handlePaginate } = props

  // Handle page numbers
  const pageNumbers = []

  for (let i = 1; i <= (totalOffers / offersPerPage); i++) {
    pageNumbers.push(i)
  }

  if (totalOffers % offersPerPage) {
    pageNumbers.push(pageNumbers.length + 1)
  }

  return (
    <nav className="nav justify-content-center">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              href="!#"
              className="page-link"
              onClick={() => handlePaginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}