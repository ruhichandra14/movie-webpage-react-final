import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import WatchedList from '../containers/watched-list-container';


export default class MovieComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData : {},
            addedMovieArr : [],
            searchData : ''
        }
        this.clickPoster = this.clickPoster.bind(this);
    }

   
    componentWillReceiveProps(nextProps) {
        this.props=nextProps;
        console.log('componentWillReceiveProps',this.props.movieDataJSON[1]);
        if(this.props.movieDataJSON){
            this.setState({movieData : this.props.movieDataJSON[1],
                searchData : this.props.movieDataJSON[0]})

        }
   }

   
    clickPoster(){
        debugger;
        let poster;
        poster = this.state.movieData.Poster;
        this.refs.watchStatus.value = 'Watched';
        this.props.addMovieToWatchList(poster); 
    }


 

    renderMovieInfo(){
        
     
        if(this.state.searchData == this.state.movieData.Title){    
            return(
                <section className = "movie-list-section">
                        <div className = "section-header">
                            <img className = "movie-poster" src = {this.state.movieData.Poster} onClick = {this.clickPoster} /><h6 className="movie-title">{this.state.movieData.Title}</h6>
                            <h6 className="movie-release-date">{this.state.movieData.Released}</h6>
                            <div className = "vote-button-wrapper">
                                <button className = "vote-button upvote-button" onClick = {() => this.props.clickUpvote()}>
                                    <span>{this.props.upvoteCount}</span>
                                </button>
                                <button className = "vote-button downvote-button" onClick = {() => this.props.clickDownvote()}>
                                    <span>{this.props.downvoteCount}</span>
                                </button>
                            </div>
                            <ul className = "movie-ratings-list">
                                {(this.state.movieData.Ratings) && (
                                <ul>
                                    {(this.state.movieData.Ratings).map((Rating) => {
                                        return (
                                            <li className = "movie-rating">{Rating.Source}<span className = "rating-value">{Rating.Value}</span></li>
                                        )
                                    })}
                                </ul>
                                )}
                            <li className = "movie-rating imdb-movie-rating">IMDB<span className = "rating-value">{this.state.movieData.imdbRating}</span></li>
                            </ul>


                            <input className = "movie-watched-button" type = "button" value = "Watch" ref = "watchStatus"/>
                        </div>            
                            <article className = "movie-article">
                                <h6 className = "movie-article-description">Description</h6>
                                <p className = "movie-article-plot">{this.state.movieData.Plot}</p>
                            </article>
                </section>
            );
        }
        else{
            return(
                <section>
                    <div className = "section-header-no-selection"><p>No Movies Found</p></div>
                </section>
            )
        }
    }


    render() {
            return (
            <div>
                <header>Movieflix<input onChange={(event) => this.props.searchMovie(event)} ref="searchItem"  className = "movie-search" type = "search" placeholder = "Search Movies"/></header>
                <main>
                    {this.renderMovieInfo()}
                    <section>
                        <WatchedList/>
                    </section>
                </main>
            </div>
        )
    }
}