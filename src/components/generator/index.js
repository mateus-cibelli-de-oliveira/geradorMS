import React from 'react'
import gerarNumeros from './generate'
import './generator.css'

const Numbers = ({ quantidade }) => {
  if (!quantidade) return null

  const numbers = gerarNumeros(quantidade)

  return (
    <div className="generator">
      {numbers.map((numero, index) => (
        <span key={index} className="number-span">
          {numero}
        </span>
      ))}
    </div>
  )
}

export default Numbers
