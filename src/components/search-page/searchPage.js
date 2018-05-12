import React from 'react';
import './SearchPage.css'
import SearchCard from '../search-cards/searchCard'

class SearchPage extends React.Component {
  state = {
    cards: []
  }
  componentDidMount () {
    fetch('/api/board/list', {
      method: 'GET'
    }).then(res => {
      return res.json()
    }).then(data => {
      this.setState({cards: data })
    })
  }
  render() {
    return (
      <div className="pageFrame">
        <div className="searchPageHeader">
          <h3>Search for Gets</h3>
        </div>
        <hr className="searchPageTitleSplit" />
        <div>
          <input type="text" className="form-control" id="searchPageInput" placeholder="Where are you looking?" aria-describedby="basic-addon2" />
          <p id="searchPageOutput">'Showing results for: </p>
        </div>
        <div className="searchPageMapBox">
          <img src="/assets/images/mapsample.PNG" alt="map sample" />
        </div>
        <div className="searchCardHolder">
          {
            this.state.cards.map((card) => {
              return <SearchCard card={card} />
            })
          }
        </div>
      </div>
    )
  }
}

export default SearchPage