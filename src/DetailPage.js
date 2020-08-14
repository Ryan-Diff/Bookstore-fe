import React, { Component } from 'react'
import { fetchBook } from './book-api.js';

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

    render() {
        return (
            <section className='book-shelf'>
                <div className='container'>
                    <div className='book-item'>
                    <div>Title: {this.state.book.title}</div>  
                    <div>Genre: {this.state.book.genre}</div>
                    <div>{this.state.book.inventory} available</div>
                    <div>{this.state.book.is_available ? 'yes' : 'no'}</div> 
                    </div>
                </div>
            </section>
        )
    }
}
