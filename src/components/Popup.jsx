import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { checkWin } from '../helpers/helper'

const Popup = (props) => {
  const {
    correctLetters,
    wrongLetters,
    selectedWord,
    setPlayable,
    playAgain,
  } = props
  let finalMessage = ''
  let finalMessageRevealWord = ''
  let playable = true

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You win! :)'
    playable = false
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost. :('
    finalMessageRevealWord = `...the word was: ${selectedWord}`
    playable = false
  }

  useEffect(() => setPlayable(playable))

  return (
    <div
      className="popup-container"
      id="popup-container"
      role="dialog"
      style={!playable ? { display: 'flex' } : { display: 'none' }}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain} type="button">
          Play Again!
        </button>
      </div>
    </div>
  )
}

Popup.propTypes = {
  correctLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedWord: PropTypes.string.isRequired,
  setPlayable: PropTypes.bool.isRequired,
  playAgain: PropTypes.func.isRequired,
}

export default Popup
