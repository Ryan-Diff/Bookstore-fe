import React, { Component } from 'react'
import { addBook, fetchGenres } from './book-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        title: '',
        genre_id: 1,
        inventory: 0,
        is_available: true,
        genres: [],
    }

    componentDidMount=async () => {
        const genreData = await fetchGenres();

        this.setState({
            genres: genreData.body
        })

    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await addBook({
            title: this.state.title,
            genre_id: this.state.genre_id,
            inventory: this.state.inventory,
            is_available: this.state.is_available,
        });

        this.setState({
        title: 'Day Hiking: Columbia River Gorge',
        genre_id: 4,
        inventory: 5,
        is_available: true,
        })

        this.props.history.push('/');
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value});
    }

    handleGenreChange = e => {
        this.setState({ genre_id: e.target.value});
    }

    handleInventoryChange = e => {
        this.setState({ inventory: e.target.value});
    }

    handleAvailableChange = e => {
        this.setState({ is_available: e.target.value});
    }

    render() {
        return (
            <section className="content">
                <h2>Add To Bookshelf</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title: 
                        <input onChange={this.handleTitleChange} value={this.state.title} />
                    </label>
                    <label>
                        Genre: 
                        <select onChange={this.handleGenreChange} value={this.state.genre}>
                        {
                            this.state.genres.map((genre) => <option value={genre.id}>{genre.type}</option>)
                        }
                        </select>
                    </label>
                    <label>
                        Inventory: 
                        <input onChange={this.handleInventoryChange} type='number' value={this.state.inventory} />
                    </label>
                    <label>
                        Is Available?: 
                        <input type="checkbox" onChange={this.handleAvailableChange} />
                        Check for True
                    </label>
                    <button>Add to BookShelf</button>
                </form>
            </section>
        )
    }
};