import React from 'react'
import PropTypes from 'prop-types'

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <>
      <div className="word" id="word">
        <div className="letters">
          {selectedWord.split('').map((letter) => (
            // eslint-ignore-next-line
            <span
              className="letter"
              key={Math.floor(Math.random() * 16 ** 128).toString(16)}
            >
              {correctLetters.includes(letter) ? letter : ''}
            </span>
          ))}
        </div>
        <div className="word-length">
          <p>{`The word is ${selectedWord.length} letters`}</p>
        </div>
      </div>
    </>
  )
}

Word.propTypes = {
  selectedWord: PropTypes.string.isRequired,
  correctLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Word
