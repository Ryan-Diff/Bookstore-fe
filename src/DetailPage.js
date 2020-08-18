import React, { Component } from 'react'
import { fetchBook, deleteBook } from './book-api.js';

export default class DetailPage extends Component {
    state = {
        book: {}
    }

    componentDidMount = async () => {
        const data = await fetchBook(this.props.match.params.id)

        this.setState({
            book: data.body
        })
    }

    handleDelete = async () => {
        await deleteBook(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() {
        return (
            <section className='book-shelf'>
                <div className='container'>
                    <div className='book-item'>
                    <div>Title: {this.state.book.title}</div>  
                    <div>Genre: {this.state.book.genre_id}</div>
                    <div>{this.state.book.inventory} available</div>
                    <div>{this.state.book.is_available ? 'yes' : 'no'}</div> 
                    </div>
                </div>
                
                <button onClick={this.handleDelete}>Delete Book</button>
            </section>
        )
    }
}
