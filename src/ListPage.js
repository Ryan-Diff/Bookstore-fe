import React, { Component } from 'react'
import { fetchBooks } from './book-api.js';
import './App.css';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
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
        <section className='book-shelf'>
        {
        this.state.books.map((book) => {
            return <Link to={`/detail/${book.id}`} key={`${book.id}-${book.name}`} >
            
                    <div className='book-item'>
                    <ul>
                    <li>Title: {book.title}</li>  
                    <li>Genre: {book.genre}</li>
                    <li>{book.inventory} available</li>
                    <li>{book.is_available ? 'yes' : 'no'}</li>
                    </ul>
                    </div>
            </Link>
        })
        }
    </section>
    )
}
}
