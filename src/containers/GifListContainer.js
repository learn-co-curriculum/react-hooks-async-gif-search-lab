import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  handleSearch(query){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(resData => this.setState({gifs: resData.data.slice(0, 3)}))
  }

  render(){
    return(
      <div className='row'>
        <div className='col-md-4'>
          < GifList gifs={this.state.gifs} />
        </div>

        <div className='col-md-8'>
          < GifSearch  onSubmit={ this.handleSearch.bind(this) }/>
        </div>
      </div>
    )
  }



}
