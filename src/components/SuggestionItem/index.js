// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onChangeSearchInput} = props
  const {suggestion} = suggestionsList

  const onClickArrow = () => {
    onChangeSearchInput(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="single-suggestion">{suggestion}</p>
      <button type="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="suggestion-logo"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
