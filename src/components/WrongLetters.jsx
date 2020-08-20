import React from 'react'
import PropTypes from 'prop-types'

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        <p>Wrong letters:</p>
        {wrongLetters
          .map((letter) => <span key={letter}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]),
            null
          )}
      </div>
    </div>
  )
}

WrongLetters.propTypes = {
  wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default WrongLetters
