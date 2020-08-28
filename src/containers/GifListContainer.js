import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchGifs()
    }

    // componentDidUpdate() {

    //     console.log("Good job your search worked!")
    // }

    fetchGifs = (term = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g&limit=10`)
            .then(resp => resp.json())
            .then(data => this.setState({ gifs: data.data }))
    }

    submitHandler = (searchTerm) => {
        this.fetchGifs(searchTerm)
    }

    render() {
        return (
            <React.Fragment>
                <GifSearch submitHandler={this.submitHandler} />
                <GifList gifs={this.state.gifs} />
            </React.Fragment>
        )
    }
}

export default GifListContainer