import React from 'react';
import { fetchBooks } from './book-api.js';
import './App.css';

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount = async () => {
    const data = await fetchBooks()

    this.setState({
      books: data.body
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          Diffen-Books
        </header>
        <section className="book-shelf">
          <div className="container">
            {
              this.state.books.map((book) => {
                return <div className="book-item">
                  <div>Name : {book.title}</div>
                  <div>Genre : {book.genre}</div>
                  <div>Stock : {book.inventory}</div>
                  <div>Is available : {book.is_available ? 'Yes' : 'No'} </div>
                </div>
              })
            }
          </div>
        </section>
      </div>
    );
  }

}



export default App;
