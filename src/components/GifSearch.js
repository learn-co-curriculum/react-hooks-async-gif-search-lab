import React from 'react'

export default class StudentForm extends React.Component {

  constructor(props){
    super()
    this.state = { query: ''}

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e){
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit( this.state.query )
    this.setState({query: ''})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Enter a Search Term: </label>
        <input type='text' value={this.state.query} onChange={this.handleInputChange}/>
        <input type='submit' value='Find Gifs' />
      </form>
    )
  }
}
