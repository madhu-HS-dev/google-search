// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeSearchInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="google-search-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="google-search-card-container">
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              onChange={this.onInputValue}
              value={searchInput}
            />
          </div>
          <ul className="suggestions-container">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionsList={eachSuggestion}
                key={eachSuggestion.id}
                onChangeSearchInput={this.onChangeSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
