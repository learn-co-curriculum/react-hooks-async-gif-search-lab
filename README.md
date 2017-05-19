# Giphy Search!

### Instructions

You're going to be building out a Gif search using the Giphy API. The URL for the API is

`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC`

![giphy search](async.gif)

### Your Components

#### `<App/>`
  Your top level component will be the `<App />` component-- no surprises there! It will be responsible for rendering the `<NavBar />` component (this component is already provided for you, note the project has bootstrap loaded in) and the `<GifListContainer />` component
  
#### `<GifListContainer />`

> A container does data fetching and then renders its corresponding sub-component. That’s it.

- [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005) Learn React with chantastic
- [Presentational vs Container Componets](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) Dan Abramov

In our app the `<GifListContainer />` will be responsible for fetching the data from the giphy api, storing the first 3 gifs from the response in it's component **state**, and passing that data down to it's child the `<GifList>` component as a prop.

It will also render a `<GifSearch />` component that renders the form. `<GifListContainer />` should pass down a submit handler function to `<GifSearch />` as a prop.

#### `<GifList />`

`<GifList />` is a *presentational* component. It receives data from it's props and renders html given the input data. It can render a top level `<ul>` with each gif as an `<li>`. 

#### `<GifSearch />`

The `<GifSearch />` component will render a form that receives the user input for the giphy search. The text input should be a *controlled component* that stores the value of the input in it's component state and renders the DOM accordingly. The React component is always in charge of what the DOM looks like.

`<GifSearch />` should receive a callback prop from it's parent.  On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in  `<GifListContainer />`, that will actually query the api with the text the user has entered.


<p class='util--hide'>View <a href='https://learn.co/lessons/react-async-gif-search-lab'>React Async Gif Search Lab</a> on Learn.co and start learning to code for free.</p>
